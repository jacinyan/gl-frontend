import React, { useState, useEffect } from 'react'
import { Link, Route } from "react-router-dom";
import Detail from "../_shared/detail";

const Birthday = () => {

    const [property, setProperty] = useState([])

    useEffect(() => {
        console.log('useEffect gets called');
        const fetchProperty = async () =>{
            const response = await fetch('http://localhost:3000/properties')
            const data = await response.json()
            // console.log(data)
            const birthday = data.filter((item) => {
                return item.category_id === 1
            })

            setProperty(birthday) 
        } 
        
        fetchProperty()
    },[])
    return (
        <>
            <ul>
                {
                    property.map((propObj) => {
                        return (
                            <li key={propObj.id}>
                                <Link to={{pathname:'/properties/birthday/detail', state:{id: propObj.id, title: propObj.title,category_id:propObj.category_id} }}>Title:{propObj.title};category_id: {propObj.category_id}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }
            </ul>
            <Route path="/properties/birthday/detail" render={(props) => <Detail {...props}/>} />
        </>
    )
}

export default Birthday
