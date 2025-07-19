import React, { useRef } from 'react'

const RefEx = () => {
    const inputref = useRef(null)

    const handleEvent = () =>{
        inputref.current.focus()
    } 
  return (
    <>
        <button onClick={handleEvent}>Click Here</button>
        <input type="text" ref={inputref} />
    </>
  )
}

export default RefEx
