import React from 'react';
import { List, Avatar } from 'antd';
import { createApi } from '@/swagger/api';
import Axios from 'axios';

const api = createApi();

export default class WebSiteIndex extends React.Component {
  state = {
    websiteList: [],
  };

  componentDidMount(): void {
    this.getWebSiteList();
  }

  async getWebSiteList() {
    let result = await api.webSiteController.$getSiteListUsingGET();
    console.log(result.data);
    this.setState({
      websiteList: result.data,
    });
  }

  render(): React.ReactNode {
    return (
      <div>
        <List
          itemLayout="horizontal"
          dataSource={this.state.websiteList}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                // @ts-ignore
                title={`网站名称：${item.name} `}
                // @ts-ignore
                description={
                  <>
                    <p>
                      <span>{`备注：${item.ps}`}</span>{' '}
                      <span>{`添加时间：${item.addtime}`}</span>
                    </p>
                    <p>{`服务器路径：${item.path}`}</p>
                  </>
                }
              />
            </List.Item>
          )}
        />
        ,
      </div>
    );
  }
}
