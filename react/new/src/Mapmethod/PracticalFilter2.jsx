import React from 'react'

const PracticalFilter2 = () => {
    let Studetails = [
        {id: 1, name: "Aman", percentage:"90%", grade:"A+"},
        {id: 2, name: "Anita", percentage:"70%" , grade:"B+"},
        {id: 3, name: "Anjali", percentage:"80%" , grade:"A"},
        {id: 4, name: "Amish", percentage:"72%" , grade:"B+"},
        {id: 5, name: "Ami", percentage:"60%" , grade:"B"},
        {id: 6, name: "Amisha", percentage:"92%" , grade:"A+"},
        {id: 7, name: "Ayushi", percentage:"66%" , grade:"B"},
        {id: 8, name: "Ayush", percentage:"60%" , grade:"B"}
    ]

    let data = Studetails.filter(grade => ['A' , 'A+' , 'B'].includes(grade.grade))
    let filterdata = data.map(grade =>
      <tr key ={grade.id}>
          <td>{grade.id}</td>
          <td>{grade.name}</td>
          <td>{grade.percentage}</td>
          <td>{grade.grade}</td>
      </tr>
    )
  return (
    <>
      <table className='table' border={1}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Percentage</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
               {filterdata}
               <tr>
                <td colSpan={4}>Total data:{filterdata.length}</td>
               </tr>
            </tbody>
      </table>
    </>
  )
}

export default PracticalFilter2
