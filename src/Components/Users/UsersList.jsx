import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../../helpers/fetcher';
import Spinner from '../Spinner';
import UserCard from './UserCard';

const UsersList = ({ query }) => {
  const { data: users, error, isLoading } = useSWR(`/query/production?query=${query}`, fetcher);

  if (isLoading) {
    return <Spinner className="w-7 mx-auto text-blue-900" />
  }

  if (error) return <h1>{error.message}</h1>

  if(!users.result.length) return <p className="font-semibold">nothing is here</p>
  
  return (
    <>
      {users.result.map((user) => {
        return (
          <UserCard
            key={user._id}
            data={user}
          />
        )
      })}
    </>
  );
}

export default UsersList;