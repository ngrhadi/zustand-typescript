import React from 'react';

const Login = () => {
  return (
    <div>
      <form
        style={{
          margin: '50px 100px 50px 100px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <label>User Name</label>
        <input id="userName" type="text"></input>
        <label>Email</label>
        <input id="email" type="email"></input>
        <label>Password</label>
        <input id="password" type={'password'}></input>
        <button
          type="submit"
          style={{ padding: '5px', marginTop: '10px', cursor: 'pointer' }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
