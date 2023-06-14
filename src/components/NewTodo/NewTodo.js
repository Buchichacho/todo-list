import styles from "./NewTodo.module.css";
import { useState } from "react";

const NewItem = (props) => {
  const [todo, setTodo] = useState("");

  const buttonClickHandler = () => {
    if (todo)
      props.onNewTodo({
        id: Math.random().toString(16),
        value: todo,
        done: false,
      });
    setTodo("");
  };

  const inputChangeHandler = (event) => {
    setTodo(event.target.value);
  };

  return (
    <div className={`card card-body my-3 ${styles.shadow} ${styles.bg}`}>
      <h3 className={`text-capitalize text-center ${styles.gradienttext}`}>
        My To-Do List
      </h3>
      <div className="container">
        <div className="mb-3">
          <input
            className={`form-control col-md-8 ${styles.input} `}
            onChange={inputChangeHandler}
            placeholder="New Todo"
            value={todo}
          ></input>
        </div>
        <div className={`mb-3 ${styles.center}`}>
          <button
            className={`btn btn-danger ${styles.button1}`}
            onClick={buttonClickHandler}
          >
            Add new task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
