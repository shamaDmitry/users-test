import {useNavigate} from "react-router-dom";
import React from "react";

const BackButton = () => {
  const navigate = useNavigate();

  return <button
    className="border px-4 py-1 rounded-md text-sm font-bold capitalize"
    onClick={() => navigate('/users')}
  >
    back
  </button>
};

export default BackButton;