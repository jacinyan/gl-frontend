import {PROPERTIES_LIST_REQUEST_SUCCESS, PROPERTIES_LIST_REQUEST_FAIL} from '../constants/userConstants'

export default function userReducer (state, action) {
	switch(action.type) {
		case PROPERTIES_LIST_REQUEST_SUCCESS:
			return {
				...state,
				properties: action.payload}
		case PROPERTIES_LIST_REQUEST_FAIL:
			return {
				...state,
				error: action.payload}
		default: 
			return state
	}
}
