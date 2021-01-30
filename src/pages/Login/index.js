import React, { useReducer } from 'react'
import userReducer from '../../utils/reducers/userReducer'
import propertyReducer from '../../utils/reducers/propertyReducer'
import { useForm } from 'react-hook-form'

//initial properties state
const propertyInitialState = {
    error: '',
    properties: []
}

// const userInitialState = {
//     username: '',
//     email: ''
// }

const Login = () => {
    // properties Reducer
    const [propertyState, dispatchProperty] = useReducer(propertyReducer, propertyInitialState)
    
    // user Reducer
    // const [userState, dispatchUser] = useReducer(userReducer, userInitialState)

    // login form handling
    const { register, handleSubmit } = useForm();

    const onSubmit = (formData) => {

        // console.log(data);
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

        // We format our request JSON for knock and then save the token it sends back in our browser’s local storage for later use.
        fetch('http://localhost:3000/auth/login', requestOptions).then(response => {
            let data = response.json()
            data.then(result => {
                console.log(result)
                sessionStorage.setItem("jwt", result.jwt)
            }).catch(error => console.error('Error:', error))
        })
    }


    // fetch properties
    const getProperties = () => {
        let token = "Bearer " + sessionStorage.getItem("jwt")
        console.log(token);

        fetch('http://localhost:3000/properties', {
            headers: {
                'Authorization': token
            }
        }).then(response => {
            return response.json()
        })
        .then((data) => {
            console.log(data);
            dispatchProperty({type:'PROPERTIES_LIST_REQUEST_SUCCESS', payload: data})
        })
        .catch((error) => {
            dispatchProperty({type:'PROPERTIES_LIST_REQUEST_FAIL', payload: error.message})
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
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    name="password"
                    id="password"
                    type="password"
                    ref={register({ required: true })}
                />
                <br />
                <br />
                <button>
                    Login
                </button>
            </form>

            <button
                onClick={getProperties}
                style={{ marginTop: '25vh' }}
            >
                Get Bananas
            </button>
            <>
                {
                    propertyState.error !== '' ? <h4>Oops, something went wrong</h4> :
                        propertyState.properties.map((propObj) => {
                            return (
                                <h3 key={propObj.id}>
                                    <p>ID:{propObj.id}</p>
                                    <p>TITLE:{propObj.title}</p>
                                    <p>DESCRIPTION:{propObj.description}</p>
                                    <p>CATEGORY_ID:{propObj.category_id}</p>
                                    <p>RATE:{propObj.rate}</p>
                                </h3>
                            )
                        })
                }
            </>
        </>
    )
}

export default Login
