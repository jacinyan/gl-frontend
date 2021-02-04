import {BOOKINGS_LIST_REQUEST,BOOKINGS_LIST_REQUEST_SUCCESS, BOOKINGS_LIST_REQUEST_FAIL, BOOKING_DELETE} from '../constants/bookingConstants'

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
				bookings: action.payload
			}
		case BOOKINGS_LIST_REQUEST_FAIL:
			return {
				...state,
				isLoading: false, 
				error: action.payload
			}
		case BOOKING_DELETE:
			console.log('BOOKING Delete');
			const updatedBookings = state.bookings.filter((booking) => {
				return booking.id !== action.payload
			})
			console.log(updatedBookings);
			return {
				...state,
				bookings: updatedBookings
			}
		default: 
			return state
	}
}
