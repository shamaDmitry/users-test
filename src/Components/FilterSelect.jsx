import React, { memo, useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../helpers/fetcher';
import Spinner from './Spinner';
const selectClasses = `block border bg-transparent text-right focus:outline-none p-1 w-[250px] hover:border-black cursor-pointer transition-colors`;

const FilterSelect = memo(({ label = 'Filter', entryData, onFilter }) => {
  const {
    objectTofilter,
    fieldToFilter
  } = entryData;

  const menuItemsQuery = encodeURIComponent(`*[_type == "${objectTofilter}"].${fieldToFilter}`);

  // console.log(menuItemsQuery);

  const { data: positions, error, isLoading } = useSWR(`?query=${menuItemsQuery}`, fetcher);

  if (isLoading) {
    return <div className={selectClasses}>
      <Spinner className="animate-spin w-7 mx-auto text-blue-900" />
    </div>
  }

  if (error) return <h1>{error.message}</h1>

  let positionsList = [
    'All',
    ...new Set(positions.result)
  ];

  return (
    <div className="flex flex-col justify-end">
      <label className="font-medium text-sm mb-1 text-right">
        {label}
      </label>

      <select
        className={selectClasses}
        onChange={onFilter}
      >
        {positionsList.map((item, index) => {
          return <option key={index} value={item}>{item}</option>
        })}
      </select>
    </div>
  );
});

export default FilterSelect;
