import React, { useEffect, useState } from 'react'

const Login = () => {

    return (
        <h2>
            ##This is the Login page###
        </h2>
    )

    // const [properties, setProperties] = useState({propertiesReceived: ""})

    // const login = () => {
    //     const email = $("#email").val()
    //     const password = $("#password").val()
    //     const request = { "auth": { "email": email, "password": password } }
    //     console.log(request)
    //     $.ajax({
    //         url: "http://localhost:3000/users/login",
    //         type: "POST",
    //         data: request,
    //         dataType: "json",
    //         success: function (result) {
    //             console.log(result)
    //             localStorage.setItem("jwt", result.jwt)
    //         }
    //     })
    // }

    // const getProperties = () => {
    //     let token = "Bearer " + localStorage.getItem("jwt")
    //     console.log(token)
    //     $.ajax({
    //         url: "http://localhost:3000/api/bananas",
    //         type: "GET",
    //         beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', token) },
    //         context: this, // Allows us to use this.setState inside success
    //         success: function (result) {
    //             console.log(result)
    //             this.setState({ bananasReceived: JSON.stringify(result) })
    //         }
    //     })
    // }

    // return (
    //     <div className="login">
    //         <h1 style={{ marginTop: "20vh", marginBottom: "5vh" }}>
    //             Login
    //     </h1>
    //         <form>
    //             <label htmlFor="email">Email: </label>
    //             <br />
    //             <input
    //                 name="email"
    //                 id="email"
    //                 type="email"
    //             />
    //             <br /><br />
    //             <label htmlFor="password">Password:</label>
    //             <br />
    //             <input
    //                 name="password"
    //                 id="password"
    //                 type="password"
    //             />
    //         </form>
    //         <br />
    //         <button
    //             onClick={login}
    //         >
    //             Login
    //       </button>
    //         <br />
    //         <button
    //             onClick={getProperties}
    //             style={{ marginTop: "10vh" }}
    //         >
    //             Get Properties
    //     </button>
    //         <p>{properties}</p>
    //     </div>
    // )
}

export default Login
