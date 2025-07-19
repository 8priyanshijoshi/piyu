import React from 'react'

const Employedetails = (props) => {
  return (
    <>
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.salary}</td>
        </tr>
    </>
  )
}

export default Employedetails
