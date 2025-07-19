import React, { useEffect, useState } from 'react'

const Todoapp2 = () => {
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState(() => {
        const saved = localStorage.getItem('todo');
        return saved ? JSON.parse(saved) : []
    })

    useEffect( () => {
        localStorage.setItem('todo',JSON.stringify(todo));
    },[todo]);

    const addTask = ( () => {
        if (task.trim()){
            setTodo([...todo,task.trim()])
            setTask('');
        }
    })

    const DeleteTask = ( (index) => {
        setTodo(todo.filter((_ , i) => i !== index ));
    })

  return (
    <div>
        <h2>Todo List</h2>
        <input type="text" placeholder='Add Task' value={task} onChange={(e) => setTask(e.target.value)} />  
        <button onClick={addTask}>Add Task</button>    
        <ul>
            {todo.map((item,index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => DeleteTask(index)}>Delete</button>
                </li> 
            ))}
        </ul>  
    </div>
  )
}

export default Todoapp2
