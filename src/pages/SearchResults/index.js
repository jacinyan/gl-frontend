
import React,{useEffect, useReducer} from 'react'
import { searchProperties } from '../../services/propertyServices';
import propertyReducer from '../../utils/reducers/propertyReducer';


const initialState = {
    isLoading: false,
    errors:'',
    properties: []
}

const SearchResults = ({match}) => {

    console.log(match); 

    const {keyword} = match.params

    console.log(keyword);

    const [state, dispatch] = useReducer(propertyReducer, initialState)

    useEffect(() => {
        searchProperties(keyword)
        dispatch({
            type: 'PROPERTIES_SEARCH',
            
        })
    }, [])


    return (
        <>
            
        </>
    )
}

export default SearchResults






