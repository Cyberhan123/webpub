import style from './../../css/Website.less'
import { getUserWebsite } from '../../api/fetchUserData';
const { BrowserRouter, Link } = ReactRouterDOM;

class WebSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }
    async fetchWebsiteList() {
        const data = await getUserWebsite();
        this.setState({
            list: data.data
        })
    }
    componentWillMount() {
        this.fetchWebsiteList()
    }
    render() {
        let dom = [];
        console.log(this.state)
        this.state.list.map((value, index) => {
            dom.push(
                <li key={`list-${index}`}>
                    <div>
                       网站名：{value.name}
                    </div>
                    <div>
                        {value.desc}
                    </div>
                    <div>
                        最后发布时间：{value.time}
                    </div>
                </li>
            )
        })
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
                            {dom}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default WebSite;