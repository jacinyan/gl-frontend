import React, { useEffect, useReducer } from 'react'
import { Link, Route } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import Detail from "../_shared/detail";
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
                    state.properties.map((propObj) => {
                        return (
                            <Col sm={12} md={6} lg={4} xl={3} key={propObj.id}>
                                <Card className='my-3 p-3 rounded' >
                                    <Link to={{ pathname: '/properties/corporate/detail', state: { id: propObj.id, title: propObj.title, category_id: propObj.category_id, featured_image: `${propObj.featured_image}`, description: propObj.description, rate: propObj.rate} }} >
                                        <Card.Img src={`${propObj.featured_image}`} variant='top' />
                                    </Link>&nbsp;&nbsp;
                                    <Card.Body>
                                        <Link to={{ pathname: '/properties/corporate/detail', state: { id: propObj.id, title: propObj.title, category_id: propObj.category_id, featured_image: `${propObj.featured_image}`, description: propObj.description, rate: propObj.rate } }} >
                                            <Card.Title as='div'>
                                                <strong>
                                                    {propObj.title}
                                                </strong>
                                            </Card.Title>
                                        </Link>
                                        <Card.Text as='h3'>
                                            ${propObj.rate}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                    :
                    null
            }
            <Route path="/properties/corporate/detail" render={(props) => <Detail {...props} />} />
        </>
    )
}

export default Corporate
