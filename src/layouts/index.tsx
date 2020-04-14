import React from 'react';
import styles from './index.css';
import { Layout, Menu, BackTop } from 'antd';
import { Link } from 'umi';
import { createApi } from '@/swagger/api';
import Axios from 'axios';
import cors from '@/swagger/cors';

const { Header, Content, Footer } = Layout;
const api = createApi(cors);
export default class BasicLayOut extends React.Component {
  state = {
    navlist: [],
  };

  componentDidMount(): void {
    this.getNavList();
  }

  async getNavList() {
    let navlist = await api.homeController.$navListUsingGET();
    this.setState({ navlist: navlist });
  }

  render(): React.ReactNode {
    // @ts-ignore
    if (
      this.props.location.pathname === '/404' ||
      this.props.location.pathname === '/login'
    ) {
      return <div>{this.props.children}</div>;
    }
    return (
      <div className={styles.warrper}>
        <div className={styles.normal}>
          <Layout>
            <Header style={{ background: '#000' }}>
              <div style={{ margin: '0 auto', width: '700px' }}>
                <span
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: '17px',
                  }}
                >
                  DevOPS
                </span>
                <Menu
                  style={{
                    background: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: '17px',
                    display: 'inline-block',
                  }}
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['2']}
                >
                  {this.state.navlist.map((item, index) => {
                    // @ts-ignore
                    return (
                      <Menu.Item key={`nav-${index}`}>
                        <Link to={item.link}>{item.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </Menu>
              </div>
            </Header>
            <Content>{this.props.children}</Content>
            <Footer className={styles.footer}>
              <div className={styles.bottom}>
                <p>
                  © 2020 Cyberhan <span>devOPS 自动运维系统</span>
                </p>
              </div>
            </Footer>
          </Layout>
          <BackTop />
        </div>
      </div>
    );
  }
}
