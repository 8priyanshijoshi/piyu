import React from 'react'
import Clothesdetail from './Clothesdetail'

const Clothes = () => {
  return (
    <>
        <table border={1}>
            <thead>
                <th>ID</th>
                <th>NAME</th>
                <th>BRAND</th>
                <th>PRICE</th>
                <th>SIZE</th>
            </thead>
            <tbody>
                <Clothesdetail id="1" name="tees" brand="zara" price="2000" size="xs"/>
                <Clothesdetail id="2" name="jeans" brand="louis" price="3000" size="s"/>
                <Clothesdetail id="1" name="one-piece" brand="levis" price="4500" size="l"/>
            </tbody>
        </table>
    </>
  )
}

export default Clothes
