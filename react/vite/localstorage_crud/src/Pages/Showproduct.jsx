import React, { useEffect, useState } from 'react'
import Navigation from '../Components/Navigation'

const Showproduct = () => {
    const [getdata, setGetdata] = useState([])

    const setimg = {
        height: "100px",
        width: "100px",
        objectFit: "contain"
    }

    const fetchdata = () => {
        const productdata = JSON.parse(localStorage.getItem("myproducts"))
        setGetdata(productdata)
        console.log(productdata);
    }

    useEffect(() => {
        fetchdata()
    }, [])

    return (
        <>
            <Navigation />

            <div className="container">
                <table className='table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Brand</th>
                            <th>Product Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Rate</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getdata.map(items =>
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>{items.brand}</td>
                                    <td>{items.pname}</td>
                                    <td>{items.des}</td>
                                    <td>
                                        <div><s>₹{items.oldprice}</s></div>
                                        <div>₹{items.newprice}</div>
                                    </td>
                                    <td>{items.rate}%</td>
                                    <td>
                                        <img src={items.image} style={setimg} />
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Showproduct
