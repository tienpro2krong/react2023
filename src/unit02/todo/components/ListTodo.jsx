import { Row, Col, List, Checkbox } from 'antd';
import { DeleteFilled } from '@ant-design/icons';
import PropTypes from 'prop-types';

const ListTodo = (props) => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <List
                        itemLayout="horizontal"
                        dataSource={props.data}
                        renderItem={(item, index) => (
                            <List.Item key={index}>
                                <List.Item.Meta
                                    avatar={
                                        <Checkbox
                                            onChange={() => props.finish(item.id)}
                                            checked={item.done}
                                        />
                                    }
                                    title={
                                        <span
                                            style={item.done ? { color: 'red', textDecoration: 'line-through' } : null}
                                        >
                                            {item.name}
                                        </span>
                                    }
                                />
                                <div>
                                    <DeleteFilled style={{ color: 'hotpink' }}
                                        onClick={() => props.remove(item.id)}
                                    />
                                </div>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </>
    )
}

// Khai bao dinh nghia: kieu du lieu truyen vao cho props cua component
ListTodo.propTypes = {
    data: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired,
    finish: PropTypes.func.isRequired
}

export default ListTodo