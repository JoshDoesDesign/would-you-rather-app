
import initialState from './initialState';
// IMPORT THE ACTION TYPES
import {FETCH_STUFF, RECEIVE_STUFF} from '../actions/allActions';

// CASE STATEMENT ON HOW TO HANDLE EACH TYPE OF ACTION
export default function stuff(state = initialState.stuff, action) {
  let newState;
  switch (action.type) {
    case FETCH_STUFF:
      console.log('FETCH_STUFF Action')
      return action;
    case RECEIVE_STUFF:
      newState = action.stuff;
      console.log('RECEIVE_STUFF Action')
      return newState;
    default:
      return state;
  }
}