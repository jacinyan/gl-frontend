import {PROPERTIES_LIST_REQUEST_SUCCESS, PROPERTIES_LIST_REQUEST_FAIL} from '../constants/userConstants'

export default function propertyReducer (state, action) {
	switch(action.type) {
		case PROPERTIES_LIST_REQUEST_SUCCESS:
			return {
				...state,
				loading: false, 
				properties: action.payload}
		case PROPERTIES_LIST_REQUEST_FAIL:
			return {
				...state,
				loading: false, 
				error: action.payload}
		default: 
			return state
	}
}
