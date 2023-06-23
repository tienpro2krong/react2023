import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTodoByName } from "../actions/todo";

const InputTodo = (props) => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.name);

    const changeName = (name) => {
        // let name = event.target.value;
        // name = name.trim();
        dispatch(changeTodoByName(name))
    }
    return (
        <input
            name={props.name}
            type={props.type}
            onChange={event => changeName(event.target.value)}
            value={todo}
        />
    )
}

export default React.memo(InputTodo);