import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext()

const ContextEx2 = () => {
    const [user, setUser] = useState("Hello World")
  return (
    <>
        <UserContext.Provider value={user}>
            <h3>component</h3>
            <Context1 user={user} />
        </UserContext.Provider>
    </>
  )
}

const Context1 = () => {
    
  return (
    <>
        <h3>component 1</h3>
        <Context2 />
    </>
  )
}

const Context2 = () => {
   
  return (
    <>
        <h3>component 2</h3>
        <Context3 />
    </>
  )
}

const Context3 = () => {
   
  return (
    <>
        <h3>component 3</h3>
        <Context4/>
    </>
  )
}

const Context4 = () => {
  return (
    <>
        <h3>component 4</h3>
        <Context5/>
    </>
  )
}

const Context5 = () => {
    const user = useContext(UserContext)
  return (
    <>
        <h3>component 5</h3>
        {user}
    </>
  )
}

export default ContextEx2
