import { combineReducers } from 'redux';
import userReducer from '../Reducers/userReducer';
import calendarReducer from '../Reducers/calendarReducer';
export default combineReducers({
 userReducer,
 calendarReducer
});