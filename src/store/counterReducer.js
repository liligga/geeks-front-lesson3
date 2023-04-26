const initialState = {
    count: 1
}

export const INCREASE_COUNT = 'INCREASE_COUNT'

export const counterReducer = (state=initialState, action) => {
    if (action.type === INCREASE_COUNT) {
      // state = {count: 2}
      // return state
      // return {count: state.count+1}
      return {...state, count: state.count+1}
    } else {
      return state
    }
}
export const increaseCounter = () => ({type: INCREASE_COUNT})
