import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../utils/context/userContext'
import { Form, Row, Col, Button } from 'react-bootstrap'
import FormContainer from '../../common/FormContainer'


const SignUp = () => {

    const history = useHistory()

    const { dispatch } = useContext(UserContext)

    const { register, handleSubmit, errors } = useForm({ mode: "onChange" });

    // Server Errors handling
    const [serverErrors, setServerErrors] = useState('')

    const onSubmit = (formData) => {

        const username = formData.username
        const email = formData.email
        const password = formData.password
        const password_confirmation = formData.password_confirmation
        const admin = false

        const request = { "username": username, "email": email, "password": password, "password_confirmation": password_confirmation, "admin": admin }

        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8;',
            }),
            body: JSON.stringify(request)
        }


        fetch('http://localhost:3000/api/auth/sign_up', requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw response;
            })
            .then(result => {
                console.log(result);
                dispatch({
                    type: "USER_SIGNUP_SUCCESS",
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
                    if (message.username) {
                        setServerErrors('This username has been taken')
                    }
                    if (message.email) {
                        setServerErrors('This email has been taken')
                    }
                    if (message.password_confirmation) {
                        setServerErrors('The Password and confirmation don\'t match')
                    }
                    dispatch({
                        type: "USER_SIGNUP_FAIL",
                        payload: detail
                    })
                });
            })
    }



    return (
        <FormContainer>
            <h1 style={{ marginTop: "10vh", marginBottom: "5vh" }}>
                Sign Up
            </h1>
            {serverErrors ?
                <div className="alert alert-danger alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    {'** ' + serverErrors}
                </div>
                :
                null}
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="username">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        name="username"
                        type="input"
                        ref={register({ required: true })}
                    />
                </Form.Group>
                {errors.username && <><div>&nbsp;*Username is required</div><br /></>}

                <Form.Group controlId="email">
                    <Form.Label>Email: </Form.Label>
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
                        ref={register({
                            required: true,
                            minLength: {
                                value: 6,
                                message: '*must be 6 chars'
                            },
                            validate: (value) => {
                                return (
                                    [/[^a-zA-Z0-9]/].every(pattern => pattern.test(value))
                                ) || '*must include a special char'
                            }
                        })}
                    />
                </Form.Group>
                {errors.password && <><div>&nbsp;*Password is required</div><br /></>}

                <Form.Group controlId="password_confirmation">
                    <Form.Label>Password Confirmation:</Form.Label>
                    <Form.Control
                        name="password_confirmation"
                        type="password"
                        ref={register({ required: true })}
                    />
                </Form.Group>
                {errors.password_confirmation && <><div>&nbsp;*Password confirmation is required</div></>}
                <br />
                <Button type="submit">
                    Sign Up
                </Button>
            </Form>
        </FormContainer>
    )
}

export default SignUp
