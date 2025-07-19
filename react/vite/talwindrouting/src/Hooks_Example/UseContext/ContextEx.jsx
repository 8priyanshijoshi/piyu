import React, { useState } from 'react'

const ContextEx = () => {
    const [user, setUser] = useState("Hello World")
  return (
    <>
        <h3>component</h3>
        <Context1 user={user} />
    </>
  )
}

const Context1 = ({user}) => {
    
  return (
    <>
        <h3>component 1</h3>
        <Context2 user={user} />
    </>
  )
}

const Context2 = ({user}) => {
   
  return (
    <>
        <h3>component 2</h3>
        <Context3 user={user} />
    </>
  )
}

const Context3 = ({user}) => {
   
  return (
    <>
        <h3>component 3</h3>
        <Context4 user={user} />
    </>
  )
}

const Context4 = ({user}) => {
  return (
    <>
        <h3>component 4</h3>
        <Context5 user={user} />
    </>
  )
}

const Context5 = ({user}) => {
  return (
    <>
        <h3>component 5</h3>
        <h1>{user}</h1>
    </>
  )
}

export default ContextEx
