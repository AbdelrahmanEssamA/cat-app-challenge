import { SAVE_DATA, UPDATE_CATS, DELETE_CAT } from './actionsTypes';

export const saveData = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_DATA,
    payload: data,
  });
};
export const updateCat = (data) => async (dispatch) => {
  dispatch({
    type: UPDATE_CATS,
    payload: data,
  });
};

export const deletCat = (data) => async (dispatch) => {
  dispatch({
    type: DELETE_CAT,
    payload: data,
  });
};
