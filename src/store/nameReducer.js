
const initialState = {
    user: {
        name: 'Adil'
    }
}

export const CHANGE_NAME = 'CHANGE_NAME'

export const nameReducer = (state=initialState, action) => {
    if (action.type === CHANGE_NAME) {
      return {...state, user: {...state.user, name: action.payload}}
    }
    return state
}
  
export const changeName = payload => ({type: CHANGE_NAME, payload})