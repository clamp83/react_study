import React from 'react';
import { DemoBox, Row, Col, Form, Icon, Input, Button, Checkbox } from 'antd';
import './SigninForm.css';


export default function SigninForm() {
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
                />
                </Form.Item>
                <Form.Item label="Password">
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
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
