import React, { useState } from 'react'

const UserInput2 = () => {
    const [input,setInput] = useState({
        username : "",
        city: ""
    });

    const setupdate = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

    const citylist = ["surat", "vadodara", "ahemdabad", "anand", "palanpur", "mehsana"]

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <input type="text" name='username' value={input.username} placeholder='name' onChange={setupdate}/>
                </div>
                <div className="col-12">
                    <select name="city" value={input.city} onChange={setupdate}>
                    <option>----select-----</option>
                    {
                        citylist.map(items =>
                            <option key={items} value ={items}>
                                {items}
                            </option>
                        )
                    }
                    </select>
                </div>
            </div>
            <p>Nmae: {input.username}</p>
            <p>City: {input.city}</p>
        </div>
    </>
  )
}

export default UserInput2
