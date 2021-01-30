export async function signUp(data) {

}
export async function logIn(data) {
    fetch('http://localhost:3000/auth/login', requestOptions)
        .then(response => {
            let data = response.json()
            data.then(result => {
                console.log(result)
                sessionStorage.setItem("jwt", result.jwt)
            })
                .catch(error => console.error('Error:', error))
        })
}
export async function signOut() {
    sessionStorage.clear()
    return "Logged out"
}