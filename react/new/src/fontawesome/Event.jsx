import React from 'react'

const Event = () => {

    let msg = () => {
        alert("welcome user")
    }
  return (
    <>
      <button className='btn btn-primary' onClick={msg}>
        click
      </button>
    </>
  )
}

export default Event
