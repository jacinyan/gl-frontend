import React, { useReducer, useEffect } from 'react'
import {Route } from "react-router-dom";
import Detail from "../_shared/detail";
import propertyReducer from '../../../utils/reducers/propertyReducer'
import {getProperties} from '../../../services/propertyServices'
import List from '../_shared/list'


const initialState = {
    loading: true,
    error: '',
    properties: []
}

const Birthday = (props) => {

    const [state, dispatch] = useReducer(propertyReducer, initialState)

    useEffect(() => {
        getProperties(1)
        .then((data) => {
            dispatch({ type: 'PROPERTIES_LIST_REQUEST_SUCCESS', payload: data })
        })
        .catch((error)=>{
            dispatch({ type: 'PROPERTIES_LIST_REQUEST_FAIL', payload: error.message })
        })
    }, [])

    return (
        <>
            {   
                state.loading ? <h2>Loading...</h2>
                :
                state.error !== '' ? <h4>Oops😅, something went wrong</h4>
                :
                props.location.state === undefined ?
                <List state={state}/>
                :
                null
            }
            <Route path="/properties/birthday/detail" render={(props) => <Detail {...props} />} />
        </>
    )
}

export default Birthday

