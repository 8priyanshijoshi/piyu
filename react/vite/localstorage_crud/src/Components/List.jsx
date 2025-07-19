import React from 'react'
import { Link } from 'react-router-dom'

const List = ({ menus }) => {

    return (
        <>
            {
                menus.map((items, index) =>
                    <li key={index} className='px-2'>
                        <Link to={items.path}>{items.pathname}</Link>
                    </li>
                )
            }
        </>
    )
}

export default List