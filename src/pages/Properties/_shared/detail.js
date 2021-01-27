import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";


const Detail = props => {


    const { id, title, category_id, featured_image } = props.location.state || {}

    console.log(id, title, category_id, featured_image)

    const category = () => category_id === 1 ? 'birthday' : category_id === 2 ? 'corporate' : 'wedding'


    return (
        <>
            <Link className='btn btn-light my-3' to={`/properties/${category()}`}>Go Back</Link>
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Image:<img src={featured_image}/></li>
            </ul>
            {/* <Row>
                <Col md={6}>
                    <Image src={featured_image} alt={title} fluid/>
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>{title}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Rate: ${rate}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row> */}
        </>
    )
}

export default Detail
