import React from 'react'

const Carddes = ({icon,title,paragraph}) => {
  return (
    <>
        <div className="cardes">
            <h3><i className={icon}></i></h3>
            <h2>{title}</h2>
            <p>{paragraph}</p>
        </div>
    </>
  )
}

export default Carddes
