import { PROPERTIES_REQUEST, PROPERTIES_REQUEST_SUCCESS, PROPERTIES_REQUEST_FAIL } from "../constants/propertyConstants";

export const listProperties = () => async (dispatch) => {
  
        try {
            dispatch({type:PROPERTIES_REQUEST})
            const response = await fetch('http://localhost:3000/properties')
            const data = await response.json()
            // console.log(data)
            const wedding = data.filter((item) => {
                // console.log(item);
                return item.category_id === 3
            })
    
           dispatch({
               type:PROPERTIES_REQUEST_SUCCESS,
               payload: wedding
            })
        } catch (error) {
            dispatch({type:PROPERTIES_REQUEST_FAIL, payload:error.message}));
        }
    