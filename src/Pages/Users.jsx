import React from 'react';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { API_URL } from '../helpers/API'
import Spinner from '../Components/Spinner';
import UserCard from '../Components/UserCard';
import FilterSelect from '../Components/FilterSelect';

const Users = () => {
  let query = encodeURIComponent('*[_type == "user"]');
  const { data, error, isLoading } = useSWR(`${API_URL}?query=${query}`, fetcher)
  const filterUser = (data) => (event) => {
    console.log('filter', data)
    console.log('event', event)
  }

  return (
    <div className="container mx-auto">
      {isLoading ? <Spinner className="animate-spin w-7 mx-auto text-blue-900" /> : null}

      <div className="flex justify-end my-6">
        <FilterSelect
          onFilter={filterUser(data?.result)}
        />
      </div>

      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4 pb-[50px]">
        {data?.result.map((user, index) => {
          return (
            <UserCard
              key={user._id}
              data={user}
            />
          )
        })}
      </div>
    </div>
  );
}

export default Users;
