import React from 'react';
import styles from './TodoInputForm.module.css';

function TodoInputForm({ inputText, setInputText, todos, setTodos }) {
  const inputChangeHandler = (event) => {
    setInputText(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim() === '') {
      alert('Please Fill The Details');
    } else {
      setTodos([
        ...todos,
        {
          id: Math.random() * 1000,
          task: inputText,
          completed: false,
        },
      ]);
      setInputText('');
    }
  };

  return (
    <form className={styles.todoform} onSubmit={formSubmitHandler}>
      <input
        type='text'
        name='todoinput'
        id='todoinput'
        placeholder='Add New Task'
        value={inputText}
        className={styles.inputform}
        onChange={inputChangeHandler}
      />
      <button type='submit' className={styles.todosubmitbutton}>
        Add
      </button>
    </form>
  );
}

export default TodoInputForm;
