import MobileLoginCss from './../css/mobilePhone/login/login.css'
import LoginCss from './../css/login.css'
import LoginHeader from '../components/LoginHeader.jsx'
import { postUserInfo } from '../api/fetchUserData'

export default class login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: "这是一个消息",
            account: "",
            passWord: "",
        }

        this.checkAccount = this.checkAccount.bind(this);
        this.checkPassWord = this.checkPassWord.bind(this);
        this.login = this.login.bind(this);
    }
    render() {
        if (window.$store.getState().TYPE === 'pc'){
            return (
                <section>
                    <div className={LoginCss.BG}></div>
                    <LoginHeader />
                    <div className={LoginCss.container}>
                        <label htmlFor="userName">用户名</label>
                        <input className={LoginCss['user-info']} id="userName"  type="text" />
                        <label htmlFor="passWord">密&nbsp;&nbsp;&nbsp;&nbsp;码</label>
                        <input id="passWord" className={LoginCss['user-info']} type="password" />
                        <a href="" className={LoginCss.btn} onClick={this.login}>登 录</a>
                    </div>
                    <div className={LoginCss['create-account']}>新用户？<a href="">创建账号</a> </div>
                </section>)
        }else{
            return (<div>
                <LoginHeader />
                <div className={MobileLoginCss.container}>
                    <label htmlFor="userName">UserName</label>
                    <input id="userName" onBlur={this.checkAccount} type="text" />
                    <label htmlFor="passWord">PassWord</label>
                    <input id="passWord" onBlur={this.checkPassWord} type="password" />
                    <button className={MobileLoginCss.login} onClick={this.login}>登  录</button>
                </div>
            </div>)
        }

    }
    checkAccount() {
        let account = event.target.value;
        let tellPhoneReg = /^1[3-9]\d{9}/;
        let emailReg = /[a-zA-Z0-9-_]{3,16}@[a-z0-9]{2,8}\./;
        let userNameReg = /[a-zA-Z0-9-_]/
        if (tellPhoneReg.test(account) || emailReg.test(account) || userNameReg.test(account)) {

        } else {
            alert("请输入正确的账号哦~");
        }
        this.setState({ account: account });
    }
    checkPassWord() {
        let passWordReg = /[a-zA-Z0-9-_]{6,16}/
        // let passWordReg = /[a-z]+[A-Z]+[0-9]+[-_]{6,16}/
        let passWord = event.target.value;
        if (passWordReg.test(passWord)) {

        } else {
            alert("请输入符合要求的密码，密码要求6到16位，必须包含数字英文大小写。")
        }
        this.setState({ passWord: passWord });
    }
    async login() {
        const userInfo = {
            username: this.state.account,
            password: this.state.passWord
        }
        const resp = await postUserInfo(userInfo)
        if (resp.code === "200" && resp.state === "ok") {
            this.props.history.push('/home')
        } else {
            alert("账号或者密码错啦，再试试吧~")
        }
    }
}
