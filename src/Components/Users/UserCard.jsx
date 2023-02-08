import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { _axios } from '../../helpers/fetcher';

const UserCard = ({ data }) => {
  const { first_name, last_name, position } = data;
  const navigate = useNavigate();

  const getInitials = useCallback((first, last) => {
    return `${first.slice(0, 1)}${last.slice(0, 1)}`.toUpperCase()
  }, [first_name, last_name]);

  const handleCardClick = (user) => (event) => {
    navigate(`/users/${user._id}`);
  }

  const handleUserEdit = (userData) => (event) => {
    event.stopPropagation()

    navigate(`/users/${userData._id}/edit`, {
      state: userData
    });
  }

  const handleUserDelete = (userId) => (event) => {
    event.stopPropagation()
    console.log(userId);

    _axios.post('/mutate/production', JSON.stringify(
      {
        "mutations": [
          {
            "delete": {
              "id": userId
            }
          }
        ]
      }
    )).then(res => console.log(res))
  }

  return (
    <div
      className="relative border px-4 py-10 inline-flex flex-col items-center cursor-pointer hover:shadow-xl transition-all"
      onClick={handleCardClick(data)}
    >
      <div className="absolute top-2 right-2 gap-1 flex">
        <button
          className="p-1 text-zinc-500 hover:text-zinc-900"
          onClick={handleUserEdit(data)}
        >
          <FaRegEdit />
        </button>

        <button
          className="p-1 text-zinc-500 hover:text-zinc-900"
          onClick={handleUserDelete(data._id)}
        >
          <FaTrashAlt />
        </button>
      </div>

      <div className={`rounded-full mb-2 h-[50px] w-[50px] bg-red-500 flex items-center justify-center text-white font-bold`}>
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
