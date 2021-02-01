export const getBookings = async (user_id) => {
    let token = "Bearer " + localStorage.getItem("jwt")

    const response = await fetch('http://localhost:3000/bookings', {
        headers: {
            'Authorization': token
        }
    })
    const data = await response.json()
    const bookings = data.filter((booking) => {
        return booking.user === user_id
    })
    return bookings
}

export const createBooking = async () => {

}

export const updateBooking = async () => {

}

export const deleteBooking = async () => {

}