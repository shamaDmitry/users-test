import React, {useEffect, useState} from 'react';
import useSWR from 'swr';
import {fetcher} from '../helpers/fetcher';
import Spinner from '../Components/Spinner';
import UserCard from '../Components/UserCard';

const UsersList = ({query}) => {
  const {data: users, error, isLoading} = useSWR(`?query=${query}`, fetcher);

  if (isLoading) {
    return <Spinner className="animate-spin w-7 mx-auto text-blue-900"/>
  }

  if (error) return <h1>{error.message}</h1>

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
