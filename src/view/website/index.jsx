import style from './../../css/Website.css'
const { BrowserRouter, Link } = ReactRouterDOM;

class WebSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className={style['website-wraper']}>
                <div className={style.header}>
                    <div className={style["header-bg"]}></div>
                    <h1>我的站点</h1>
                </div>
                <div className={style.main}>
                    <div className={style.nav}>
                        <input type="text" placeholder="搜索我的站点" />
                        <div className={style.button}>
                            <Link to="/website/showbuild">创建新站点</Link>
                        </div>
                    </div>
                    <div className={style['list-wraper']}>
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebSite;