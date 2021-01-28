import React, { useState, useEffect } from 'react'
import { Link, Route } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import Detail from "../_shared/detail";

const Corporate = (props) => {

    const [property, setProperty] = useState([])

    useEffect(() => {
        // console.log('useEffect gets called');
        const fetchProperty = async () => {

            try {
                const response = await fetch('http://localhost:3000/properties')
                const data = await response.json()
                // console.log(data)
                const corporate = data.filter((item) => {
                    return item.category_id === 2
                })

                setProperty(corporate)
            } catch (error) {
                console.log(error);
            }

        }

        fetchProperty()
    }, [])

    return (
        <>
            {
                props.location.state === undefined ?
                    property.map((propObj) => {
                        return (
                            <Col sm={12} md={6} lg={4} xl={3} key={propObj.id}>
                                <Card className='my-3 p-3 rounded' >
                                    <Link to={{ pathname: '/properties/corporate/detail', state: { id: propObj.id, title: propObj.title, category_id: propObj.category_id, featured_image: `${propObj.featured_image}` } }} >
                                        <Card.Img src={`${propObj.featured_image}`} variant='top' />
                                    </Link>&nbsp;&nbsp;
                                    <Card.Body>
                                        <Link to={{ pathname: '/properties/corporate/detail', state: { id: propObj.id, title: propObj.title, category_id: propObj.category_id, featured_image: `${propObj.featured_image}` } }} >
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
