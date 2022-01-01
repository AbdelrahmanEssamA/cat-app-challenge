import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import viewIcon from '../icons/view.png';
import notSelected from '../icons/notSelected.jpg';
import Modal from './Modal';
import EditCat from './EditCat';
import DeletePop from './DeletePop';

const CatCard = () => {
  const catData = useSelector((state) => state.cat).selectedCat;

  const [open, setopen] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const closeModal = () => {
    setopen(false);
  };

  const closeError = () => {
    setErrorState(false);
  };

  return (
    <div className="col-span-2 pageCard mt-5 xl:mt-0 ">
      {open && (
        <Modal>
          <EditCat closeModal={closeModal} cat={catData} />
        </Modal>
      )}
      {errorState && (
        <Modal>
          <DeletePop closeModal={closeError} id={catData.id} />
        </Modal>
      )}
      {catData?.id ? (
        <>
          <h1 className="font-sora text-primary  leading-tight lg:text-6xl text-lg font-extrabold ml-5 ">
            <span className="bg-curvedIcon  bg-no-repeat bg-bottom bg-contain">{catData.name}</span>
          </h1>
          <div className="flex flex-row  flex-wrap mt-10 ">
            <img
              src={catData.thumbnailURL}
              alt="cat"
              className="border-8 border-gray-50 rounded-xl shadow-card w-3/6 mr-5"
            />
            <div className="flex flex-col gap-4  divide-x-2 divide-green ">
              <p className="headingMini">Information</p>
              <p className="infoItem">{` ID : ${catData.id}`}</p>
              <p className="infoItem">{` Owner Name : ${catData.ownerName}`}</p>
              <p className="infoItem">{` Birth Date : ${catData.birthDate}`}</p>
              <div className="flex flex-row items-center gap-3 pl-2">
                <img src={viewIcon} alt="viewIcon" />
                <p className="infoItem">{catData.viewsCount}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between px-2 mt-5">
            <button
              className="button bg-iblue text-white"
              onClick={() => {
                setopen(true);
                console.log(open);
              }}
              type="button"
            >
              Edit Cat
            </button>
            <button
              className="button bg-ired text-white"
              onClick={() => setErrorState(!open)}
              type="button"
            >
              Delete Cat
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col  items-center gap-10">
          <h1 className="font-sora text-primary  leading-tight lg:text-4xl text-xl  font-extrabold  ">
            You did not select a cat
          </h1>
          <img src={notSelected} alt="no cat was selected yet" className="mx-auto w-9/12" />
        </div>
      )}
    </div>
  );
};

export default CatCard;
