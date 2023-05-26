import React, { useContext } from "react";
import { Row, Col } from 'antd';
import ChangeUIContext from "../share/context";

const ContentComponent = () => {
    const { color } = useContext(ChangeUIContext)
    return (
        <Row>
            <Col>
                <p className={color}>The only argument to createContext is the default value.
                    Here, 1 refers to the biggest heading level,
                    but you could pass any kind of value (even an object).
                    You will see the significance of the default value in the next step.
                </p>
            </Col>
        </Row>
    )
}

export default React.memo(ContentComponent);