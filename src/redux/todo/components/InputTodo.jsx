import React from "react";

const InputTodo = (props) => {
    return (
        <input
            name={props.name}
            type={props.type}
        />
    )
}

export default React.memo(InputTodo);