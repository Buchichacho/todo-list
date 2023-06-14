import styles from "./List.module.css";
import ListActions from "./ListActions";
import ListItem from "./ListItem";

const List = (props) => {
  const todos = props.items.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      onSetDone={props.onSetDone}
      onRemove={props.onRemove}
      onChange={props.onChange}
    />
  ));

  return (
    <div>
      <div className={`card card-body my-3 ${styles.shadow} ${styles.bg}`}>
        <h3 className={`text-capitalize text-center ${styles.gradienttext}`}>
          Filter by
        </h3>
        <ListActions
          filter={props.filter}
          showDone={props.showDone}
          showTodo={props.showTodo}
          showAll={props.showAll}
        />
        <hr className={styles.hr}></hr>
        <ul className={`${styles.ul}`}>{todos}</ul>
      </div>
    </div>
  );
};

export default List;
