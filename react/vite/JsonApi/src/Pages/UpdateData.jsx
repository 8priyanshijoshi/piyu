import React, { useState } from 'react'
import Lists from '../Components/Lists'

const UpdateData = ({ update, setUpdate, refreshdata }) => {
    const { des, city } = Lists()
    // const [update, setUpdate] = useState({})

    const handleChange = (e) => {
        setUpdate({ ...update, [e.target.name]: e.target.value })
    }

    const updateValue = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/employee/${update.id}`, {
            method: "PUT",
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => setUpdate(data))
        refreshdata();
    }

    return (
        <>
            <div className="modal fade" id="update_data" tabIndex="-1" aria-labelledby="update_dataLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="update_dataLabel">Update Employee Data</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={updateValue}>
                                <div className="row g-2">
                                    <div className="col-12">
                                        <div>Id : {update.id}</div>
                                    </div>
                                    <div className="col-12">
                                        <div>Employee name</div>
                                        <input type="text" name="empname" className='form-control' value={update.employeename} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12">
                                        <select className='form-select' name='city' value={update.city} onChange={handleChange} required>
                                            <option>--- select city ---</option>
                                            {
                                                city.map(cities =>
                                                    <option value={cities} key={cities}>
                                                        {cities}
                                                    </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <div>Mobile NO</div>
                                        <input type="number" name="mobileno" value={update.mobileno} onChange={handleChange} required className='form-control' />
                                    </div>
                                    <div className="col-12">
                                        <select className='form-select' name='designation' value={update.designation} onChange={handleChange} required>
                                            <option>--- select Designation ---</option>
                                            {
                                                des.map(des =>
                                                    <option value={des} key={des}>
                                                        {des}
                                                    </option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className="col-12">
                                        <div>Salary</div>
                                        <input type="number" name="salary" className='form-control' value={update.salary} onChange={handleChange} required />
                                    </div>
                                    <div className="col-12">
                                        <div>Profile</div>
                                        <input type="text" name="profile" className='form-control' value={update.profile} onChange={handleChange} required />
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-primary w-100' type='submit'>Update Data</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateData