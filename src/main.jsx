import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, combineReducers } from 'redux'


const initialState = {
  count: 111,
  name: 'Adil'
}
// action = {type: '', payload: 0}
const counterReducer = (state={count: 1}, action) => {
  if (action.type === 'INCREASE_COUNT') {
    // state = {count: 2}
    // return state
    // return {count: state.count+1}
    return {...state, count: state.count+1}
  } else {
    return state
  }
}

const nameReducer = (state={name: 'Adil'}, action) => {
  if (action.type === 'CHANGE_NAME') {
    return {...state, name: action.payload}
  }
  return state
}


// git clone https://github.com/liligga/geeks-front-lesson3
const rootReducer = combineReducers({
  name: nameReducer,
  counter: counterReducer
})


const store = createStore(rootReducer)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
)
