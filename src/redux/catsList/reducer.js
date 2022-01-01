import { SAVE_DATA, UPDATE_CATS, DELETE_CAT } from './actionsTypes';
import data from '../../data/data';

const INIT_STATE = {
  catsData: JSON.parse(localStorage.getItem('catsData')) || data,
};

const catsReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SAVE_DATA: {
      localStorage.setItem('catsData', JSON.stringify(action.payload));
      return {
        ...state,
        catsData: action.payload,
      };
    }
    case UPDATE_CATS: {
      // find the updated cat then update the whole list
      const index = state.catsData.findIndex((cat) => cat.id === action.payload.id);
      const newList = state.catsData;
      newList[index] = action.payload;
      localStorage.setItem('catsData', JSON.stringify(newList));
      return { ...state, catsData: newList };
    }
    case DELETE_CAT: {
      const newList = state.catsData.filter((cat) => cat.id !== action.payload);
      localStorage.setItem('catsData', JSON.stringify(newList));
      return { ...state, catsData: newList };
    }
    default:
      return state;
  }
};

export default catsReducer;
