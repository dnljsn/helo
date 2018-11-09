const initialState = {
    username: '',
    profilePic: ''
}

const UPDATE_USER = 'UPDATE_USER';

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    let { type, payload } = action;
    switch (type) {
        case UPDATE_USER:
            return { ...state, username: payload.username, profilePic: payload.profile_pic }
        default:
            return state;
    }
}