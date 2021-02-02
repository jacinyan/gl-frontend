import React from 'react'
import { Link } from "react-router-dom";
import { Card, Col, Row, Image, ListGroup, Container, Button } from "react-bootstrap";
import Panel from '../../../common/Panel'

import PubSub from 'pubsub-js'


const Detail = props => {

    const { title, category_id, featured_image, rate, description } = props.location.state || {}

    // console.log(props)

    const category = () => category_id === 1 ? 'birthday' : category_id === 2 ? 'corporate' : 'wedding'

    // inform Panel comp
    PubSub.publish('title', title)

    return (
        <>
            <Container>
                <Row>
                    <Link className='btn btn-light my-3' to={`/properties/${category()}`}>Go Back</Link>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={6}>
                        <Image src={featured_image} alt={title} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h2>{title}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Rate: ${rate}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={2}>
                        <Card className='border-0'>
                            <ListGroup variant='flush' className="text-center">
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            <Button varian="success">PICK A DATE</Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
           <Panel />
        </>
    )
}

export default Detail
