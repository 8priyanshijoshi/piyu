import React, { useState } from 'react'

const Addempdata = ({ fetchdata }) => {
    const city = ["Surat", "Navsari", "Baroda", "Vapi", "Bharuch", "Ankleshwar"];

    const des = ["Manager", "Software Developer", "Worker", "Employee", "Peon"]

    const [input, setInput] = useState({
        id: "",
        employeename: "",
        city: "",
        mobileno: "",
        designation: "",
        salary: "",
        profile: "",
    })

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/employee", {
            method: "POST",
            body: JSON.stringify(input)
        })
        alert("Data Added successfully")
        setInput({
            id: "",
            employeename: "",
            city: "",
            mobileno: "",
            designation: "",
            salary: "",
            profile: "",
        })
        fetchdata();
    }

    return (
        <>
            <div className="container">
                <h3 className='bg-success p-2 text-white'>Add Employee Data</h3>
                <form onSubmit={handleSubmit}>
                    <div className="row g-2">
                        <div className="col-6">
                            <input type="number" name="id" placeholder='ID' className='form-control' value={input.id} onChange={handleChange} required />
                        </div>
                        <div className="col-6">
                            <input type="text" name="employeename" placeholder='Employee full name' className='form-control' value={input.employeename} onChange={handleChange} required />
                        </div>
                        <div className="col-6">
                            <select className='form-select' value={input.city} onChange={handleChange} name='city' required>
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
                        <div className="col-6">
                            <input type="number" name="mobileno" placeholder='Mobile no' className='form-control' value={input.mobileno} onChange={handleChange} required />
                        </div>
                        <div className="col-6">
                            <select className='form-select' value={input.designation} onChange={handleChange} name='designation' required>
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
                        <div className="col-6">
                            <input type="number" name="salary" placeholder='Salary' className='form-control' value={input.salary} onChange={handleChange} required />
                        </div>
                        <div className="col-8">
                            <input type="text" name="profile" placeholder='Image URL' className='form-control' value={input.profile} onChange={handleChange} required />
                        </div>
                        <div className="col-4">
                            <button className='btn btn-primary w-100' type='submit'>Add Data</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Addempdata