import React, { useEffect, useState } from 'react'
import Addempdata from './Addempdata'
import UpdateData from './Updatedata'


const Showempdata = () => {
    const [getdata, setGetdata] = useState([])
    const [updatedata, setUpdatedata] = useState({})

    const fetchdata = () => {
        fetch("http://localhost:3000/employee")
            .then(res => res.json())
            .then(data => setGetdata(data))
    }
    const imgset = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }

    // const fetchdata = () => {
    //     fetch("http://localhost:3000/employee")
    //         .then(res => {
    //             if (!res.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return res.json();
    //         })
    //         .then(data => setGetdata(data))
    //         .catch(error => console.error('There was a problem with the fetch operation:', error));
    // }

    const deleteData = (id) => {
        if (confirm("Are you sure want to delete this data?")) {
            fetch(`http://localhost:3000/employee/${id}`, {
                method: "DELETE",
            })
            fetchdata()
        }
    }

    const updateEmpdata = (items) => {
        setUpdatedata(items)
    }

    
    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <Addempdata fetchdata={fetchdata} />

            <div className="container py-2">
                <h3 className='bg-success p-2 text-white'>Show Data</h3>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Emp name</th>
                            <th>City</th>
                            <th>Mobile No</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>Profile</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map(items =>
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.employeename}</td>
                                    <td>{items.city}</td>
                                    <td>{items.mobileno}</td>
                                    <td>{items.designation}</td>
                                    <td>{items.salary}</td>
                                    <td>
                                        <img src={items.profile} style={imgset} />
                                    </td>
                                    <td>
                                        <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#update_data" onClick={() => updateEmpdata(items)}>Edit</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => deleteData(items.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <UpdateData update={updatedata} setUpdate={setUpdatedata} refreshdata={fetchdata}/>
        </>
    )
}

export default Showempdata