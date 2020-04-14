// @ts-ignore
import React from 'react';
import style from './index.less';
import bg from './../assets/img/bg.png';

export default class Index extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <section className={style.hero}>
          <div className={style['hero-bg']}>
            <svg viewBox="0 0 1440 120" className={style.wave}>
              <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z" />
            </svg>
          </div>
          <div className={style['title-wraper']}>
            <h1>
              一次开发，全流程适用。<p>从重复的工作中解放，早点下班！</p>
            </h1>
            <h3>
              devOPS自动运维系统可以快速构建项目
              <p>在喝咖啡之间完成所有的重复运维工作</p>
            </h3>
          </div>
          <div className={style['anime-wraper']}>
            <div className={style.person}></div>
          </div>
        </section>
        <section className={style['core-wraper']}>
          <h1>部署你的网站在分秒之间</h1>
          <div className={style.core}>
            <div className={style.setp}>
              <h3>连 接 你 的 远 程 GIT 仓 库</h3>
              <div className={style['button-list']}>
                <div className={style.button}>使用GITHUB</div>
                <div className={style.button}>使用GITLAB</div>
              </div>
            </div>
            <div className={style.setp}>
              <h3>添 加 你 的 网 站 设 置</h3>
              <div className={style['button-list']}>
                <div className={style.button}>选择分支</div>
                <div className={style.button}>输入打包命令</div>
                <div className={style.button}>选择打包后输出的目录</div>
              </div>
            </div>
            <div className={style.setp}>
              <h3>部 署 你 的 网 站 应 用</h3>
              <div className={style['button-list']}>
                <div className={style.button}>灰度部署</div>
                <div className={style.button}>正式发布</div>
                <div className={style.button}>资源分发CDN</div>
              </div>
            </div>
          </div>
        </section>
        <section className={style.integration}>
          <div className={style['integration-bg']}>
            <img src={bg} alt="" />
          </div>
          <div className={style['integration-text']}>
            <h1>集成</h1>
            <h5>
              将常用的运维指令集成为运维工具<p>轻松实现一键执行</p>
              可自行扩充脚本<p></p>
            </h5>
          </div>
          <div className={style['intergration-show']}></div>
        </section>
        <section className={style.watch}>
          <div className={style['watch-text']}>
            <h1>监控</h1>
            <h5>
              将常用轻松监控服务器各项性能指标<p>可视化使得管理更简单</p>
            </h5>
          </div>
          <div className={style['watch-show']}></div>
        </section>
      </div>
    );
  }
}
