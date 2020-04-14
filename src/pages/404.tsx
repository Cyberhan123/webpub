import React from 'react';
import { Link } from 'umi';
import styles from './notfound.less';

function NotFound() {
  return (
    <div
      style={{
        position: 'absolute',
        background: '#494949',
        height: '100vh',
        width: '100vw',
      }}
    >
      <div className={styles.head404} />
      <div className={styles.txtbg404}>
        <div className={styles.txtbox}>
          <p>对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>
          <p>
            <Link to="/">请点击此链接，返回首页</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

NotFound.title = '404-对不起！您访问的页面不存';

export default NotFound;
