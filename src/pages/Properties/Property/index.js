import React, { useState } from 'react'
import { Link, Route } from "react-router-dom";
import Detail from "./Detail";

const Property = () => {
    // dummy initial state
    const initialState = {
        propertyArr: [
            { id: '01', title: 'weddingOne' },
            { id: '02', title: 'weddingTwo'},
            { id: '03', title: 'weddingThree'}
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
                                <Link to={`/properties/wedding/?id=${propObj.id}&title=${propObj.title}`}>{propObj.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }
            </ul>
            <Route path="/properties/wedding" component={Detail} />
        </>
    )
}

export default Property
