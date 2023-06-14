import Checked from "../Icons/Checked";
import Unchecked from "../Icons/Unchecked";
import styles from "./ListItem.module.css";
import React, { useState } from "react";

const ListItem = (props) => {
  const [changeActive, setChangeActive] = useState(false);
  const [newValue, setNewValue] = useState(props.item.value);

  const valueChangeHandler = (event) => {
    setNewValue(event.target.value);
  };

  const todoChangeHandler = () => {
    setChangeActive(true);
  };

  const valueSubmitHandler = () => {
    if (!newValue) return;
    props.onChange(props.item.id, newValue);
    setChangeActive(false);
  };

  const keyPressHandler = (event) => {
    if (event.code === "Enter") valueSubmitHandler();
  };

  const toRender = changeActive ? (
    <React.Fragment>
      <input
        className={`form-control col-md-8 ${styles.input} `}
        autoFocus
        value={newValue}
        onChange={valueChangeHandler}
        onKeyDown={keyPressHandler}
      />
      <div className={styles.options}>
        <img
          className={styles.img}
          onClick={valueSubmitHandler}
          src={"save.jpg"}
          alt={""}
        />
      </div>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <span>{props.item.value}</span>
      <div className={styles.options}>
        {props.item.done ? (
          <Checked
            className={styles.img}
            onClick={() => props.onSetDone(props.item.id)}
          />
        ) : (
          <Unchecked
            className={styles.img}
            onClick={() => props.onSetDone(props.item.id)}
          />
        )}
        <img
          className={styles.img}
          onClick={todoChangeHandler}
          src={"change.jpg"}
          alt={""}
        />
        <img
          className={styles.img}
          onClick={() => props.onRemove(props.item.id)}
          src={"remove.jpg"}
          alt={""}
        />
      </div>
    </React.Fragment>
  );

  return (
    <li
      className={`card card-body my-3 ${styles.li} ${
        props.item.done && styles["li-done"]
      }`}
    >
      {toRender}
    </li>
  );
};

export default ListItem;
