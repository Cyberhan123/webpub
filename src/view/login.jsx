import loginCss from './../css/mobilePhone/login/login.css'
import LoginHeader from '../components/LoginHeader.jsx'



export default class login extends React.Component {
    constructor(){
        super()
        this.state = {
            msg:"这是一个消息",
            userInfo:""
        }
        this.checkUserInfo = this.checkUserInfo.bind(this);
        this.checkPassWord = this.checkPassWord.bind(this);
    }
    render() {
        return (<div>
        <LoginHeader />
        <div className={loginCss.container}>
                <label htmlFor="userName">UserName</label>
                <input id="userName"  onBlur={this.checkUserInfo} type="text"/>
                <label htmlFor="passWord">PassWord</label>
                <input id="passWord" onBlur={this.checkPassWord} type="password"/>
                <button className={loginCss.login}>sign in</button>
        </div>
        </div>)
    }
    checkUserInfo(){
        let account = event.target.value;
        let tellPhoneReg = /\d{11}/;
        let emailReg  = /[a-zA-Z0-9-_]{3,16}@[a-z0-9]{2,8}\.com/;
        let userNameReg = /[a-zA-Z0-9-_]{3,8}/
        if(tellPhoneReg.test(account) || emailReg.test(account) || userNameReg.test(account)){

        }else {
            alert("please check account format！");
        }
        // this.setState({userInfo: userInfo});
    }
    checkPassWord(){
        let passWordReg = /[a-zA-Z0-9-_.]{6,16}/
        let passWord = event.target.value;
        if (passWordReg.test(passWord)){

        }else{
            alert("Please check password format!")
        }
    }
}
