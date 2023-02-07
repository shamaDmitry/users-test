import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import { API_URL } from '../helpers/constants'
import Spinner from '../Components/Spinner';
import UserCard from '../Components/Users/UserCard';
import FilterSelect from '../Components/FilterSelect';
import { Link } from 'react-router-dom';
import UsersList from '../Components/Users/UsersList';

const Users = () => {
  const [query, setQuery] = useState(encodeURIComponent(`*[_type == "user"]`));
  // const { data, error, isLoading } = useSWR(`${API_URL}?query=${query}`, fetcher);
  // const [filteredData, setFilteredData] = useState([]);

  // useEffect(() => {
  //   setFilteredData(data?.result || [])
  // }, [data])

  const filterUser = (users) => (event) => {
    setFilteredData(prevState => {
      return users.filter(user => {
        if (event.target.value === 'All') return user
        return user.position === event.target.value
      })
    })
  }

  const prepareFilterQuery = (data) => (event) => {
    console.log(data);
    console.log(event);
    const { objectTofilter, fieldToFilter } = data;

    const isResetFilters = event.target.value === 'All';
    let query = `*[_type == "${objectTofilter}"]`;
    if (!isResetFilters) {
      query = `*[_type == "${objectTofilter}" && ${fieldToFilter} match '${event.target.value}']`;
    }
    setQuery(encodeURIComponent(query));
  };

  // if (error) return <h1>{error.message}</h1>

  return (
    <div className="container mx-auto">
      {/* {isLoading ? <Spinner className="animate-spin w-7 mx-auto text-blue-900" /> : null} */}

      <Link
        to={'/users/create'}
        className="mr-auto border py-2 leading-none px-4 uppercase font-medium text-sm hover:bg-black hover:text-white transition-colors"
      >
        create
      </Link>

      <div className="flex justify-end gap-4 my-6">
        <FilterSelect
          label="Position"
          entryData={{ objectTofilter: 'user', fieldToFilter: 'position' }}
          onFilter={prepareFilterQuery({ objectTofilter: 'user', fieldToFilter: 'position' })}
        />
      </div>

      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4 pb-[50px]">
        <UsersList query={query} />

        {/* {filteredData.map((user, index) => {
          return (
            <UserCard
              key={user._id}
              data={user}
            />
          )
        })} */}
      </div>
    </div>
  );
}

export default Users;
