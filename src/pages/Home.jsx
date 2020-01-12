import React, {useState, useEffect }from 'react';
import axios from 'axios';
import { Button, Form, Row, Col, List, Input, Icon } from 'antd';

// function Book(props) {
//     return <div>title : {props.title}</div>;
// }
function click (){

}


const Home = ({ history, token }) => {
    const [books, setBooks] = useState([]);
    const _bookTitle = React.createRef();
    const _bookId = React.createRef();

    function regClick() {
        const bookTitle = _bookTitle.current.input.value;
        const bookId = _bookId.current.input.value;
        axios.post('https://api.marktube.tv/v1/book', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: {
                bookTitle: bookTitle,
                bookId: bookId
            }
        })
        .then(res => {
            console.log(res);

        })
    }

    function logoutClick() {
        localStorage.clear();
        history.push("/");
    }

    useEffect(() => {
        axios.get('https://api.marktube.tv/v1/book', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => {
            console.log(res);

        })
    }, [token]);

    return (
        <div>
        <h1>Home</h1>
        <Form id="components-form-demo-normal-login">
            <Row gutter={16} type="flex" justify="center" align="middle"> 
                <Col span={4}>
                  <Form.Item>
                  <Input
                    prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="bookTitle"
                    ref={_bookTitle}
                    />
                  </Form.Item>
                </Col>
                <Col span={4}>
                  <Form.Item>
                  <Input
                    prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="bookId"
                    ref={_bookId}
                    />
                  </Form.Item>
                </Col>
                <Col span={2}>
                  <Form.Item>
                  <Button type="primary" onClick={regClick} loading={false} className="login-form-button">
                    Reg.
                  </Button>
                  </Form.Item>
                </Col>
                <Col span={2}>
                  <Form.Item>
                  <Button type="primary" onClick={click} loading={false} className="login-form-button">
                    Update
                  </Button>
                  </Form.Item>
                </Col>
                <Col span={2}>
                  <Form.Item>
                  <Button type="primary" onClick={logoutClick} loading={false} className="login-form-button">
                    Log out
                  </Button>
                  </Form.Item>
                </Col>
            </Row>
        </Form>    
        <List
            size="small"
            bordered
            dataSource={books}
            renderItem={book => <List.Item>{book.title}</List.Item>}
        />
        
        {/* {books.map(book => (
          <Book title={book.title} key={book.bookId} />
        ))} */}
      </div>
    );
};

export default Home;