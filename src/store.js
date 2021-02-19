import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from './reducers/index';

// const [state, dispatch] = useReducer(reducer);

const store = createStore(combineReducers, composeWithDevTools());

export default store;

// //store.subscribe(fn);

// store.subscribe(() => {
//   console.log('State changed');
// });

// //store.getState();

// console.log('getState', store.getState());

// //store.dispatch(action);

// store.dispatch({
//   type: 'SET_QUESTIONS',
//   payload: [{
//     text: 'Hello?',
//     answer: 'yes',
//     incorrectAnswers: [
//       'no',
//       'ok'
//     ]
//   }]
// });
// console.log(store.getState());


