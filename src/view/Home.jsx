
const { BrowserRouter, Link } = ReactRouterDOM;
const Router = BrowserRouter;
import style from './../css/Home.css';
import routes from '../router'
import RouteWithSubRoutes from "./../common/RouteWithSubRoutes.js";
import Navbar from './../components/NavBar.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div className={style['home-wraper']}>
                <section className={style.hero}>
                    <div className={style['hero-bg']}></div>
                    <div className={style['title-wraper']}>
                        <h1>一次开发，全流程适用。<p>从重复的工作中解放，早点下班！</p></h1>
                        <h3>devOPS自动运维系统可以快速构建项目<p>在喝咖啡之间完成所有的重复运维工作</p></h3>
                    </div>
                    <div className={style['anime-wraper']}>
                        <div className={style.person}>
                        </div>
                    </div>
                </section>
                <section className={style['core-wraper']}>
                    <h1>部署你的网站在分秒之间</h1>
                    <div className={style.core}>
                        <div className={style.setp}>
                            <h3>连 接 你 的 远 程 GIT 仓 库</h3>
                            <div className={style['button-list']}>
                                <div className={style.button}>
                                    使用GITHUB
                                </div>
                                <div className={style.button}>
                                    使用GITLAB
                                </div>
                            </div>

                        </div>
                        <div className={style.setp}>
                            <h3>添 加 你 的 网 站 设 置</h3>
                            <div className={style['button-list']}>
                                <div className={style.button}>
                                    选择分支
                                </div>
                                <div className={style.button}>
                                    输入打包命令
                                </div>
                                <div className={style.button}>
                                    选择打包后输出的目录
                                </div>
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
            </div>
        );
    }
}
