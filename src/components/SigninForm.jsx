import React, {useState} from 'react';
import { Row, Col, Form, Icon, Input, Button, message } from 'antd';
import './SigninForm.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom';


function SigninForm({history}) {
  const _password = React.createRef();
  const _email = React.createRef();
  const [isLoding , setIsLoading] = useState(false);

  async function click() {
      const email = _email.current.input.value;
      const password = _password.current.input.value;

      try {
        setIsLoading(true);

        const res = await axios
        .post('https://api.marktube.tv/v1/me', {
          email,
          password,
        });
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
        history.push("/");

      } catch (error) {
        console.log(error);
        setIsLoading(false);
        // error feedback
        message.error("계정이 일치하지 않습니다." + error.response.data.error);
        

      }
      

  }
  
  return (
    <Col span={12}>
          <Form id="components-form-demo-normal-login">
            <Row type="flex" justify="center" align="middle"> 
              <Col span={21}>
                  <Form.Item>
                    <label className="login-form-subTitle"> 
                      LOG IN. START SEARCHING.
                    </label>
                  </Form.Item>
                </Col>
            </Row>
            <Row>
              <Col span={21}>
                <Form.Item label="Email">
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Email"
                    ref={_email}
                />
                </Form.Item>
                <Form.Item label="Password">
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    ref={_password}
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" onClick={click} loading={isLoding} className="login-form-button">
                    SIGN IN
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={15}>
                <Form.Item>
                  <label>
                    Need to create an account?
                  </label>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Button htmlType="submit" className="login-form-button">
                    SIGN UP
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={15}>
                <Form.Item>
                  <label>
                    Forgot your password?
                  </label>
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item>
                  <Button htmlType="submit" className="login-form-button">
                    RECOVERY
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
        
  );
}

export default withRouter(SigninForm);