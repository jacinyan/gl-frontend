export const getProperties = async (category_id) => {

        const response = await fetch('http://localhost:3000/properties')
        const data = await response.json()
        // console.log(data)
        const properties = data.filter((item) => {
            // console.log(item);
            return item.category_id === category_id
        })
        return properties
}

export const createProperty = async () =>{

}

export const updateProperty = async () =>{
    
}

export const deleteProperty = async () =>{
    
}