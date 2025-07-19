import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }
    const decrement = () =>{
        setCount(count - 1)
    }
  return (
    <>  
        <div className="container">
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <p>{count}</p>
        </div>
    </>
  )
}

export default Counter
