import React, { useReducer } from 'react'

const initialvalue = 0;
const arithmetic = (mystate,action) => {
    switch (action) {
        case "add":
            return mystate + 1
        case "subtract":
            return mystate - 1
        case "multiply":
            return mystate * 3
        case "reset":
            return 0
    }
}

const ReducerEx1 = () => {
    const [state,setstate] = useReducer(arithmetic,initialvalue)
  return (
    <>
        <button onClick={() => {setstate("add")}}>Add</button>
        <button onClick={() => {setstate("subtract")}}>Subtract</button>
        <button onClick={() => {setstate("multiply")}}>Multiply</button>
        <button onClick={() => {setstate("reset")}}>Reset</button>
        <p>{state}</p>
    </>
  )
}

export default ReducerEx1
