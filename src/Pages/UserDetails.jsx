import React, { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { API_URL } from '../helpers/API'
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';
import moment from 'moment/moment';

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  let query = encodeURIComponent(`*[_type == "user" && _id == "${id}"]`);
  const { data, error, isLoading } = useSWR(`${API_URL}?query=${query}`, fetcher)

  const backButton = (
    <button
      className="border px-4 py-1 rounded-md text-sm font-bold capitalize"
      onClick={() => navigate('/users')}
    >
      back
    </button>
  );

  if (isLoading) return <Spinner className="animate-spin w-7 mx-auto text-blue-900" />

  if (error) {
    return (
      <div className="container mx-auto">
        <p className="text-red-600 font-medium">
          {error.message}
        </p>
        {backButton}
      </div>
    )
  }

  if (data) {
    const [user] = data.result;
    const {
      first_name,
      last_name,
      position,
      _createdAt,
      _updatedAt,
      _type
    } = user;

    return (
      <div className="container mx-auto">
        {backButton}

        <h1 className="text-lg font-medium my-2">
          User details:
        </h1>
        <ul>
          <li>
            <span className="font-medium capitalize">type</span>:
            <span className="pl-2">{_type}</span>
          </li>
          <li>
            <span className="font-medium capitalize">name</span>:
            <span className="pl-2">{last_name} {first_name}</span>
          </li>
          <li>
            <span className="font-medium capitalize">position</span>:
            <span className="pl-2">{position}</span>
          </li>
          <li>
            <span className="font-medium capitalize">created</span>:
            <span className="pl-2">{moment(_createdAt).format("DD/MM/YYYY - HH:MM")}</span>
          </li>
          <li>
            <span className="font-medium capitalize">updated</span>:
            <span className="pl-2">{moment(_updatedAt).format("DD/MM/YYYY - HH:MM")}</span>
          </li>
        </ul>
      </div>
    )
  }
}

export default UserDetails;
