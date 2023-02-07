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
  const dataForFilter = { objectTofilter: 'user', fieldToFilter: 'position' };
  
  const prepareFilterQuery = (data) => (event) => {
    const { objectTofilter, fieldToFilter } = data;
    const isResetFilters = event.target.value === 'All';
    let query = `*[_type == "${objectTofilter}"]`;

    if (!isResetFilters) {
      query = `*[_type == "${objectTofilter}" && ${fieldToFilter} match '${event.target.value}']`;
    }

    setQuery(encodeURIComponent(query));
  };

  return (
    <div className="container mx-auto">
      <Link
        to={'/users/create'}
        className="mr-auto border py-2 leading-none px-4 uppercase font-medium text-sm hover:bg-black hover:text-white transition-colors"
      >
        create
      </Link>

      <div className="flex justify-end gap-4 my-6">
        <FilterSelect
          label="Position"
          dataForFilter={dataForFilter}
          onFilter={prepareFilterQuery(dataForFilter)}
        />
      </div>

      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4 pb-[50px]">
        <UsersList query={query} />
      </div>
    </div>
  );
}

export default Users;
