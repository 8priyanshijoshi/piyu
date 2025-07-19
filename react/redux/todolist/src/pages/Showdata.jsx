import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo, updatetodo } from '../logic/todoSlice'

const Showdata = () => {
    const dispath = useDispatch();
    const todo = useSelector(state => state.alltodos.todos)
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const handleDelete = (id) => {
        if (confirm("are you sure want to delete this record?")) {
            dispath(deletetodo(id))
        }
    }

    const fetchData = (id, text) => {
        setEditId(id)
        setEditText(text)
    }

    const updateData = (id) => {
        dispath(updatetodo({ id, updateText: editText }))
        setEditId(null)
        setEditText("")
    }

    return (
        <div>
            <div className="container">
                <table className='table w-50'>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th className='text-end'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todo.map(item =>
                                <tr key={item.id}>
                                    <td>
                                        {
                                            editId === item.id ?
                                                <input type='text' className='form-control' value={editText} onChange={(e) => setEditText(e.target.value)} /> : item.text
                                        }
                                    </td>
                                    <td className='text-end'>
                                        {
                                            editId ?
                                                <button className='mx-1 btn btn-primary' onClick={() => updateData(item.id)}>Update</button>
                                                :
                                                <div>
                                                    <button className='mx-1 btn btn-primary' onClick={() => fetchData(item.id, item.text)}>Edit</button>
                                                    <button className='mx-1 btn btn-danger' onClick={() => handleDelete(item.id)}>Delete</button>
                                                </div>
                                        }

                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Showdata