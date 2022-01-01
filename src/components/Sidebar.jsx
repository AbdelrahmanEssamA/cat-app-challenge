import React, { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import CatsList from './CatsList';
import { saveData } from '../redux/catsList/actions';

const Sidebar = () => {
  // search bar handeling
  const [filter, setFilter] = useState('');

  const handleSearch = (e) => {
    setFilter(e.target.value.toLowerCase().trim());
  };

  // check for old list if not use mockup file

  const localCats = localStorage.getItem('catsData');
  const catsList = useSelector((state) => state.cats).catsData;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!localCats) dispatch(saveData(catsList));
  }, []);

  return (
    <div className="pageCard my-1 ">
      <div className="flex items-center justify-center w-full">
        <div className="flex border-2 rounded-lg bg-grey2 shadow-sm w-full">
          <input
            type="text"
            className="searchBar px-4 py-3 w-11/12 "
            placeholder="Search..."
            onChange={handleSearch}
          />
          <button className="flex items-center justify-center px-4 border-0" type="button">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </button>
        </div>
      </div>
      <CatsList catsData={catsList} filter={filter} />
    </div>
  );
};

export default Sidebar;
