import React from "react";


function Links(props) {
    console.log(props)
    return (
        <div>
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedIn}>{props.linkedIn}</a>
        </div>
    )
}

export default Links 