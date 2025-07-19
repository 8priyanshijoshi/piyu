import React from 'react'

const Emp_MapEx = () => {
    let Empdetails = [
        {id: 1, name: "Aman", sal: 30000},
        {id: 2, name: "Anita", sal: 40000},
        {id: 3, name: "Anjali", sal: 35000},
        {id: 4, name: "Amish", sal: 50000},
        {id: 5, name: "Ami", sal: 45000},
        {id: 6, name: "Amisha", sal: 60000},
        {id: 7, name: "Ayushi", sal: 55000},
        {id: 8, name: "Ayush", sal: 70000},
    ]

    //filter

    let data = Empdetails.filter(salary => salary.sal < 45000)
    let filterdata = data.map(items =>
      <tr key ={items.id}>
          <td>{items.id}</td>
          <td>{items.name}</td>
          <td>{items.sal}</td>
      </tr>
    )
  return (
    <>
      <table className='table' border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
               {
                Empdetails.map(items =>
                    <tr key={items.id}>
                        <td>{items.id}</td>
                        <td>{items.name}</td>
                        <td>{items.sal}</td>
                    </tr>
                )
               }
            </tbody>
      </table>

      <hr/>

      <table className='table' border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
               {filterdata}
               <tr>
                <td>Total data:{filterdata.length}</td>
               </tr>
            </tbody>
      </table>

    </>
  )
}

export default Emp_MapEx
