import React from "react";
import Header from "../Header/Header";

const Protected = (props) => {
    const Component = props.component
    return(
        <div>
            <Header/>
            <Component />
        </div>
    )
}

export default Protected