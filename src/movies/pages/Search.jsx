import React from "react";
import LayoutMovies from '../components/Layout';
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";

const SearchMovies = () => {
    const { name } = useParams();
    // lay dc tat ca bo phim theo ten
    console.log('name', name);
    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3={`Tim kiem phim: ${name}`}
        >
            <Row>
                <Col span={24}>
                    <h4>Tim kiem phim</h4>
                </Col>
            </Row>

        </LayoutMovies>
    )
}

export default React.memo(SearchMovies);