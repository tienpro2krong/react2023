import React from "react";
import LayoutMovies from '../components/Layout';
import { Row, Result, Button, Col } from "antd";
import { Link } from "react-router-dom";

const NotfoundPage = () => {
    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Khong tim thay yeu cau"
        >
            <Row>
                <Col span={24}>
                    <Result
                        status="404"
                        title="404"
                        subTitle="Sorry, the page you visited does not exist."
                        extra={
                            <Link to="/">
                                <Button type="primary">Back Home</Button>
                            </Link>
                        }
                    />
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(NotfoundPage);