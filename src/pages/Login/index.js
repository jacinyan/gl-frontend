import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import {UserContext} from '../../utils/context/userContext'


const Login = (props) => {

    console.log(props.state)

    const { dispatch } = useContext(UserContext)

    const { register, handleSubmit, errors, formState: { isSubmitting } } = useForm();

    const onSubmit = (formData) => {

        const email = formData.email
        const password = formData.password

        const request = { "auth": { "email": email, "password": password } }

        const requestOptions = {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json;charset=utf-8;',
            }),
            body: JSON.stringify(request)
        }

        // We format our request JSON for knock and then save the token it sends back in our browser’s session storage for later use.
        // fetch('http://localhost:3000/auth/login', requestOptions).then(response => {
        //     let data = response.json()
        //     data.then(result => {
        //         console.log(result)
        //         sessionStorage.setItem("jwt", result.jwt)
        //     }).catch(error => console.error('Error:', error))
        // })

        fetch('http://localhost:3000/auth/login', requestOptions)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(result => {
            console.log(result);
            dispatch({
                type: "USER_LOGIN_SUCCESS",
                payload: {
                    user: 'USER',
                    jwt : result.jwt
                }
            })
          })
        .catch(error => {
            dispatch({
                type: "USER_LOGIN_FAIL",
                payload: error
            });
          })
    }
    // console.log(state);

    return (
        <>  
            <h1 style={{ marginTop: "20vh", marginBottom: "5vh" }}>
                Banana Management System
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">Email: </label>
                <br />
                <input
                    name="email"
                    id="email"
                    type="email"
                    ref={register({ required: true })}
                />
                {errors.email ? <div>{errors.email.message}</div> : null}
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    name="password"
                    id="password"
                    type="password"
                    ref={register({ required: true })}
                />
                {errors.password ? <div>{errors.password.message}</div> : null}
                <br />
                <br />
                <button disabled={isSubmitting}>
                    {isSubmitting ? ("Loading...") : ("Login")}
                </button>
            </form>
        </>
    )
}

export default Login
