import React, { memo, useRef } from 'react';
import useSWR from "swr";
import {fetcher} from "../helpers/fetcher.js";
import Spinner from "./Spinner.jsx";

const PositionsFilter = memo(({ onFilter }) => {
  const positionsQuery = encodeURIComponent(`*[_type == "user"].position`)
  const {data: positions, error, isLoading} = useSWR(`?query=${positionsQuery}`, fetcher);
  const ref = useRef()

  if (isLoading) {
    return <Spinner className="animate-spin w-7 mx-auto text-blue-900"/>
  }
  if (error) return <h1>{error.message}</h1>

  let positionsList = [
    'All',
    ...positions.result
  ];

  return (
    <select
      className="block border bg-transparent text-right focus:outline-none py-1 px-1 w-[250px]"
      onChange={onFilter()}
      ref={ref}
    >
      {positionsList.map((position, index) => {
        return <option key={index} value={position}>{position}</option>
      })}
    </select>
  );
});

export default PositionsFilter;
