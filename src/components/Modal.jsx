import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => {
  const content = (
    <div className="fixed z-10 inset-0 overflow-y-auto w-screen" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4  text-center sm:block sm:p-0 w-full">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 w-full" />
        <div className="inline-block align-bottom bg-white rounded-3xl text-center overflow-hidden shadow-xl transform  lg:mt-28 sm:my-8 sm:align-middle w-7/12 p-4 pt-7">
          {children}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(content, document.querySelector('#modal-hook'));
};

export default Modal;
