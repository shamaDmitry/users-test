import React from 'react';
import BasicLayout from '../Layouts/BasicLayout';
import { useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();

  return (
    <BasicLayout>
      <button
        className="border px-4 py-1 rounded-md text-sm font-bold capitalize"
        onClick={() => navigate(-1)}
      >
        back
      </button>
      <h1>
        User details
      </h1>
    </BasicLayout>
  );
}

export default UserDetails;
