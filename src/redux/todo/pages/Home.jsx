import ButtonTodo from "../components/ButtonTodo";
import InputTodo from "../components/InputTodo";
import ListTodo from "../components/ListTodo";
import React from "react";

const IndexTodo = () => {
    return (
        <>
            <InputTodo
                type="text"
                name="todo"
            />
            <ButtonTodo>Add</ButtonTodo>
            <ListTodo />
        </>
    )
}

export default React.memo(IndexTodo);