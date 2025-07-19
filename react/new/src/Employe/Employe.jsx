import React from 'react'
import Employedetails from './Employedetails'

const Employe = () => {
  return (
    <>
        <table border={1}>
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>SALARY</th>
            </thead>
            <tbody>
                <Employedetails id="1" name="priyanshi" salary="30000"/>
                <Employedetails id="2" name="daraksha" salary="40000"/>
                <Employedetails id="3" name="tarun" salary="50000"/>
            </tbody>    
        </table> 
    </>
  )
}

export default Employe
