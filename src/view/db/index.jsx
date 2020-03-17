import style from "../../css/website/Website.less";
import button from "../../css/Button.less"
import Alert from "../../components/Alert.jsx";
const {Link} = ReactRouterDOM;
export default class Ftp extends React.Component {
    componentWillMount() {
        window.$store.dispatch({
            type: "changeWebsiteTitle",
            website: {
                title: '我的数据库'
            }
        })
        // this.fetchWebsiteList()
    }

    openRoot() {
        Alert.open({
            title: "修改数据库密码",
        });
    };

    openDb() {
        Alert.open({
            title: "添加数据库",
        });
    }

    render() {
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
                        {/*{dom}*/}
                    </ul>
                </div>
            </div>
        );
    }
}
