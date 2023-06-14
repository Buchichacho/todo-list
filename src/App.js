import React from "react";
import List from "./components/List/List";
import NewTodo from "./components/NewTodo/NewTodo";
import Actions from "./components/Actions/Actions";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const filteredTodos =
    filter === "All"
      ? todos
      : filter === "Done"
      ? todos.filter((todo) => todo.done)
      : todos.filter((todo) => !todo.done);

  const newTodoHandler = (todo) => {
    setTodos((prevState) => [...prevState, todo]);
  };

  const removeAllHandler = () => {
    setTodos([]);
  };

  const removeDoneHandler = () => {
    setTodos((prevState) => prevState.filter((item) => !item.done));
  };

  const setDoneHandler = (id) => {
    setTodos((prevState) => [
      ...prevState.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : { ...todo }
      ),
    ]);
  };

  const filterHandler = (type) => () => setFilter(type);

  const todoRemoveHandler = (id) => {
    setTodos((prevState) => [...prevState.filter((todo) => todo.id !== id)]);
  };

  const todoChangeHandler = (id, value) => {
    setTodos((prevState) => [
      ...prevState.map((todo) =>
        todo.id === id ? { ...todo, value } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-10 col-md-8 mx-auto mt-4">
          <NewTodo onNewTodo={newTodoHandler} />
          <List
            showDone={filterHandler("Done")}
            showAll={filterHandler("All")}
            showTodo={filterHandler("Todo")}
            onSetDone={setDoneHandler}
            onRemove={todoRemoveHandler}
            onChange={todoChangeHandler}
            items={filteredTodos}
            filter={filter}
          />
          <Actions
            onRemoveAll={removeAllHandler}
            onRemoveDone={removeDoneHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
