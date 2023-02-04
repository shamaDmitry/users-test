import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";

const UserCard = ({ data }) => {
  const { first_name, last_name, position } = data;
  const navigate = useNavigate();

  const getInitials = useCallback((first, last) => {
    return `${first.slice(0, 1)}${last.slice(0, 1)}`
  }, [first_name, last_name]);

  const handleCardClick = (user) => (event) => {
    navigate(`/users/${user._id}`, {
      state: user
    });
  }

  return (
    <div
      className="border px-4 py-4 inline-flex flex-col items-center cursor-pointer hover:shadow-xl transition-all"
      onClick={handleCardClick(data)}
    >
      <div className="rounded-full mb-2 h-[50px] w-[50px] bg-red-500 flex items-center justify-center text-white font-bold">
        {getInitials(first_name, last_name)}
      </div>

      <p className="font-bold leading-5 mb-2">
        {first_name} {last_name}
      </p>

      <p className="text-neutral-600 text-sm font-light leading-[1]">
        {position}
      </p>
    </div>
  );
}

export default UserCard;
