import React, { useState } from 'react'

const Employee = () => {

    const empdata = [
        { id:1, empname:"piyu", salary:35000, grade:"B+" },
        { id:2, empname:"ayushi", salary:39000, grade:"B+"},
        { id:3, empname:"dharti", salary:38000, grade:"B+"},
        { id:4, empname:"devanshi", salary:40000, grade:"A"},
        { id:5, empname:"aneri", salary:32000, grade:"B+"},
        { id:6, empname:"riddhi", salary:25000, grade:"B"},
        { id:7, empname:"mitali", salary:38000, grade:"B+"},
        { id:8, empname:"foram", salary:15000, grade:"C"},
        { id:9, empname:"maitri", salary:56000, grade:"A"},
        { id:10, empname:"moksha", salary:70000, grade:"A+"}
    ]

    const [data,setData] = useState(empdata);
    //state for search
    const [search,setSearch] = useState("")
    //state for filter
    const[filterdata,setFilter] = useState(data)

    function handlechanges(e) {
        let val = e.target.value;
        setSearch(val);
        let filter_data = data.filter(emp => emp.grade.toUpperCase()==val.toUpperCase());
        if (val) {
            setFilter(filter_data);
        } else {
            setFilter(data);
        }
    }
    
  return (
    <>
        <div className="container">
            <div>
                <input type="search" placeholder='filter by grade' classname='form-control' value={search} onChange={handlechanges} />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee</th>
                        <th>Salary</th>
                        <th>grade</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    filterdata.length > 0 ?
                    (filterdata.map(items =>
                        <tr key={items.id}>
                            <td>{items.id}</td>
                            <td>{items.empname}</td>
                            <td>{items.salary}</td>
                            <td>{items.grade}</td>
                        </tr>
                    )):
                    <tr>
                        <td colSpan={3}>
                            <div>
                                Data not Found!
                            </div>
                        </td>
                    </tr>
                   }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Employee
