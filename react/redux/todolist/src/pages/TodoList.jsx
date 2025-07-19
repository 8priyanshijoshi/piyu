import React, { useState } from 'react'
import { addtodo } from '../logic/todoSlice'
import { useDispatch } from 'react-redux'


const TodoList = () => {
    const dispatch = useDispatch()
    const [todo, setTodo] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addtodo(todo))
        alert("data added successfully")
        setTodo("")
    }

    return (
        <>
            <div className="container py-3">
                <div className="row w-50">
                    <div className="col-8">
                        <input type="text" placeholder='Add todos....' className='form-control' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    </div>
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={handleSubmit}>Add</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList