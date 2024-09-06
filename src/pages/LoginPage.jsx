import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const { login } = useAuth();
  const {authState} = useAuth()

  const handleAdminLogin = () => {
    console.log(authState);
    login('admin');
    console.log(authState);

  };

  const handleUserLogin = () => {
    console.log(authState);

    login('user');
    console.log(authState);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleAdminLogin}>Login as Admin</button>
      <button onClick={handleUserLogin}>Login as User</button>
    </div>
  );
};

export default LoginPage;
