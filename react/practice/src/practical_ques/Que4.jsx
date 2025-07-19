import React from 'react'

const Que4 = () => {

  const handleClick = () => {
    alert("Button clicked!");
  }

  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Que4
