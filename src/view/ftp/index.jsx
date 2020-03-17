import style from "../../css/website/Website.less";
import button from "../../css/Button.less"
import Alert from "../../components/Alert.jsx"
import {getUserWebsite} from "../../api/fetchData";
import ftpStyle from '../../css/Ftp.less'

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
            dom: [
                <p key="1">
                    <label htmlFor="user">用户名:&nbsp;</label>
                    <input name="user" key={'username'} type="text"/>
                </p>,
                <p key="2">
                    <label htmlFor="pass">密码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input name="pass" key={'password'} type="password"/>
                </p>,
                <p key="3">
                    <label htmlFor="root">根目录:&nbsp;</label>
                    <input name="root" key={'root'} type="text"/>
                </p>
            ]
        });
    };

    editPort() {
        Alert.open({
                title: "修改FTP端口",
                dom: [
                    <input key={'editInput'} type="text" className={ftpStyle.changePort} placeholder="21"/>
                ]
            }
        );
    }

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
                    <div className={style['list-item-bg-active']}/>
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
                    <div className={style.button} onClick={this.open.bind(this)}>
                        <a>创建新的FTP</a>
                    </div>
                    <div className={style.button + " " + button["white-button"]} onClick={this.editPort.bind(this)}>
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
