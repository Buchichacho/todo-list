import styles from "./ListActions.module.css";

const ListActions = (props) => {
  return (
    <div className={`container ${styles.center}`}>
      <button
        className={`btn btn-primary ${styles.button1} ${
          props.filter === "All" && styles.highlight
        }`}
        onClick={props.showAll}
      >
        All
      </button>
      <button
        className={`btn btn-primary ${styles.button1} ${
          props.filter === "Done" && styles.highlight
        }`}
        onClick={props.showDone}
      >
        Done
      </button>
      <button
        className={`btn btn-primary ${styles.button1} ${
          props.filter === "Todo" && styles.highlight
        }`}
        onClick={props.showTodo}
      >
        Todo
      </button>
    </div>
  );
};

export default ListActions;
