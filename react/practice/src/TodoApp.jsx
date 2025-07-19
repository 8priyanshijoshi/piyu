import React, { useEffect, useState } from 'react'

const TodoApp = () => {
    const [task, setTask] = useState('');
    const [todo, setTodo] = useState(() => {
        const saved =  localStorage.getItem('todo');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(todo));
    },[todo]);
        
    const addtask = () => {
        if(task.trim()) {
            setTodo([...todo,task.trim()])
            setTask('');
        }
    }

    const deletetask = (index) => {
        setTodo(todo.filter((_,i) => i !== index));
    };

  return (
    <div>
        <h2>Todo List</h2>
        <input type="text" placeholder='Enter Task' value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={addtask}>Add Task</button>
        <ul>
            {todo.map((item,index)=> (
                <li key={index}>
                    
                    {item} <button onClick={() => 
                    deletetask(index)}>Delete Task</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp
