import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../utils/context/userContext'
import { Form, Row, Col, Button } from 'react-bootstrap'
import FormContainer from '../../common/FormContainer'


const Login = () => {

    const history = useHistory()

    const { dispatch } = useContext(UserContext)

    const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

    // Server Errors handling
    const [serverErrors, setServerErrors] = useState('')

    const onSubmit = (formData) => {

        const email = formData.email
        const password = formData.password

        const request = { "email": email, "password": password }

        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8;',
            }),
            body: JSON.stringify(request)
        }

        fetch('http://localhost:3000/api/auth/login', requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(result => {
                dispatch({
                    type: "USER_LOGIN_SUCCESS",
                    payload: {
                        user: result.username,
                        jwt: result.jwt
                    }
                })
                history.push('/')
            })
            .catch(error => {
                const detail = error.json()
                detail.then(message => {
                    console.log(message);
                    if (message.error) {
                        setServerErrors(`${message.error}`)
                    }
                    dispatch({
                        type: "USER_LOGIN_FAIL",
                        payload: detail
                    })
                });
            })
    }

    return (
        <FormContainer>
            <h1 style={{ marginTop: "10vh", marginBottom: "5vh" }}>Log In</h1>
            {serverErrors ?
                <div className="alert alert-danger alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    {'** ' + serverErrors}
                </div>
                :
                null}
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Form.Group controlId="email">
                    <Form.Label >Email: </Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        ref={register({ required: true })}
                    />
                </Form.Group>
                {errors.email && <><div>&nbsp;*Email is required</div><br /></>}

                <Form.Group controlId="password">
                    <Form.Label >Password:</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        ref={register({ required: true })}
                    />
                </Form.Group>
                {errors.password && <div>&nbsp;*Password is required</div>}
                <br />
                <Button type="submit" variant='primary'>
                    Sign In
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    New Customer? <Link to='/sign_up'>Let's sign up!</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Login
