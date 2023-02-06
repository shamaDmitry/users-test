import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const UserEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state)
  let inputClass = `w-full shadow transition-all border px-2 py-1 outline-none hover:border-zinc-600`

  return (
    <section className="mb-10">
      <div className="container mx-auto">
        <h1 className="font-medium text-2xl mb-4 flex gap-2">
          <button className="hover:opacity-50" onClick={e => navigate('/users', {replace: true})}>
            <FaArrowLeft />
          </button>
          Edit user:
        </h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-sm">
            First Name:
          </label>
          <input
            type="text"
            placeholder="First Name"
            className={inputClass}
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium text-sm">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="Last Name"
            className={inputClass}
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium text-sm">
            Position:
          </label>
          <select
            className={inputClass}
          >
            <option value="1">CTO</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium text-sm">
            Type:
          </label>
          <select
            className={inputClass}
          >
            <option value="1">User</option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default UserEdit;
