import React from "react";
import { useSelector } from 'react-redux';

const Result = () => {
    const count = useSelector(state => state.counter.count);

    return (
        <h1>{count}</h1>
    )
}

export default React.memo(Result);