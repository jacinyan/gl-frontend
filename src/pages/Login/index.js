import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {UserContext} from '../../utils/context/userContext'


const Login = () => {

    const history = useHistory()

    const { dispatch } = useContext(UserContext)

    const { register, handleSubmit, errors, formState } = useForm({mode: "onChange"});

    // Server Errors handling
    const [serverErrors, setServerErrors] = useState('')

    const onSubmit = (formData) => {

        const email = formData.email
        const password = formData.password

        const request =  { "email": email, "password": password } 

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
                    jwt : result.jwt
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
        <>  
            <h1 style={{ marginTop: "20vh", marginBottom: "5vh" }}>
                Banana Management System
            </h1>
            {serverErrors ? <p style={{ color: 'red' }}>{'** ' + serverErrors}</p> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    ref={register({ required: true })}
                />
               {errors.password && <span>&nbsp;*Password is required</span>}
                <br />
                <br />
                <button type="submit" disabled={!formState.isValid} >
                    Sign In
                </button>
            </form>
        </>
    )
}

export default Login
