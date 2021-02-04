export const getBookings = async () => {
    let token = "Bearer " + localStorage.getItem("jwt")

    try {
        const response = await fetch('http://localhost:3000/api/bookings', {
            headers: {
                'Authorization': token
            }
        })
        const data = await response.json()
        return data
    } catch (error) {
        throw error
    }


}

export const createBooking = async () => {

}

export const updateBooking = async () => {

}

export const deleteBooking = async () => {

}