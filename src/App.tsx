import React from 'react';
import './App.css';
import Login from './page/Login';
import { useAuthentication } from './store/useAuth';

function App() {
  const { user, isLogin, isLogout } = useAuthentication();
  console.log(useAuthentication());
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Login />
    </div>
  );
}

export default App;
