import React, { useEffect, useReducer, useContext } from 'react'
// import { Route } from "react-router-dom";
// import Detail from "../_shared/detail";
// import List from '../_shared/list'

import bookingReducer from '../../utils/reducers/bookingReducer'
import {getBookings} from '../../services/bookingServices'
import {UserContext} from '../../utils/context/userContext'

const initialState = {
    isLoading: false,
    error: '',
    bookings: []
}

const Bookings = (props) => {

    const {state: loggedInState} = useContext(UserContext)

    console.log(loggedInState)

    const [state, dispatch] = useReducer(bookingReducer, initialState)

    useEffect(() => {
        dispatch({
            type: "BOOKINGS_LIST_REQUEST"
          });
        getBookings(loggedInState.username)
        .then((data) => {
            dispatch({ type: 'BOOKINGS_LIST_REQUEST_SUCCESS', payload: data })
        })
        .catch((error)=>{
            dispatch({ type: 'BOOKINGS_LIST_REQUEST_FAIL', payload: error })
        })
    }, [loggedInState.jwt,loggedInState.username])

    return (    
        <>
            <h4>Bookings</h4>
            {
                state.isLoading ? <h2>Loading...</h2> 
                :
                state.error !== '' ? <h4>Oops😅, something went wrong</h4>
                :
                props.location.state === undefined ?
                state.bookings.map((bookingObj) => {
                    return (
                        <div key={bookingObj}>
                            {bookingObj.start_date}
                            <br />
                            {bookingObj.end_date}  
                        </div>
                    )
                })
                :
                null
            }
        </>
    )
}

export default Bookings
