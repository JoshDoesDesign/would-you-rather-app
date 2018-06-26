import { getInitialData } from '../utils/api'

// function uses redux-thunk to make an async request
// promise is returned w/an obj that has a users and questions property

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({ user, questions }) => {

            })
    }
}