import React from 'react'
import qs from 'querystring'

// dummy data
const DetailData = [
    {id: '01', content: "wedding content1"},
    {id: '02', content: "wedding content2"},
    {id: '03', content: "wedding content3"}
]


const Detail = (props) => {
    console.log(props)
    const {search} = props.location
    const {id, title} = qs.parse(search.slice(1))
    const matchedResult = DetailData.find(detailObj =>  detailObj.id === id)
 
    return ( matchedResult? 
        <ul>
            <li>ID:{id}</li>
            <li>Title:{title}</li>
            <li>Content:{matchedResult.content}</li>
        </ul>
        :
        ''
    )
}

export default Detail
