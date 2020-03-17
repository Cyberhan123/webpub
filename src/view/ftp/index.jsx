import style from "../../css/website/Website.less";
import button from "../../css/Button.less"
import Alert from "../../components/Alert.jsx"
import {getUserWebsite} from "../../api/fetchData";

export default class Ftp extends React.Component {
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

    open() {
        Alert.open({
            title: "添加FTP账户",
        });
    };

    componentWillMount() {
        window.$store.dispatch({
            type: "changeWebsiteTitle",
            website: {
                title: '我的FTP'
            }
        });
        this.fetchWebsiteList()
    }

    render() {
        let dom = [];
        this.state.list.map((value, index) => {
            dom.push(
                <li key={`list-${index}`} className={style['list-item']}>
                    <div className={style['list-item-bg-active']}></div>
                    <div className={style['website-name']}>
                        <h3>用户名：{value.name}</h3>
                    </div>
                    {/*<div className={style['website-desc']}>*/}
                    {/*{value.desc}*/}
                    {/*</div>*/}
                    <div className={style['website-time']}>
                        密码：{value.time}
                    </div>
                    {/*<div className={style.arrow}>*/}
                    {/*</div>*/}
                </li>
            )
        });
        return (
            <div>
                <div className={style.nav}>
                    <div className={style.button}>
                        <a>创建新的FTP</a>
                    </div>
                    <div className={style.button + " " + button["white-button"]} onClick={this.open.bind(this)}>
                        <a>修改FTP端口</a>
                    </div>
                </div>
                <div className={style['list-wraper']}>
                    <ul>
                        {dom}
                    </ul>
                </div>
            </div>
        );
    }
}
