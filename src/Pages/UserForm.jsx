import React, { useEffect, useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const UserForm = () => {
  const navigate = useNavigate();
  const { mode, data: initData } = useLoaderData();
  const [userData, setUserData] = useState(...initData)
  console.log(userData);
  let inputClass = `w-full shadow transition-all border px-2 py-1 outline-none hover:border-zinc-600`

  return (
    <section className="mb-10">
      <pre>
        {JSON.stringify(userData)}
      </pre>

      <div className="container mx-auto">
        <h1 className="font-medium text-2xl mb-4 flex gap-2">
          <button className="hover:opacity-50" onClick={e => navigate('/users', { replace: true })}>
            <FaArrowLeft />
          </button>

          <span className="capitalize">
            {mode === 'edit' ? 'Edit' : 'Create'}
          </span> user:
        </h1>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-sm">
            First Name:
          </label>
          <input
            value={mode === 'edit' ? userData.first_name : ''}
            type="text"
            placeholder="First Name"
            className={inputClass}
            onChange={e => setUserData(prevState => ({ ...prevState, first_name: e.target.value }))}
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

        <button className="mr-auto border py-1 px-4 capitalize font-medium text-lg hover:bg-black hover:text-white transition-colors">
          save
        </button>
      </div>
    </section>
  );
}

export default UserForm;
