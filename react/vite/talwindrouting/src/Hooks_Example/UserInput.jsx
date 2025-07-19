import React, {useState} from 'react'

const UserInput = () => {
    const [input, setInput] = useState("");
    const [city, setCity] = useState("");

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <input type="text" value={input} placeholder='Name' onChange={(e) => setInput
                    (e.target.value)
                    } />
                </div>
                <div className="col-12">
                    <input type="text" value={city} placeholder='City' onChange={(e) => setCity
                    (e.target.value)
                    } />
                </div>
            </div>
            <p>Name: {input}</p>
            <p>City: {city}</p>
        </div>
    </>
  )
}

export default UserInput
