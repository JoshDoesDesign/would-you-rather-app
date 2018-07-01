// import { combineReducers } from 'redux'
// import { TEST_ACTION_TYPE } from '../actions/authedUser'

// function defaultReducer(state = null, action) {
//     switch(action.type) {
//         case TEST_ACTION_TYPE:
//             return action.val
//         default:
//             return state
//     }
// }

// export default combineReducers({
//     defaultReducer
// })

import {combineReducers} from 'redux';
import stuff from './stuffReducer';

const rootReducer = combineReducers({
  stuff
});

export default rootReducer;