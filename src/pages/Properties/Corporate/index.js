import React, { useState, useEffect } from 'react'
import { Link, Route } from "react-router-dom";
import Detail from "../_shared/detail";

const Corporate = () => {
 
    const [property, setProperty] = useState([])

    useEffect(() => {
        console.log('useEffect gets called');
        const fetchProperty = async () =>{
            const response = await fetch('http://localhost:3000/properties')
            const data = await response.json()
            // console.log(data)
            const corporate = data.filter((item) => {
                return item.category_id === 2
            })

            setProperty(corporate) 
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
                                <Link to={{pathname:'/properties/corporate/detail', state:{id: propObj.id, title: propObj.title, category_id:propObj.category_id} }}>Title:{propObj.title};category_id: {propObj.category_id}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }
            </ul>
            <Route path="/properties/corporate/detail" render={(props) => <Detail {...props}/>} />
        </>
    )
}

export default Corporate
