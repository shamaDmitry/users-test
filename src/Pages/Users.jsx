import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { API_URL } from '../helpers/API'
import Spinner from '../Components/Spinner';
import UserCard from '../Components/UserCard';
import FilterSelect from '../Components/FilterSelect';
import { Link } from 'react-router-dom';

const Users = () => {
  let query = encodeURIComponent('*[_type == "user"]');
  const { data, error, isLoading } = useSWR(`${API_URL}?query=${query}`, fetcher);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data?.result || [])
  }, [data])

  const filterUser = (users) => (event) => {
    setFilteredData(prevState => {
      return users.filter(user => {
        if (event.target.value === 'All') return user
        return user.position === event.target.value
      })
    })
  }

  if (error) return <h1>{error.message}</h1>

  return (
    <div className="container mx-auto">
      {isLoading ? <Spinner className="animate-spin w-7 mx-auto text-blue-900" /> : null}

      <div className="flex justify-end my-6">
        <Link to={'/users/create'} className="mr-auto border py-1 px-4 capitalize font-medium text-lg hover:bg-black hover:text-white transition-colors">
          create
        </Link>

        <FilterSelect
          entryData={data?.result}
          onFilter={filterUser}
        />
      </div>

      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4 pb-[50px]">
        {filteredData.map((user, index) => {
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
