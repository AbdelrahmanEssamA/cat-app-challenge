import SET_CAT from './actionsType';

const INIT_STATE = {
  selectedCat: JSON.parse(localStorage.getItem('selectedCat')) || '',
};

const selectedCatReducer = (state = INIT_STATE, action) => {
  const { payload, type } = action;
  switch (type) {
    case SET_CAT: {
      // check if user clicking on the same opend cat
      if (payload) {
        if (state.selectedCat.id !== payload.id) {
          payload.viewsCount += 1;
        }
      }
      localStorage.setItem('selectedCat', JSON.stringify(payload));
      return {
        ...state,
        selectedCat: payload,
      };
    }
    default:
      return state;
  }
};

export default selectedCatReducer;
