import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm} from 'react-hook-form'
import { UserContext } from '../../utils/context/userContext'


const SignUp = () => {

    const history = useHistory()

    const { dispatch } = useContext(UserContext)

    const { register, handleSubmit, errors, formState} = useForm({mode: "onChange"});

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


        fetch('http://localhost:3000/auth/sign_up', requestOptions)
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
        <>
            <h1 style={{ marginTop: "10vh", marginBottom: "5vh" }}>
                Banana Management System
            </h1>
            {serverErrors ? <p style={{ color: 'red' }}>{'** ' + serverErrors}</p> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Username: </label>
                <br />
                <input
                    name="username"
                    id="username"
                    type="input"
                    ref={register({ required: true })}
                />
                {errors.username && <span>&nbsp;*Username is required</span>}
                <br />
                <br />
                <label htmlFor="email">Email: </label>
                <br />
                <input
                    name="email"
                    id="email"
                    type="email"
                    ref={register({ required: true })}
                />
                {errors.email && <span>&nbsp;*Email is required</span>}
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    name="password"
                    id="password"
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
                {errors.password ? <span>&nbsp;{errors.password.message}</span> : null}
                <br />
                <br />
                <label htmlFor="password">Password Confirmation:</label>
                <br />
                <input
                    name="password_confirmation"
                    id="password_confirmation"
                    type="password"
                    ref={register({ required: true })}
                />
                {errors.password_confirmation ? <span>&nbsp;{errors.password_confirmation.message}</span> : null}
                <br />
                <br />
                <button type="submit" disabled={!formState.isValid} >
                    Sign Up
                </button>
            </form>
        </>
    )
}

export default SignUp
