import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos';


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
    setTodos(updatedTodosX);
  };

  // const deleteTodo = (todoIdDel) => {
  //   const deletingList = todos.map((todo) => {
  //     if (todo.id === todoIdDel) {
  //       updatedItems.splice(index, 1)
  //     }
  //     return todo
  //   })

  //   const deleteItem = (index) => {
  //     const updatedItems = [...items]; // Create a copy of the array
  //     updatedItems.splice(index, 1); // Remove the item at the specified index
  //     setItems(updatedItems); // Update the state with the modified array
  //   };
  //   setTodos(updatedTodos)
  // }

  return (
     // Menambah CSS
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      {/* Gunakan method map di sini */}
      <Todos todos={todos} toggleCompleted={toggleCompleted} deleteTodo={deleteTodo}/>
    </div>
  )
  
}

export default App
