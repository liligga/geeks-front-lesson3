import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { INCREASE_COUNT, increaseCounter } from './store/counterReducer'
import { changeName } from './store/nameReducer'



function App() {
  const count = useSelector(state => state.counter.count)
  const user = useSelector(state => state.name.user)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch(increaseCounter())
  }

  const decrease = () => { 
    
  }

  const onChangeName = (e) => { 
    dispatch(changeName(e.target.value))
  }

  return (
    <>
      <input type="text" onChange={onChangeName}/>
      <h4>My name: {user.name}</h4>
      <h4>Counter: {count}</h4>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  )
}

export default App
