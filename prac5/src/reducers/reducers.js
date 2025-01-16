import { CHECKBOX_CLICK } from "../actions/actionTypes"

const initialState = {}

export const checkboxReducer = (
    state = initialState,
    action
  ) => {
    if (action.type === CHECKBOX_CLICK && action.payload) {
      return { ...state, [action.payload]: !state[action.payload] }
    }
    return state
  }
