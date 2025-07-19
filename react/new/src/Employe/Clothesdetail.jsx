import React from 'react'

const Clothesdetail = (props) => {
  return (
    <>
    <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.brand}</td>
        <td>{props.price}</td>
        <td>{props.size}</td>
    </tr>  
    </>
  )
}

export default Clothesdetail
