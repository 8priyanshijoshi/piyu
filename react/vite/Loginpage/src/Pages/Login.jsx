import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = () => {
    let getUsers = JSON.parse(localStorage.getItem('userdata'));
    let findUser = getUsers.find(
      (user) =>
        user.username === login.username && user.password === login.password
    );
    if (findUser) {
      localStorage.setItem('loginuser', login.username);
      navigate('/Home');
    } else {
      alert('fail');
    }
  };

  return (
    <>
      <div className="container w-50 shadow p-4">
        <h1>Login</h1>
        <div className="row p-2">
          <div className="col-12 p-2">
            <input
              type="text"
              placeholder="Username"
              className="form-control"
              onChange={handleChange}
              name="username"
              value={login.username}
            />
          </div>
          <div className="col-12 p-2">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              onChange={handleChange}
              name="password"
              value={login.password}
            />
          </div>
          <div className="col-12 p-2">
            <button className="btn btn-primary" onClick={loginUser}>
              Login
            </button>
          </div>
          <div className="col-12 p-2">
            <p>
              New User? <Link to="/Register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
