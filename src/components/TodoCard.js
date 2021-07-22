import React, { useState } from 'react';
import styles from './TodoCard.module.css';
import TodoInputForm from './TodoInputForm';
import TodoList from './TodoList';

function TodoCard() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className={styles.todocard}>
      <h1 className={styles.todotitle}>Todo List</h1>
      <TodoInputForm
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default TodoCard;
