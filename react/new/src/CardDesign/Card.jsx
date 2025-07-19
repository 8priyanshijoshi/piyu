import React from 'react'
import Carddes from './Carddes'

const Card = () => {
  return (
    <>
        <div style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)" , gap:"20px", border:"1px solid gray", background:"gray"}  }>
            <Carddes icon="fa-solid fa-user" title="USER" paragraph="hello user"/>
            <Carddes icon="fa-solid fa-house" title="HOME" paragraph="hello home"/>
            <Carddes icon="fa-solid fa-location-dot" title="LOCATION" paragraph="hello location"/>
        </div>
    </>
  )
}

export default Card
