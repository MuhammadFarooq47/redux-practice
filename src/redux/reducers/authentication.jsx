import ActionTypes from "../actionTypes/actionTypes";


const initial_state = {
user: {},
isAuthenticated: false,
logoutMsg: "",
}

const authReducer = (state = initial_state, action) => {
    console.log("🚀 ~ authReducer ~ action:", action)
switch (action.type) {
    case ActionTypes.SIGNUP:
        return{
           ...state,
           user: action.payload.data,
           isAuthenticated: true
        }
        case ActionTypes.LOGIN: 
        return{
            user: action?.payload?.user,
            isAuthenticated: true
        }
        case ActionTypes.LOGOUT: 
        return{
            isAuthenticated: false,
            logoutMsg: action.payload
        }
        default:
        return state
}
}

export default authReducer;