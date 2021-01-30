import React from 'react'
import { Link } from "react-router-dom";
import { Card, Col, Row, Image, ListGroup, Container } from "react-bootstrap";


const Detail = props => {

    const { title, category_id, featured_image, rate, description } = props.location.state || {}

    // console.log(props)

    const category = () => category_id === 1 ? 'birthday' : category_id === 2 ? 'corporate' : 'wedding'


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
                    <Col md={3}>
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
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Rate:
                                        </Col>
                                        <Col>
                                            <strong>${rate}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Pick a date
                                        </Col>
                                        <Col>
                                            <strong>dd/mm/yy</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Detail
