import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import setCat from '../redux/selectedCat/actions';
import viewIcon from '../icons/view.png';
import { updateCat } from '../redux/catsList/actions';

const ListItem = ({ cat }) => {
  const dispatch = useDispatch();

  // view counter and update the list
  const handleSelectedCat = () => {
    dispatch(setCat(cat));
    dispatch(updateCat(cat));
  };

  return (
    <div className="px-2 py-4 cursor-pointer" onClick={handleSelectedCat}>
      <div className="listItem flex flex-row justify-between items-center">
        <div>
          <div className="flex flex-row items-center">
            <img className="itemImage" src={cat.thumbnailURL} alt="cat" />
            <p className="ml-2 font-inter font-medium text-sm leading-5">{cat.name}</p>
          </div>
          <p className="font-inter font-normal text-xs leading-4 mt-4 ml-1 bg-grey2 w-fit rounded-full px-3 py-1 shadow">
            {cat.birthDate}
          </p>
        </div>
        <div>
          <p className="notification">{cat.viewsCount}</p>

          <img src={viewIcon} alt="view icon" className="w-5" />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
ListItem.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.number,
    birthDate: PropTypes.string,
    name: PropTypes.string,
    ownerName: PropTypes.string,
    thumbnailURL: PropTypes.string,
    viewsCount: PropTypes.number,
  }),
};
