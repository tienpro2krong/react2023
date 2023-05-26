import React, { useContext } from "react";
import { Row, Col } from "antd";
import ChangeUIContext from "../share/context";

const FooterComponent = () => {
    const { color } = useContext(ChangeUIContext)
    return (
        <Row>
            <Col span={24}>
                <p className={color}>This is Footer</p>
            </Col>
        </Row>
    )
}

export default React.memo(FooterComponent);