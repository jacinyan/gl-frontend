import React, { useEffect, useReducer, useContext } from 'react'
import BookingsTable from '../../common/Table'

import bookingReducer from '../../utils/reducers/bookingReducer'
import { getBookings } from '../../services/bookingServices'
import { UserContext } from '../../utils/context/userContext'

const initialState = {
    isLoading: false,
    error: '',
    bookings: []
}

const Bookings = (props) => {

    const { state: loggedInState } = useContext(UserContext)

    console.log(loggedInState.username);

    const [state, dispatch] = useReducer(bookingReducer, initialState)

    useEffect(() => {
        console.log('Bookings useEffect');
        dispatch({
            type: "BOOKINGS_LIST_REQUEST"
        });
        console.log(getBookings(loggedInState.username));
        getBookings(loggedInState.username)
            .then((data) => {
                dispatch({ type: 'BOOKINGS_LIST_REQUEST_SUCCESS', payload: data })
            })
            .catch((error) => {
                console.log(error)
                dispatch({ type: 'BOOKINGS_LIST_REQUEST_FAIL', payload: error })
            })
    }, [loggedInState.jwt, loggedInState.username])

    return (
        <>
            <h4>Bookings</h4>
            {
                state.isLoading ? <h2>Loading...</h2>
                :
                state.error !== '' ? <h4>Oops😅, something went wrong</h4>
                :
                props.location.state === undefined ?
                    <BookingsTable bookings={state.bookings} />
                :
                null
            }

        </>
    )
}

export default Bookings
