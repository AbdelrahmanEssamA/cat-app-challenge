import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deletCat } from '../redux/catsList/actions';
import setCat from '../redux/selectedCat/actions';

const DeletePop = ({ id, closeModal }) => {
  const dispatch = useDispatch();
  const confirmDelete = () => {
    dispatch(deletCat(id));
    localStorage.removeItem('selectedCat');
    dispatch(setCat(''));
    closeModal();
  };
  return (
    <div className="items-center pb-4">
      <h1 className="text-4xl mb-5 p-5 font-inter font-medium">Warning!</h1>
      <p className="text-primary font-inter">Are you sure you want to delete this cat ?</p>
      <div className="flex flex-row justify-around mt-14 pt-9">
        <button className="button bg-ired text-white" type="button" onClick={confirmDelete}>
          Delete
        </button>
        <button
          className="button bg-grey2 text-black"
          type="button"
          onClick={() => {
            closeModal();
          }}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default DeletePop;
DeletePop.propTypes = {
  id: PropTypes.number,
  closeModal: PropTypes.func,
};
