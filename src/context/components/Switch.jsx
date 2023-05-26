import React from "react";
import { Switch } from 'antd';
import { useContext } from "react";
import ChangeUIContext from "../share/context";

const SwitchComponent = () => {
    const { onChange } = useContext(ChangeUIContext)
    return (
        <Switch defaultChecked onChange={onChange} />
    )
}

export default React.memo(SwitchComponent);