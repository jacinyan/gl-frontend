import {PROPERTIES_REQUEST, PROPERTIES_REQUEST_SUCCESS, PROPERTIES_REQUEST_FAIL} from './constants/propertyConstants'

export default function propertyReducer (state = {properties: []}, action) {
	switch(action.type) {
		case PROPERTIES_REQUEST:
			return {loading: true, properties:[]}
		case PROPERTIES_REQUEST_SUCCESS:
			return {loading: false, properties: action.payload}
		case PROPERTIES_REQUEST_FAIL:
			return {loading: false, error: action.payload}
			// 
		// case 'addproperty': {
		// 	return {
		// 		...state,
		// 		properties: [action.payload, ...state.properties]
		// 	}
		// }
		// case 'deleteproperty': {
		// 	const updatedproperties = state.properties.filter((property) => {
		// 		return property.id !== parseInt(action.payload)
		// 	})
		// 	return {
		// 		...state,
		// 		properties: updatedproperties
		// 	}
		// }
		// case 'updateproperty': {
		// 	const property = state.properties.find((property) => property.id == action.payload.id)
		// 	const theRest = state.properties.filter((property) => property.id != action.payload.id)
		// 	const updatedproperty = Object.assign(property, action.payload)
		// 	return {
		// 		...state,
		// 		properties: [updatedproperty, ...theRest]
		// 	}

		// }
		// case 'setLoggedInUser': {
		// 	return {
		// 		...state,
		// 		loggedInUser: action.payload
		// 	}
		// }
		// case 'setToken': {
		// 	return {
		// 		...state,
		// 		auth: {
		// 			...state.auth,
		// 			token: action.payload
		// 		}
		// 	}
		// }
		default: return state
	}
}
