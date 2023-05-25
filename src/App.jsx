import React, { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

export const TodoContext = createContext()

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish Progate React Course',
      completed: false,
    },
    {
      id: 2,
      title: 'Have lunch with Guru Domba',
      completed: false,
    },
    {
      id: 3,
      title: 'Study React with Ninja Ken',
      completed: false,
    },
  ])


  const styles = {
    container: {
      textAlign: 'center',
      padding: '12px',
    },
    title: {
      fontSize: '36px',
    },
  }

  const toggleCompleted = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  const deleteTodo = (todoId) => {
    const updatedTodosX = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodosX)
  }

  // Definisikan function addTodo
  // const addTodo = () => {
  //   console.log('This is addTodo Function is ')
  // }

  const addTodo = (todoTitle) => {
    if (todoTitle === '') {
      return
    }

    const newTodo = {
      id: todos.length + 1,
      title: todoTitle,
      completed: false,
    }

    const updatedTodos = todos.concat(newTodo)
    setTodos(updatedTodos)
  }


  return (
     // Menambah CSS
    // <div style={styles.container}>
    //   <h1 style={styles.title}>My Todo List</h1>
    //   {/* Gunakan method map di sini */}
    //   <TodoForm addTodo={addTodo}/>
    //   <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    // </div>

    // Bungkus app dengan provider dari context
    <TodoContext.Provider value={{ toggleCompleted, deleteTodo }}>
      <div style={styles.container}>
        <h1 style={styles.title}>My Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <Todos todos={todos} />
      </div>
    </TodoContext.Provider>
  )
  
}

export default App
