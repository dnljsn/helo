const initialState = {
    user: {}
}

const USER_DATA = 'USER_DATA';

export function updateUser(userData) {
    return {
        type: USER_DATA,
        payload: userData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_DATA:
        return {...state, user: action.payload}
        default:
            return state;
    }
}