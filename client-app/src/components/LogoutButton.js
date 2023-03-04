import React from 'react';
import { useHistory } from 'react-router-dom';

function LogoutButton() {
  const history = useHistory();

  const handleLogout = () => {
    // Clear user session or authentication token
    // Redirect to login page
    // For example, if using JWT tokens:
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <button className='button' onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
