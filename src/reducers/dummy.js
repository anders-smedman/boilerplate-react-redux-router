import { DUMMY } from '../constants'

const initialState = {
  started: false
}

export default function dummy(state = initialState, action) {
  switch (action.type) {

    case DUMMY.DUMMY_SUCCESS:
      return {
        ...state,
        started: true,
      }

    default:
      return state

  }
}