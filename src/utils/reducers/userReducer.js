import {USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from '../constants/userConstants'

export default function userReducer (state, action) {
	switch(action.type) {
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				properties: action.payload}
		case USER_LOGIN_FAIL:
			return {
				...state,
				error: action.payload}
		default: 
			return state
	}
}
