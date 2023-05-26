import { Row, Col } from 'antd'
import AddTodo from './components/AddTodo'
import ListTodo from './components/ListTodo'
import { useState } from 'react'

export default function TodoApp() {
    const [nameTodo, setNameTodo] = useState(null);
    const [listTodo, setListTodo] = useState([]);
    const [idTodo, setIdTodo] = useState(1);

    //Luu ten cong viec vao trong state

    const changeNameTodo = (event) => {
        let value = event.target.value;
        if (value.length >= 0) {
            setNameTodo(value);
        }
    }

    // them moi cong viec
    const addTodo = (work = '') => {
        work = work.trim();
        if (work.length > 0) {
            setIdTodo(idTodo + 1);
            setListTodo([...listTodo, {
                id: idTodo,
                name: work,
                done: false
            }]);
            setNameTodo(null);
        }
    }

    // xoa cong viec 
    const removeItemTodo = (id) => {
        const newWorks = listTodo.filter(item => item.id !== id);
        console.log(newWorks)
        if (newWorks !== undefined) {
            setListTodo(newWorks);
        }
    }

    // hoan thanh cong viec
    const finishItemTodo = (id) => {
        const newWork = listTodo.map(item => {
            return item.id === id ?
                { ...item, done: !item.done } : item;
        })
        console.log(newWork, id);
        if (newWork !== undefined) {
            setListTodo(newWork);
        }
    }

    return (
        <Row>
            <Col span={12} offset={6}>
                <AddTodo
                    change={changeNameTodo}
                    add={addTodo}
                    value={nameTodo}
                />
                <ListTodo
                    data={listTodo}
                    remove={removeItemTodo}
                    finish={finishItemTodo}
                />
            </Col>
        </Row>
    )
}