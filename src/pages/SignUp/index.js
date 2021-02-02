import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../utils/context/userContext'


const SignUp = () => {

    const history = useHistory()

    const { dispatch } = useContext(UserContext)

    const { register, handleSubmit, errors, formState: { isSubmitting } } = useForm();

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
                dispatch({
                    type: "USER_SIGNUP_FAIL",
                    payload: error
                });
            })
    }

    return (
        <>
            <h1 style={{ marginTop: "20vh", marginBottom: "5vh" }}>
                Banana Management System
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Username: </label>
                <br />
                <input
                    name="username"
                    id="username"
                    type="input"
                    ref={register({ required: true })}
                />
                {errors.username ? <span>&nbsp;{errors.username.message}</span> : null}
                <br/>
                <br/>
                <label htmlFor="email">Email: </label>
                <br />
                <input
                    name="email"
                    id="email"
                    type="email"
                    ref={register({ required: true })}
                />
                {errors.email ? <span>&nbsp;{errors.email.message}</span> : null}
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
                        }
                    })}
                />
                {errors.password ? <span>&nbsp;{errors.password.message}</span> : null}
                <br/>
                <br/>
                <label htmlFor="password">Password Confirmation:</label>
                <br />
                <input
                    name="password_confirmation"
                    id="password_confirmation"
                    type="password"
                    ref={register({ required: true })}
                />
                {errors.password_confirmation ? <div>{errors.password_confirmation.message}</div> : null}
                <br />
                <br />
                <button disabled={isSubmitting}>
                    {isSubmitting ? ("Loading...") : ("Sign Up")}
                </button>
            </form>
        </>
    )
}

export default SignUp
