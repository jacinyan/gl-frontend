import React from 'react'
import { Link } from "react-router-dom";

// dummy data
const DetailData = [
    { id: '01', content: "content1" },
    { id: '02', content: "content2" },
    { id: '03', content: "content3" }
]


const Detail = props => {

    const { id, title, category_id } = props.location.state || {}

    const matchedResult = DetailData.find(detailObj => detailObj.id === id) || {}
    
    const category = () => category_id === 1 ? 'birthday' : category_id === 2 ? 'corporate' : 'wedding'
    
    return (
        <>
            <Link className='btn btn-light my-3' to={`/properties/${category()}`}>Go Back</Link>
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{matchedResult.content}</li>
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
