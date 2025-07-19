// Implement a counter using useState

import React, { useState } from 'react'

const Que5 = () => {
    const [Count, SetCount] = useState(0);
  return (
    <div>
        <p>Count: {Count}</p>
        <button onClick={() => SetCount(Count + 1)}>Increment</button>
        <button onClick={() => SetCount(Count - 1)}>Decrement</button>
        <button onClick={() => SetCount(0)}>Reset</button>
    </div>
  )
}

export default Que5
