import { combineReducers } from 'redux';
import photos from './photoReducer';
import spinner from './spinnerReducer';

export default combineReducers({
  photos, spinner
})