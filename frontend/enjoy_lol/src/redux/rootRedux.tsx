import { combineReducers } from 'redux';
import HomeReducer from './HomeRedux';

const rootReducer = combineReducers({
  Home: HomeReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;