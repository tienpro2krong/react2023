import { Row, Col, Card } from 'antd';
import { NumericFormat } from 'react-number-format';

const Global = ({ global }) => {
    console.log(global)
    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={8}>
                <Card title="Confirmed">
                    <p>NewConfirmed:
                        <NumericFormat
                            value={global.NewConfirmed}
                            allowLeadingZeros
                            thousandSeparator=","
                            displayType="text"
                        /></p>
                    <p>TotalConfirmed:
                        <NumericFormat
                            value={global.TotalConfirmed}
                            allowLeadingZeros
                            thousandSeparator=","
                            displayType="text"
                        />
                    </p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Deaths">
                    <p>NewDeaths:
                        <NumericFormat
                            value={global.NewDeaths}
                            allowLeadingZeros
                            thousandSeparator=","
                            displayType="text"
                        />
                    </p>
                    <p>TotalDeaths:
                        <NumericFormat
                            value={global.TotalDeaths}
                            allowLeadingZeros
                            thousandSeparator=","
                            displayType="text"
                        />
                    </p>
                </Card>
            </Col>
            <Col span={8}>
                <Card title="Recovered">
                    <p>NewRecovered:
                        <NumericFormat
                            value={global.NewRecovered}
                            allowLeadingZeros
                            thousandSeparator=","
                            displayType="text"
                        />
                    </p>
                    <p>TotalRecovered:
                        <NumericFormat
                            value={global.TotalRecovered}
                            allowLeadingZeros
                            thousandSeparator=","
                            displayType="text"
                        />
                    </p>
                </Card>
            </Col>

        </Row>
    )
}

export default Global;