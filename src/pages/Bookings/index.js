import React, { useEffect, useReducer, useContext } from 'react'
import { Route } from "react-router-dom";
// import Detail from "../_shared/detail";
// import List from '../_shared/list'

import bookingReducer from '../../../utils/reducers/bookingReducer'
import {getBookings} from '../../utils/reducers/bookingReducer'
import {UserContext} from '../../utils/context/userContext'

const initialState = {
    isLoading: false,
    error: '',
    bookings: []
}

const Bookings = (props) => {

    const {state: loggedInState} = useContext(UserContext)

    const [state, dispatch] = useReducer(bookingReducer, initialState)

    useEffect(() => {
        dispatch({
            type: "BOOKINGS_LIST_REQUEST"
          });
        getBookings(3)
        .then((data) => {
            dispatch({ type: 'BOOKINGS_LIST_REQUEST_SUCCESS', payload: data })
        })
        .catch((error)=>{
            dispatch({ type: 'BOOKINGS_LIST_REQUEST_FAIL', payload: error })
        })
    }, [loggedInState.jwt])

    return (    
        <>
            {
                state.isLoading ? <h2>Loading...</h2> 
                :
                state.error !== '' ? <h4>Oops😅, something went wrong</h4>
                :
                props.location.state === undefined ?
                <List state={state}/>
                :
                null
            }
            {/* <Route path="/properties/wedding/detail" render={(props) => <Detail {...props} />} /> */}
        </>
    )
}

export default Bookings
