import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const[data,getdata] = useState([])

    useEffect( () =>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(data => getdata(data))
    }
    )

  return (
    <>
        <div className="container">
            <table border={2}>
                <thead>
                    <tr>
                        <th>USERID</th>
                        <th>ID</th>
                        <th>TITLE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(items =>
                            <tr key={items.userId}>
                                <td>{items.userId}</td>
                                <td>{items.id}</td>
                                <td>{items.title}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default FetchApi
