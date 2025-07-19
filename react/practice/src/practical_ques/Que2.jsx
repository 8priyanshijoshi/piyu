// Passing props from parent to child component

import React from 'react'

const Que2 = () => {

     const Childcompo = ({message}) => {
            return <p>{message}</p>;
        };

        const Parentcompo = () => {
            return <Childcompo message="Hello from parent!" />;
        };

  return (
    <>
        <Parentcompo/>
    </>
  )
}

export default Que2
