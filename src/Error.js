import React from "react";
import { useRouteError } from "react-router-dom";

const Error =()=>{
    const err = useRouteError();
    console.log(err)
    return(
        <div className="error-page">
            <h2>{err.data}</h2>
            <h2>{err.status}</h2>
            <h2>{err.statusText}</h2>
        </div>
    )
}

export default Error;