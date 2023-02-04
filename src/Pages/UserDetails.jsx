import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const UserDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    first_name,
    last_name,
    position,
    _type
  } = location.state;

  return (
    <div className="container mx-auto">
      <button
        className="border px-4 py-1 rounded-md text-sm font-bold capitalize"
        onClick={() => navigate('/users')}
      >
        back
      </button>
      <h1>
        User details:
      </h1>
      <ul>
        <li>{first_name}</li>
        <li>{last_name}</li>
        <li>{position}</li>
        <li>{_type}</li>
      </ul>
    </div>
  );
}

export default UserDetails;
