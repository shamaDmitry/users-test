import React, { memo, useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import Spinner from './Spinner';
import { usersPositionQuery } from '../helpers/queries';

const selectClasses = `block border bg-transparent text-right focus:outline-none p-1 w-full sm:ml-auto sm:w-[250px] hover:border-black cursor-pointer transition-colors`;

const PositionFilterSelect = memo(({ label = 'Filter', onFilter }) => {
  const { data: positions, error, isLoading } = useSWR(`/query/production?query=${encodeURIComponent(usersPositionQuery)}`, fetcher);

  if (isLoading) {
    return <div className={selectClasses}>
      <Spinner className="animate-spin w-7 mx-auto text-blue-900" />
    </div>
  }

  if (error) return <h1>{error.message}</h1>

  return (
    <div className="flex flex-col justify-end">
      <label className="font-medium text-sm mb-1 text-right">
        {label}
      </label>

      <select
        className={selectClasses}
        onChange={onFilter}
      >
        <option value="All">All</option>
        
        {positions.result.map(item => {
          return <option key={item._id} value={item._id}>{item.position}</option>
        })}
      </select>
    </div>
  );
});

export default PositionFilterSelect;
