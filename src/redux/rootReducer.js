import { combineReducers } from 'redux';

import catsReducer from './catsList/reducer';
import selectedCatReducer from './selectedCat/reducer';

const RootReducers = combineReducers({
  cats: catsReducer,
  cat: selectedCatReducer,
});

export default RootReducers;
