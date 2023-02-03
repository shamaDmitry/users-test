import React from 'react';
import BasicLayout from '../Layouts/BasicLayout';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { API_URL } from '../helpers/API'
import Loader from '../Components/Loader';
import UserCard from '../Components/UserCard';
import FilterSelect from '../Components/FilterSelect';

const Users = () => {
  let query = encodeURIComponent('*[_type == "user"]');
  const { data, error, isLoading } = useSWR(`${API_URL}?query=${query}`, fetcher)

  return (
    <BasicLayout>
      {isLoading ? <Loader className="animate-spin w-10 mx-auto text-blue-900" /> : null}

      <div className="flex justify-end my-6">
        <FilterSelect />
      </div>

      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 pb-[50px]">
        {data?.result.map(user => {
          return (
            <UserCard
              key={user._id}
              data={user}
            />
          )
        })}
      </div>

    </BasicLayout>
  );
}

export default Users;
