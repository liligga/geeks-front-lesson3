import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { INCREASE_COUNT, increaseCounter } from './store/counterReducer'
import { changeName } from './store/nameReducer'
import { useState } from 'react'
import { addTodo } from './store/todoReducer'



function App() {
  const [newTodo, setNewTodo] = useState('')
  const count = useSelector(state => state.counter.count)
  const user = useSelector(state => state.name.user)
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  const increase = () => {
    dispatch(increaseCounter())
  }

  const decrease = () => { 
    
  }

  const onChangeName = (e) => { 
    dispatch(changeName(e.target.value))
  }
  
  const onAddTodo = () => {
    if (newTodo !== '') {
    dispatch(addTodo(newTodo))}
    setNewTodo('')
  }

  return (
    <>
      <input type="text" onChange={onChangeName}/>
      <h4>My name: {user.name}</h4>
      <h4>Counter: {count}</h4>
      <input type="text" onChange={e => setNewTodo(e.target.value)} value={newTodo}/>
      <button onClick={onAddTodo}>Add Todo</button>
      <ul>
        {todos.map(t => {
          return <li>{t}</li>
        })}
      </ul>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  )
}

export default App
