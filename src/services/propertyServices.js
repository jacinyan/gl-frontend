export const getProperties = async (category_id) => {
    let token = "Bearer " + localStorage.getItem("jwt")

    try {
        const response = await fetch('http://localhost:3000/api/properties', {
            headers: {
                'Authorization': token
            }
        })
        const data = await response.json()
        const properties = data.filter((property) => {
            return property.category_id === category_id
        })
        return properties

    } catch (error) {
        throw error
    }


}

export const createProperty = async () => {

}

export const updateProperty = async () => {

}

export const deleteProperty = async () => {

}