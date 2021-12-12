import React from "react";

const Note = (props) => (
    <div className="note">
        <h1>{props.name}</h1>
        <p>{props.body}</p>
    </div>
)

export default Note;