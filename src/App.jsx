import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'


function App() {
  const count = useSelector(state => state.count)
  const name = useSelector(state => state.name)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch({type: 'INCREASE'})
  }

  const decrease = () => { 
  }

  const changeName = (e) => { 
    dispatch({type: 'CHANGE_NAME', payload: e.target.value})
  }

  return (
    <>
      <input type="text" onChange={changeName}/>
      <h4>My name: {name}</h4>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  )
}

export default App
