export const getBookings = async (username) => {
    let token = "Bearer " + localStorage.getItem("jwt")

    try {
        const response = await fetch('http://localhost:3000/api/bookings', {
            headers: {
                'Authorization': token
            }
        })
        const data = await response.json()
        console.log(data);
        const bookings = data.filter((booking) => {
            return booking.username === username
        })
        console.log(bookings);
        return bookings
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