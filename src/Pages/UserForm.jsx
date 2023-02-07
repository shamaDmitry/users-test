import React, { useEffect, useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { getUserPositionDropdownList } from '../services/userService';
import { FaArrowLeft } from 'react-icons/fa';

const UserForm = () => {
  const navigate = useNavigate();
  const { mode, data: initData } = useLoaderData();
  const [positionDropdownItems, setPositionDropdownItems] = useState([])
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    position: '',
  });

  useEffect(() => {
    getUserPositionDropdownList().then(res => setPositionDropdownItems(res.result));
  }, [])

  let inputClass = `w-full shadow transition-all border px-2 py-1 outline-none hover:border-zinc-600`

  const handleUserSave = (data) => (event) => {
    console.log(event);
  }

  const handleChange = (data) => (event) => {
    setUserData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <section className="mb-10">
      <div className="container mx-auto px-4">
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
            value={userData.first_name}
            type="text"
            placeholder="First Name"
            name="first_name"
            className={inputClass}
            // onChange={e => setUserData(prevState => ({ ...prevState, first_name: e.target.value }))}
            onChange={handleChange()}
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium text-sm">
            Last Name:
          </label>
          <input
            value={userData.last_name}
            type="text"
            placeholder="Last Name"
            className={inputClass}
            name="last_name"
            onChange={handleChange()}
          />
        </div>

        <div className="mb-3">
          <label className="block mb-1 font-medium text-sm">
            Position:
          </label>
          <select
            className={inputClass}
            name="position"
            onChange={handleChange()}
            defaultValue={'default'}
          >
            <option value='default' disabled>select</option>
            {positionDropdownItems.map((option, index) => <option key={index} value={option}>{option}</option>)}
          </select>
        </div>

        <button
          className="mr-auto
            border
            py-1
            px-4
            capitalize
            font-medium
            text-lg
            transition-colors
            hover:bg-black
            hover:text-white
            disabled:opacity-50
            disabled:hover:text-black
            disabled:hover:bg-white
            disabled:hover:cursor-not-allowed"
          onClick={handleUserSave()}
          disabled={!Object.values(userData).every(value => value)}
        >
          save
        </button>
      </div>
    </section>
  );
}

export default UserForm;
