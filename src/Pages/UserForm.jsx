import React, { useEffect, useState } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';
import { getUserPositionDropdownList } from '../services/userService';
import { FaArrowLeft } from 'react-icons/fa';
import Spinner from '../Components/Spinner';

import { _axios } from '../helpers/fetcher';

const UserForm = () => {
  const navigate = useNavigate();
  const { mode, data: initData } = useLoaderData();

  const [positionDropdownItems, setPositionDropdownItems] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [userData, setUserData] = useState({
    first_name: '',
    last_name: '',
    position: '',
  });

  useEffect(() => {
    mode === 'edit' ? setUserData(prevState => {
      return {
        ...prevState,
        ...initData,
        position: initData.position._ref
      }
    }) : null

    getUserPositionDropdownList().then(res => setPositionDropdownItems(res.result));
  }, [])

  let inputClass = `w-full shadow bg-white transition-all border px-2 py-1 outline-none hover:border-zinc-600`

  const handleUserSave = () => (event) => {
    setIsSaving(true);

    const {
      _id,
      first_name,
      last_name,
      position
    } = userData;

    const body = {
      "mutations": [
        {
          "createOrReplace": {
            "_id": mode === 'edit' ? _id : null,
            "_type": "user",
            first_name,
            last_name,
            'position': {
              _ref: position
            }
          }
        },
      ]
    }

    _axios.post('/mutate/production', JSON.stringify(body))
      .then(res => {
        setIsSaving(false);
        navigate('/users');
      })
  }

  const handleChange = () => (event) => {
    setUserData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <section className="mb-10">
      <div className="container max-w-xl mx-auto px-4">
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
            value={userData.position || ''}
          >
            <option value='' disabled>select</option>
            {positionDropdownItems.map(option => {
              return <option key={option._id} value={option._id}>
                {option.position}
              </option>
            })}
          </select>
        </div>

        <button
          className="my-4
            min-h-[38px]
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
          disabled={!Object.values(userData).every(value => value) || isSaving}
        >
          {isSaving ? <Spinner className="w-4 mx-auto" /> : mode === 'edit' ? 'Update' : 'Save'}
        </button>
      </div>
    </section>
  );
}

export default UserForm;
