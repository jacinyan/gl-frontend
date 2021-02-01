import {BOOKINGS_LIST_REQUEST,BOOKINGS_LIST_REQUEST_SUCCESS, BOOKINGS_LIST_REQUEST_FAIL} from '../constants/bookingConstants'

export default function bookingReducer (state, action) {
	switch(action.type) {
		case BOOKINGS_LIST_REQUEST:
			return {
				...state,
				isLoading: true, 
				error: ''
			}
		case BOOKINGS_LIST_REQUEST_SUCCESS:
			return {
				...state,
				isLoading: false, 
				properties: action.payload
			}
		case BOOKINGS_LIST_REQUEST_FAIL:
			return {
				...state,
				isLoading: false, 
				error: action.payload
			}
		default: 
			return state
	}
}
