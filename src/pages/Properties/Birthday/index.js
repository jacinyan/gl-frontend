import React, { useState } from 'react'
import { Link, Route } from "react-router-dom";
import Detail from "../_shared/detail";

const Birthday = () => {
    // dummy initial state
    const initialState = {
        propertyArr: [
            { id: '01', title: 'birthdayOne' },
            { id: '02', title: 'birthdayTwo'},

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
                                <Link to={`/properties/birthday/?id=${propObj.id}&title=${propObj.title}`}>{propObj.title}</Link>&nbsp;&nbsp;
                            </li>
                        )
                    })
                }
            </ul>
            <Route path="/properties/birthday" render={(props) => <Detail {...props}/>} />
        </>
    )
}

export default Birthday
