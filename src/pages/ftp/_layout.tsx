import React from 'react';
import styles from './_layout.less';

class WebSite extends React.Component {
  state = {
    title: '',
  };

  async fetchWebsiteList() {}

  componentWillMount() {}

  render() {
    return (
      <div className={styles['website-wraper']}>
        <div className={styles.header}>
          <div className={styles['header-bg']}></div>
          <h1>我的FTP</h1>
        </div>
        <div className={styles.main}>{this.props.children}</div>
      </div>
    );
  }
}

export default WebSite;
