import React, { useEffect, useState } from 'react';

const FilterSelect = ({ entryData, onFilter }) => {
  const [menuItems, setMenuItems] = useState([]);
  
  useEffect(() => {
    if (entryData) {
      setMenuItems([
        'All',
        ...new Set(entryData.map((val) => val.position))
      ]);
    }
  }, [entryData]);

  return (
    <select
      className="block border bg-transparent text-right focus:outline-none py-1 px-1 w-[250px]"
      onChange={onFilter(entryData)}
    >
      {menuItems.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
      })}
    </select>
  );
}

export default FilterSelect;
