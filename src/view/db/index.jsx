import style from "../../css/website/Website.less";
import button from "../../css/Button.less"
import Alert from "../../components/Alert.jsx";
import ftpStyle from "../../css/Ftp.less";
import {getUserWebsite} from "../../api/fetchData";
const {Link} = ReactRouterDOM;
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
    componentWillMount() {
        window.$store.dispatch({
            type: "changeWebsiteTitle",
            website: {
                title: '我的数据库'
            }
        })
        this.fetchWebsiteList()
    }

    openRoot() {
        Alert.open({
            title: "修改数据库密码",
            dom: [
                <input key={'editInput'} type="text" className={ftpStyle.changePort}/>
            ]
        });
    };

    openDb() {
        Alert.open({
            title: "添加数据库",
            dom: [
                <p key="0">
                    <label htmlFor="user">数据库名:&nbsp;</label>
                    <input name="user" key={'username'} type="text"/>
                </p>,
                <p key="1">
                    <label htmlFor="user">用户名:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input name="user" key={'username'} type="text"/>
                </p>,
                <p key="2">
                    <label htmlFor="pass">密码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input name="pass" key={'password'} type="password"/>
                </p>,
                <p key="3">
                    <label htmlFor="root">访问权限:&nbsp;</label>
                    <input name="root" key={'root'} type="text"/>
                </p>
            ]
        });
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
                    <div className={`${style.button} ${button["white-button"]}`} onClick={this.openDb.bind(this)}>
                        <a>添加数据库</a>
                    </div>
                    <div className={`${style.button} ${button["white-button"]}`} onClick={this.openRoot.bind(this)}>
                        <a>root密码</a>
                    </div>
                    <div className={style.button}>
                        <a>phpMyadmin</a>
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
