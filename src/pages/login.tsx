import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.less';
import axios from 'axios';

export default class Login extends React.Component {
  async getAccessToken(_values: any) {
    axios({
      method: 'post',
      headers: {
        Authorization: 'Basic QXBpQm9vdDpBcGlCb290U2VjcmV0',
      },
      url: `http://localhost:9000/oauth/token?grant_type=password&username=${_values.username}&password=${_values.password}`,
    })
      .then(data => {
        console.log(data);
        message.success('登录成功，正在为您跳转...', 1);
        // @ts-ignore
        this.props.history.push('/');
      })
      .catch(error => {
        message.error('用户密码错误，或者账户不存在', 3);
      });
  }

  onFinish = (values: any) => {
    this.getAccessToken(values);
    console.log('Received values of form: ', values);
  };

  render(): React.ReactNode {
    return (
      <div className={styles.login}>
        <h1>DevOps自动运维系统</h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入你的用户名!' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入你的密码!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              忘记密码
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            Or <a href="">注册</a>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
