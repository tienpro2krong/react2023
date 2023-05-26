import { Row, Col, Table } from 'antd';
import { NumericFormat } from 'react-number-format';

const columns = [
    {
        title: 'Country',
        dataIndex: 'Country',
        key: 'CountryCode'
    },
    {
        title: 'CountryCode',
        dataIndex: 'CountryCode',
        key: 'CountryCode'
    },
    {
        title: 'New Confirmed',
        dataIndex: 'NewConfirmed',
        key: 'CountryCode'
    },
    {
        title: 'Total Confirmed',
        dataIndex: 'TotalConfirmed',
        key: 'CountryCode',
        render: (text) => <NumericFormat
            value={text}
            allowLeadingZeros
            thousandSeparator=","
            displayType="text"
        />
    },
    {
        title: 'New Deaths',
        dataIndex: 'NewDeaths',
        key: 'CountryCode'
    },
    {
        title: 'Total Deaths',
        dataIndex: 'TotalDeaths',
        key: 'CountryCode',
        render: (text) => <NumericFormat
            value={text}
            allowLeadingZeros
            thousandSeparator=","
            displayType="text"
        />
    },
    {
        title: 'New Recovered',
        dataIndex: 'NewRecovered',
        key: 'CountryCode'
    },
    {
        title: 'Total Recovered',
        dataIndex: 'TotalRecovered',
        key: 'CountryCode',
        // render: (text) => <NumericFormat
        //     value={text}
        //     allowLeadingZeros
        //     thousandSeparator=","
        //     displayType="text"
        // />
    },
];

// const data = [
//     {
//         ID: "a676f721-66da-4b3b-abc5-959a1688592d",
//         Country: "Afghanistan",
//         CountryCode: "AF",
//         Slug: "afghanistan",
//         NewConfirmed: 0,
//         TotalConfirmed: 209451,
//         NewDeaths: 0,
//         TotalDeaths: 7896,
//         NewRecovered: 0,
//         TotalRecovered: 0,
//     }
// ];

const Countries = ({ country }) => {
    return (
        <Row style={{ marginBottom: '30px' }}>
            <Col span={24}>
                <Table
                    columns={columns}
                    dataSource={country}
                    rowKey='ID'
                />
            </Col>
        </Row>
    )
}

export default Countries;