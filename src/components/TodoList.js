import React from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';

function TodoList({ todos, setTodos }) {
  return (
    <div>
      <ul className={styles.todolist}></ul>
      {todos.map((todo) => {
        return (
          <TodoListItem
            task={todo.task}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />
        );
      })}
    </div>
  );
}

export default TodoList;
