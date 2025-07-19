import React from 'react'

const ConditionEx2 = () => {
    const Employee = ({id,name,salary}) => {
        if (salary >= 35000){
            return  <tr>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{salary}</td>
                    </tr>
        }
    }
  return (
    <>
       <table border={2 }>
            <thead>
                <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SALARY</th>
                </tr>
            </thead>
            <tbody>
                <Employee id="1" name="priyanshi" salary="30000"/>
                <Employee id="2" name="daraksha" salary="40000"/>
                <Employee id="3" name="tarun" salary="50000"/>
            </tbody>    
        </table> 
    </>
  )
}

export default ConditionEx2
