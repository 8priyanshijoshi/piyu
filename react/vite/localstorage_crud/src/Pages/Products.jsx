import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../Components/Navigation'


const Products = () => {
    const [input,setInput] = useState({
        id:"",
        pname:"",
        brand:"",
        des:"",
        oldprice:"",
        rate: "",
        newprice:"",
        image:"",
    })

    const handleChange = (e) => {
        const changedata = { ...input, [e.target.name]: e.target.value}

        if(e.target.name === "oldprice" || e.target.name === "rate"){
            let price = parseFloat(changedata.oldprice);
            let rate = parseFloat(changedata.rate);
            if(price > 0 && rate > 0){
                changedata.newprice = Math.round((price - ((price * rate) / 100)))
            }
            else{
                changedata.newprice = ""
            }
        }
        setInput(changedata)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let existdata = JSON.parse(localStorage.getItem("myproducts")) || []
        let getdata = [...existdata,input]
        localStorage.setItem("myproducts",JSON.stringify(getdata))
        alert("Data added successfully!")

        setInput({
            id:"",
            pname:"",
            brand:"",
            des:"",
            oldprice:"",
            rate: "",
            newprice:"",
            image:"",
        })
    }
  return (
    <>
    <Navigation/>
        <div className="container">
            <h3>Add product</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-6">
                        <input className="form-control" type="number" name='id' placeholder='ID' onChange={handleChange} value={input.id} required />
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="text" name='pname' placeholder='Product Name' onChange={handleChange} value={input.pname} required />
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="text" name='brand' placeholder='Brand' onChange={handleChange} value={input.brand} required />
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="text" name='des' placeholder='Description' onChange={handleChange} value={input.des} required />
                    </div>
                    <div className="col-5">
                        <input className="form-control" type="number" name='oldprice' placeholder='OldPrice' onChange={handleChange} value={input.oldprice} required />
                    </div>
                    <div className="col-2">
                        <input className="form-control" type="number" name='rate' placeholder='rate' onChange={handleChange} value={input.rate} required />
                    </div>
                    <div className="col-5">
                        <input className="form-control" type="number" name='newprice' placeholder='NewPrice' onChange={handleChange} value={input.newprice} read only />
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="text" name='image' placeholder='Image URL' onChange={handleChange} value={input.image} required />
                    </div>
                    <div className="col-6">
                        <button className='btn btn-primary'>Add Product</button>
                    </div>
                </div>
            </form>

            <div className='py-2'>
                    <Link to="/Showproduct">Show Product</Link>
                </div>

        </div>
    </>
  )
}

export default Products
