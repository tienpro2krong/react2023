import { Row, Col, Typography, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';


const { Title } = Typography;
const { Search } = Input;

const AddTodo = (props) => {
    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={24}>
                <Title level={2} style={{ textAlign: 'center' }}>Todo !</Title>
                <Search
                    placeholder="Name todo"
                    enterButton={<PlusCircleOutlined />}
                    onChange={props.change}
                    allowClear
                    onSearch={val => props.add(val)}
                    value={props.value}
                />
            </Col>
        </Row>
    )
}

// Khai bao dinh nghia: kieu du lieu truyen vao cho props cua component
AddTodo.propTypes = {
    change: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    value: PropTypes.func.isRequired
}
export default AddTodo;