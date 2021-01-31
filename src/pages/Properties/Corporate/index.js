import React, { useEffect, useReducer } from 'react'
import { Route } from "react-router-dom";
import Detail from "../_shared/detail";
import List from '../_shared/list'

import propertyReducer from '../../../utils/reducers/propertyReducer'
import {getProperties} from '../../../services/propertyServices'


const initialState = {
    loading: true,
    error: '',
    properties: []
}

const Corporate = (props) => {

    const [state, dispatch] = useReducer(propertyReducer, initialState)

    useEffect(() => {
        getProperties(2)
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
            <Route path="/properties/corporate/detail" render={(props) => <Detail {...props} />} />
        </>
    )
}

export default Corporate
