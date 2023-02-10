import React, { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

import { _axios } from '../../helpers/fetcher';
import { fetcher } from '../../helpers/fetcher';

import Modal from '../Modal';
import Spinner from '../Spinner';
import UserCard from './UserCard';

const UsersList = ({ query }) => {
  const { mutate } = useSWRConfig()
  const [open, setOpen] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleOpenModal = (userId) => (event) => {
    event.stopPropagation();

    setOpen(true);
    setUserIdToDelete(userId);
  }

  const handleUserDelete = async (event) => {
    setIsProcessing(true);

    const res = await _axios.post('/mutate/production', JSON.stringify(
      {
        "mutations": [
          {
            "delete": {
              "id": userIdToDelete
            }
          }
        ]
      }
    ));

    if (res.status === 200) {
      setOpen(false);
      setUserIdToDelete(null);
      mutate(`/query/production?query=${query}`);
    }
  }

  const { data: users, error, isLoading } = useSWR(`/query/production?query=${query}`, fetcher);

  if (isLoading) {
    return <Spinner className="w-7 mx-auto text-blue-900" />
  }

  if (error) return <h1>{error.message}</h1>

  if (!users.result.length) return <p className="font-semibold">nothing is here</p>

  return (
    <>
      {users.result.map((user) => {
        return (
          <UserCard
            key={user._id}
            data={user}
            handleOpenModal={handleOpenModal}
          />
        )
      })}

      <Modal
        open={open}
        setOpen={setOpen}
        isProcessing={isProcessing}
        handleUserDelete={handleUserDelete}
      />
    </>
  );
}

export default UsersList;