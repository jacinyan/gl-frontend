export const getBookings = async (username) => {
    let token = "Bearer " + localStorage.getItem("jwt")

    const response = await fetch('http://localhost:3000/api/bookings', {
        headers: {
            'Authorization': token
        }
    })
    const data = await response.json()
    const bookings = data.filter((booking) => {
        return booking.username === username
    })
    console.log(bookings);
    return bookings
}

export const createBooking = async () => {

}

export const updateBooking = async () => {

}

export const deleteBooking = async () => {

}