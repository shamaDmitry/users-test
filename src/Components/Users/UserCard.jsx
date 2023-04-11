import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

const UserCard = ({ data, handleOpenModal }) => {
  const { first_name, last_name, position } = data;
  const navigate = useNavigate();

  const getInitials = useCallback((first, last) => {
    return `${first.slice(0, 1)}${last.slice(0, 1)}`.toUpperCase()
  }, [first_name, last_name]);

  const handleCardClick = (user) => (event) => {
    navigate(`/users/${user._id}`);
  };

  const handleUserEdit = (userData) => (event) => {
    event.stopPropagation()

    navigate(`/users/${userData._id}/edit`, {
      state: userData
    });
  };

  return (
    <div
      className="relative text-center border px-4 py-10 inline-flex flex-col items-center cursor-pointer hover:shadow-xl transition-all"
      onClick={handleCardClick(data)}
    >
      <div className="absolute top-2 right-2 gap-2 flex">
        <button
          className="p-2 text-white hover:text-zinc-900 bg-green-500"
          onClick={handleUserEdit(data)}
        >
          <FaRegEdit />
        </button>

        <button
          className="p-2 text-white hover:text-zinc-900 bg-red-500"
          onClick={handleOpenModal(data._id)}
        >
          <FaTrashAlt />
        </button>
      </div>

      <div className={`rounded-full shadow-lg mb-2 h-[50px] w-[50px] bg-slate-500 flex items-center justify-center text-white font-bold`}>
        {getInitials(first_name, last_name)}
      </div>

      <p className="font-bold leading-5 capitalize mb-2">
        {first_name} {last_name}
      </p>

      <p className="text-neutral-600 text-sm font-light leading-[1]">
        {position}
      </p>
    </div>
  );
}

export default UserCard;
