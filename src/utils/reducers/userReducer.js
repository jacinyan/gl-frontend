import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/userConstants'

export default function userReducer(state, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			console.log("USER_LOGIN_SUCCESS");
			localStorage.setItem("user", action.payload.user);
			localStorage.setItem("jwt", action.payload.jwt);
			
			return {
				...state,
				isLoggedIn: true,
				user: action.payload.user,
				jwt: action.payload.jwt
			}
		case USER_LOGIN_FAIL:
			return {
				...state,
				isLoggedIn: false,
				errors: action.payload.message
			}
		case USER_LOGOUT:
			localStorage.clear();
			return {
				...state,
				isLoggedIn: false,
				user: null,
				jwt: null
			  }
		default:
			return state
	}
}
