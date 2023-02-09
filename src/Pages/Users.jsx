import React, { useState } from 'react';
import PositionFilterSelect from '../Components/PositionFilterSelect';
import { Link } from 'react-router-dom';
import UsersList from '../Components/Users/UsersList';
import {
  allUsersQuery,
  userByPositionQuery
} from '../helpers/queries';

const Users = () => {
  const [query, setQuery] = useState(encodeURIComponent(allUsersQuery));

  const prepareFilterQuery = () => (event) => {
    const isResetFilters = event.target.value === 'All';
    let query = allUsersQuery;

    if (!isResetFilters) {
      query = userByPositionQuery(event.target.value);
    }

    setQuery(encodeURIComponent(query));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-end gap-4 my-6">
        <Link
          to={'/users/create'}
          className="mr-auto self-end border py-2 leading-none px-4 uppercase font-medium text-sm hover:bg-black hover:text-white transition-colors"
        >
          create
        </Link>

        <PositionFilterSelect
          label="Position"
          onFilter={prepareFilterQuery()}
        />
      </div>

      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-4 pb-[50px]">
        <UsersList query={query} />
      </div>
    </div>
  );
}

export default Users;
