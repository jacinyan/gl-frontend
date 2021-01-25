import React, { useState } from 'react'
import { Link, Route } from "react-router-dom";
import Detail from "../_shared/detail";

const Corporate = () => {
    // dummy initial state
    const initialState = {
        propertyArr: [
            { id: '01', title: 'corporateOne' },
            { id: '02', title: 'corporateTwo'},
            { id: '03', title: 'corporateThree'}
        ]
    }


    const [property, setProperty] = useState(initialState)
    const { propertyArr } = property

    return (
        <>
            <ul>
                {
                    propertyArr.map((propObj) => {
                        return (
                            <li key={propObj.id}>
                                <Link to={`/properties/corporate/${propObj.id}`}>{propObj.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }
            </ul>
            <Route path="/properties/corporate/:id" render={(props) => <Detail {...props}/>} />
        </>
    )
}

export default Corporate
