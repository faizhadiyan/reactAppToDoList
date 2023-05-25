import React from "react";
import TodoItem from './TodoItem';

const Todos = ({todos, toggleCompleted, deleteTodo}) => {

    const styles = {
        container: {
          width: '40%',
          margin: '0 auto',
        },
    }

    return (
        <div style={styles.container}>
            {todos.map((todo) => {
            return <TodoItem 
                    // key={todo.id} INI UTK APA??
                    todo={todo} 
                    toggleCompleted={toggleCompleted}
                    deleteTodo={deleteTodo}/>
            })}
        </div>
    )
  }
  
export default Todos