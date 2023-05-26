import { useState, useEffect } from "react";
import Global from "./components/Global";
import Countries from "./components/Countries";
import { Row, Col, Skeleton } from 'antd';
import { api } from './services/api'


export default function VirusCorona() {
    const [loading, setLoading] = useState(false);
    const [virusGlobal, setDataVirusGlobal] = useState({});
    const [virusCountries, setDataVirusCountries] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true); // bao hieu bat dau xu li
            const data = await api.getDataVirusCorona();
            if (data.hasOwnProperty('Global') && data.hasOwnProperty('Countries')) {
                // co du lieu
                setDataVirusGlobal(data['Global']);
                setDataVirusCountries(data['Countries']);
                setError(null);

            } else {
                // ko co du lieu
                setError({ code: 500, mess: "Not found data" });
            }

            setLoading(false); // hoan thanh
        }
        getData();
    }, []);
    // khi render xong giao dien thi se di call api

    if (loading) {
        return (
            <Row>
                <Col span={20} offset={2}>
                    <Skeleton />

                </Col>
            </Row>
        )
    }

    return (
        <Row>
            <Col span={20} offset={2}>
                <Global
                    global={virusGlobal}
                />
                <Countries
                    country={virusCountries}
                />
            </Col>
        </Row>
    )
}