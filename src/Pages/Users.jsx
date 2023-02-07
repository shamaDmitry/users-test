import React, {useState} from 'react';
import PositionsFilter from '../Components/PositionsFilter';
import UsersList from '../Components/UsersList';

const Users = () => {
  const [query, setQuery] = useState(encodeURIComponent(`*[_type == "user"]`));
  const prepareFilterQuery = () => (event) => {
    const isResetFilters = event.target.value === 'All';
    let query = '*[_type == "user"]';
    if (!isResetFilters) {
      query = `*[_type == "user" && position match '${event.target.value}']`;
    }
    setQuery(encodeURIComponent(query));
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-end my-6">
        <PositionsFilter onFilter={prepareFilterQuery}/>
      </div>

      <div className="grid grid-flow-row-dense grid-cols-4 grid-rows-4 gap-4 pb-[50px]">
        <UsersList query={query}/>
      </div>
    </div>
  );
}

export default Users;
