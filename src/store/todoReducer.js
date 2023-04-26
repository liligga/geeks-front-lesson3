const initialState = {todos: []}

export const todoReducer = (state = initialState, action) => {
    if (action.type === 'ADD_TODO') {
        return {...state, todos: [...state.todos, action.payload]}
    }
    return state
}

export const addTodo = payload => ({type: 'ADD_TODO', payload})