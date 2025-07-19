import React from 'react'

const Username = (props) => {
    return <div>{props.uname}</div>
}

const Propsex1 = () => {
  return (
    <>
        <Username uname="piyu"/>
        <Username uname="aneri"/>
        <Username uname="devanshi"/>
        <Username uname="maitri"/>
        <Username uname="moksha"/>
    </>
  )
}

export default Propsex1
