import React from "react";
import { useSelector } from "react-redux";

const ListTodo = () => {
    const data = useSelector(state => state.todo.listData);
    console.log(data)
    return (
        <ul>
            <li>
                AAAA
            </li>
            <li>
                BBBB
            </li>
        </ul>
    )
}

export default React.memo(ListTodo);