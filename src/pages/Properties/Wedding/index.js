import React, { useState } from 'react'
import { Link, Route } from "react-router-dom";
import Detail from "../_shared/detail";

const Wedding = () => {
    // dummy initial state
    const initialState = {
        propertyArr: [
            { id: '01', title: 'weddingOne' },
            { id: '02', title: 'weddingTwo'},
            { id: '03', title: 'weddingThree'},
            { id: '04', title: 'weddingFour'},
            { id: '05', title: 'weddingFive'},
            { id: '06', title: 'weddingSix'}
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
            <Route path="/properties/wedding" render={(props) => <Detail {...props} />} />
        </>
    )
}

export default Wedding
