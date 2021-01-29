import React, { useReducer, useRef } from 'react'
import userReducer from '../../utils/reducers/userReducer'

const initialState = {
    error: '',
    properties: []
}


const Login = () => {

    const [state, dispatch] = useReducer(userReducer, initialState)

    const myRef1 = useRef()
    const myRef2 = useRef()

    // console.log(myRef1, myRef2);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // We format our request JSON for knock and then save the token it sends back in our browser’s local storage for later use.

    const login = () => {
        const email = myRef1.current.value
        const password = myRef2.current.value
        const request =  {"auth": { "email": email, "password": password } }

        const requestOptions = {
            method: 'POST',
            headers: new Headers ({
                'Content-Type': 'application/json;charset=utf-8;',
            }),
            body: JSON.stringify(request)
        }
        fetch('http://localhost:3000/auth/login',requestOptions).then(response => {
            let result = response.json()
            result.then(data => {
                console.log(data)
            })
        })
    }

    const getProperties = () => {

        const fetchBananas = async () => {
            try {
                const response = await fetch('http://localhost:3000/properties')
                const data = await response.json()
                // console.log(data)
                dispatch({ type: 'PROPERTIES_LIST_REQUEST_SUCCESS', payload: data })
            } catch (error) {
                dispatch({ type: 'PROPERTIES_LIST_REQUEST_FAIL', payload: error.message });
            }
        }
        fetchBananas()
    }



    return (
        <>
            <h1 style={{ marginTop: "20vh", marginBottom: "5vh" }}>
                Banana Management System
            </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <br />
                <input
                    name="email"
                    id="email"
                    type="email"
                    ref={myRef1}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    name="password"
                    id="password"
                    type="password"
                    ref={myRef2}
                />
                <button
                    onClick={login}
                >
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
                    state.properties.map((propObj) => {
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
