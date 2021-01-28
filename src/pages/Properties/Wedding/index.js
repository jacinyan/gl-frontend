import React, { useEffect, useReducer } from 'react'
import { Link, Route } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import Detail from "../_shared/detail";
import propertyReducer from '../../../utils/reducers/propertyReducer'

const initialState = {
    loading: false,
    error: '',
    properties: []
}

const Wedding = (props) => {

    const [state, dispatch] = useReducer(propertyReducer, initialState)

    useEffect(() => {
        // console.log('useEffect gets called');
        const fetchProperty = async () => {

            try {
                const response = await fetch('http://localhost:3000/properties')
                const data = await response.json()
                // console.log(data)
                const wedding = data.filter((item) => {
                    // console.log(item);
                    return item.category_id === 3
                })
                dispatch({type: 'PROPERTIES_LIST_REQUEST_SUCCESS', payload: wedding})
            } catch (error) {
                dispatch({type: 'PROPERTIES_LIST_REQUEST_FAIL', payload: error.message});
            }

        }

        fetchProperty()
    }, [])

    return (
        <>
            {
                props.location.state === undefined ?
                    state.properties.map((propObj) => {
                        return (
                            <Col sm={12} md={6} lg={4} xl={3} key={propObj.id}>
                                <Card className='my-3 p-3 rounded' >
                                    <Link to={{ pathname: '/properties/wedding/detail', state: { id: propObj.id, title: propObj.title, category_id: propObj.category_id, featured_image: `${propObj.featured_image}` } }} >
                                        <Card.Img src={`${propObj.featured_image}`} variant='top' />
                                    </Link>&nbsp;&nbsp;
                                    <Card.Body>
                                        <Link to={{ pathname: '/properties/wedding/detail', state: { id: propObj.id, title: propObj.title, category_id: propObj.category_id, featured_image: `${propObj.featured_image}` } }} >
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
            <Route path="/properties/wedding/detail" render={(props) => <Detail {...props} />} />
        </>
    )
}

export default Wedding
