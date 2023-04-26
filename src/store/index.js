import { composeWithDevTools } from '@redux-devtools/extension';
import { legacy_createStore as createStore, combineReducers } from 'redux'
import { nameReducer } from './nameReducer'
import { counterReducer } from './counterReducer'


const rootReducer = combineReducers({
  name: nameReducer,
  counter: counterReducer
})


export const store = createStore(rootReducer, composeWithDevTools())

// npm install --save @redux-devtools/extension
