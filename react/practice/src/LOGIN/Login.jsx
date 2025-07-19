import React from 'react'

const Login = () => {
  return (
    <>
        <div className="container">
            <h1>Login</h1>
            <div className="row">
                <div className="col-12">
                    <input type="text" placeholder='username' />
                </div>
                <div className="col-12">
                    <input type="text" placeholder='password' />
                </div>
                <div className="col-12">
                    <button type="submit" className='btn btn-primary'>Login</button>
                </div>
                <div className="col-12">
                    <p>Don't have any account?</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login
