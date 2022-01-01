import SET_CAT from './actionsType';

const setCat = (data) => async (dispatch) => {
  dispatch({
    type: SET_CAT,
    payload: data,
  });
};

export default setCat;
