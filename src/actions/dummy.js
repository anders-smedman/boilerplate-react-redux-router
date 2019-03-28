import { DUMMY } from '../constants'

export const dummySuccess = () => ({
    type: DUMMY.DUMMY_SUCCESS,
})
export function dummy(){
      return dispatch => {
          return dispatch(dummySuccess())
      }
}