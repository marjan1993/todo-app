import React, { useState, useContext } from 'react';
import { TodoInputContext } from './context/index';
import './App.css';

//with useContext hooks
function TodoInput() {
  const [ value, setValue ] = useState('');
  const { addTodo } = useContext(TodoInputContext);

  function handleSubmit(e) {
    e.preventDefault();
    if(!value) return;//if the value is empty (not true) we shouldn't add value
    addTodo(value);
    setValue('');
  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={(e) => setValue(e.target.value)} 
      />
    </form>
  );
}

export { TodoInput as default };


//without useContext hooks

// function TodoInput({ addTodo }) {
//   const [ value, setValue ] = useState('');

//   function handleSubmit(e) {
//     e.preventDefault();
//     if(!value) return;//if the value is empty (not true) we shouldn't add value
//     addTodo(value);
//     setValue('');
//   }
 
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type='text'
//         className='input'
//         value={value}
//         onChange={(e) => setValue(e.target.value)} 
//       />
//     </form>
//   );
// }
