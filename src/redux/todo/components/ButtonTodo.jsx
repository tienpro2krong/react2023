import React from "react";

const ButtonTodo = (props) => {
    return (
        <button name="button">{props.children}</button>
    )
}

export default React.memo(ButtonTodo);