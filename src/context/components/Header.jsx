import React, { useContext } from "react";
import Switch from "./Switch";
import { Row, Col } from 'antd';
import ChangeUIContext from "../share/context";

const HeaderComponent = () => {
    const { color } = useContext(ChangeUIContext)
    return (
        <>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <Switch />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} >
                            <p className={color}>This is lo go</p>
                        </Col>
                        <Col span={16} >
                            <h1 className={color}>This is Header</h1>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </>
    )

}

export default React.memo(HeaderComponent);