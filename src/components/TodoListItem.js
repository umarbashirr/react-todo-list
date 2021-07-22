import React from 'react';
import styles from './TodoListItem.module.css';
import { FaTimes, FaCheck } from 'react-icons/fa';

function TodoListItem({ task, todo, todos, setTodos }) {
  const deleteTodoHandler = (event) => {
    event.preventDefault();
    setTodos(
      todos.filter((item) => {
        return item.id !== todo.id;
      })
    );
  };

  const completeTodoHandler = (event) => {
    event.preventDefault();
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <li
      className={`${styles.listitem} ${
        todo.completed ? `${styles.complete}` : ''
      }`}
    >
      {task}
      <div className={styles.listbuttons}>
        <button
          type='submit'
          className={styles.successbutton}
          onClick={completeTodoHandler}
        >
          <FaCheck />
        </button>
        <button
          type='submit'
          className={styles.deletebutton}
          onClick={deleteTodoHandler}
        >
          <FaTimes />
        </button>
      </div>
    </li>
  );
}

export default TodoListItem;
