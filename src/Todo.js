import React, { useContext } from 'react';
import { TodoContext } from './context/index'
import './App.css';

function Todo() {
  const { todo, index, completeTodo, removeTodo } = useContext(TodoContext);

  return (
    <div 
      className='todo'
      style = {{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
        {todo.text}
        <div>
            <button 
              className='todo-functions completed' 
              onClick={() => completeTodo(index)}
            >
              Complete
            </button>
            <button 
              className='todo-functions remove' 
              onClick={() => removeTodo(index)}
            >
              X
            </button>
            {/*to binding the props from parent component, we will use function that contains the prop that passing from parent, not just reference or call it  */}
        </div>
    </div>
  );
}

export { Todo as default };