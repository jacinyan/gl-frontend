export const getProperties = async (category_id) => {
    let token = "Bearer " + localStorage.getItem("jwt")
    console.log(token);

    const response = await fetch('http://localhost:3000/properties', {
        headers: {
            'Authorization': token
        }
    })
    const data = await response.json()
    console.log(data)
    const properties = data.filter((property) => {
        // console.log(item);
        return property.category_id === category_id
    })
    return properties
}

export const createProperty = async () => {

}

export const updateProperty = async () => {

}

export const deleteProperty = async () => {

}