// Toggle button between "ON" and "OFF"

import React, { useState } from 'react'

const Que3 = () => {
    
    const [ison, setison] = useState(false)

  return (
    <>
        <button onClick={() => setison(!ison)}>
            {ison ? "ON" : "OFF"}
        </button> 
    </>
  )
}

export default Que3
