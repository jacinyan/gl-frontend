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
                                {/* search */}
                                {/* <Link to={`/properties/wedding/${propObj.id}`}>{propObj.title}</Link>&nbsp;&nbsp; */}

                                {/* state */}
                                <Link to={{pathname:'/properties/wedding/detail', state:{id: propObj.id, title: propObj.title} }}>{propObj.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }
            </ul>
            {/* search */}
            {/* <Route path="/properties/wedding/:id" render={(props) => <Detail {...props} />} /> */}

            {/* state */}
            <Route path="/properties/wedding/detail" render={(props) => <Detail {...props} />} />
        </>
    )
}

export default Wedding
