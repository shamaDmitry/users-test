import React from 'react';

const FilterSelect = ({ onFilter }) => {
  return (
    <select
      className="block border bg-transparent text-right focus:outline-none py-1 px-1 w-[250px]"
      onChange={onFilter}
    >
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  );
}

export default FilterSelect;
