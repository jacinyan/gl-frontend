import React from 'react'
// dummy data
const DetailData = [
    {id: '01', content: "content1"},
    {id: '02', content: "content2"},
    {id: '03', content: "content3"}
]


const Detail = (props) => {

    // console.log(props)

    // search
    // const {id, title} = props.match.params

    //state
    const {id, title} = props.location.state || {}

    const matchedResult = DetailData.find(detailObj =>  detailObj.id === id) || {}
 
    return ( 
        <ul>
            <li>ID:{id}</li>
            <li>Title:{title}</li>
            <li>Content:{matchedResult.content}</li>
        </ul>
    )
}

export default Detail
