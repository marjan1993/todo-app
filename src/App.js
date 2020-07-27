import React, { useState, useEffect } from 'react';
import TodoInput from './TodoInput';
import Todo from './Todo';
import { TodoContext, TodoInputContext } from './context/index';
import './App.css';

function App() {
  const initialTodos = window.localStorage.getItem('todos') 
  ? JSON.parse(window.localStorage.getItem('todos'))  //the localStorage can only save strings and we don't want string we want an array, so we have to parse it back to being an array
  : [];

  const [todos, setTodos] = useState(initialTodos);

  function addTodo (value) {
    const newTodos = [...todos, {text:value, isComplete:false}];//get all the existing arrays and append it with new abject that is the new todo
    //since this is a new todo is not completed--so isComplete:false
    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index,1);//we only want to remove 1 element
    //The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    setTodos(newTodos)
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;//this means ==> the isCompleted field of that todo will be equal to the opposite of what is currently is
    setTodos(newTodos);
  }

  useEffect(() => {
    //'todos' --> we can name it anything we'd like, it's a name of whatever that we want to save in the localStorage
    //localStorage cn only save strings so we need to convert our array to string format so we'll use JSON.stringify
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);//we only want to call this function when our todos array changes

//With useContext hooks
  return (
    <div className="App">
      <div className='todo-list'>
      {/* we need to display this component n number of times so we will map it*/ }
        {todos.map((todo, index) => {
          return (
            <TodoContext.Provider 
            key={index}
            value={{todo, index, removeTodo, completeTodo}}//we want to pass an object so we put it in {}
            >
              <Todo />
            </TodoContext.Provider>
          );
        })}
        <TodoInputContext.Provider value={{addTodo}} >
          <TodoInput />
        </TodoInputContext.Provider>
      </div>
    </div>
  );
}

export default App;


//Without useContext hooks

// return (
//   <div className="App">
//     <div className='todo-list'>
//     {/* we need to display this component n number of times so we will map it*/ }
//       {todos.map((todo, index) => {
//         return <Todo todo={todo} index={index} removeTodo={removeTodo} completeTodo={completeTodo} />
//       })}
//       <TodoInput addTodo={addTodo} />
//     </div>
//   </div>
// );
