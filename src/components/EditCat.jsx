import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { updateCat } from '../redux/catsList/actions';
import setCat from '../redux/selectedCat/actions';

const EditCat = ({ closeModal, cat }) => {
  const dispatch = useDispatch();
  const formData = yup.object().shape({
    birthDate: yup.date().required().max(new Date(), 'Birthdat can not be in the future'),
    name: yup
      .string()
      .required()
      .trim()
      .matches(/^[^0-9]+/, 'Name can not include numbers'),
    thumbnailURL: yup.string().required(),
    ownerName: yup
      .string()
      .required()
      .trim()
      .matches(/^[^0-9]+/, 'Name can not include numbers'),
  });

  const curr = new Date(cat.birthDate);
  const date = curr.toISOString().substr(0, 10);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(formData),
    defaultValues: {
      birthDate: date,
      name: cat.name,
      thumbnailURL: cat.thumbnailURL,
      ownerName: cat.ownerName,
    },
  });

  const onSubmito = async (data) => {
    const parsedData = {
      ...data,
      viewsCount: cat.viewsCount,
      id: cat.id,
      birthDate: data.birthDate.toISOString().split('T')[0],
    };
    dispatch(setCat(parsedData));
    dispatch(updateCat(parsedData));
    closeModal();
  };
  return (
    <div>
      <div className="flex justify-end p-2">
        <button
          onClick={() => closeModal()}
          type="button"
          className="text-gray-400 bg-transparent hover:bg-ired hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  transition-all"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <h1 className="headingMini">Edit Cat</h1>
      <form className="mt-12" onSubmit={handleSubmit(onSubmito)}>
        <div className="flex flex-col mb-6  w-1/2 items-center justify-center mx-auto">
          <input
            className="inputFiled"
            id="inline-image"
            type="text"
            defaultValue={cat.thumbnailURL}
            onSubmit={handleSubmit(onSubmito)}
            {...register('thumbnailURL')}
          />
          {errors.thumbnailURL && <p className="errorMsg">{errors.thumbnailURL.message}</p>}

          <input
            className="inputFiled"
            id="inline-full-name"
            type="text"
            defaultValue={cat.name}
            {...register('name')}
          />
          {errors.name && <p className="errorMsg">{errors.name.message}</p>}

          <input
            className="inputFiled"
            id="inline-date"
            type="date"
            defaultValue={date}
            {...register('birthDate')}
          />
          {errors.birthDate && <p className="errorMsg">{errors.birthDate.message}</p>}

          <input
            className="inputFiled"
            id="inline-ownerName"
            type="text"
            defaultValue={cat.ownerName}
            {...register('ownerName')}
          />
          {errors.ownerName && <p className="errorMsg">{errors.ownerName.message}</p>}
        </div>
        <button type="submit" className="button bg-green text-white">
          submit
        </button>
      </form>
    </div>
  );
};

export default EditCat;
EditCat.propTypes = {
  cat: PropTypes.shape({
    id: PropTypes.number,
    birthDate: PropTypes.string,
    name: PropTypes.string,
    ownerName: PropTypes.string,
    thumbnailURL: PropTypes.string,
    viewsCount: PropTypes.number,
  }),
  closeModal: PropTypes.func,
};
