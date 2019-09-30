import loginCss from './../css/mobilePhone/login/login.css'
import LoginHeader from '../components/LoginHeader.jsx'



export default class login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            msg:"这是一个消息",
            account:"",
            passWord:""
        }
        this.checkAccount = this.checkAccount.bind(this);
        this.checkPassWord = this.checkPassWord.bind(this);
        this.login = this.login.bind(this);
    }
    render() {
        return (<div>
        <LoginHeader />
        <div className={loginCss.container}>
                <label htmlFor="userName">UserName</label>
                <input id="userName"  onBlur={this.checkAccount} type="text"/>
                <label htmlFor="passWord">PassWord</label>
                <input id="passWord" onBlur={this.checkPassWord} type="password"/>
                <button className={loginCss.login} onClick={this.login}>sign in</button>
        </div>
        </div>)
    }
    checkAccount(){
        let account = event.target.value;
        let tellPhoneReg = /\d{11}/;
        let emailReg  = /[a-zA-Z0-9-_]{3,16}@[a-z0-9]{2,8}\.com/;
        let userNameReg = /[a-zA-Z0-9-_]{3,8}/
        if(tellPhoneReg.test(account) || emailReg.test(account) || userNameReg.test(account)){

        }else {
            alert("please check account format！");
        }
        this.setState({account: account});
    }
    checkPassWord(){
        let passWordReg = /[a-zA-Z0-9-_.]{6,16}/
        let passWord = event.target.value;
        if (passWordReg.test(passWord)){

        }else{
            alert("Please check password format!")
        }
        this.setState({passWord: passWord});
    }
    login(){
        let __this = this;
        let url = "http://rap2api.taobao.org/app/mock/232519/v1/webpub/user/login";
        let method = "POST";
        let xmlHttRequest = new XMLHttpRequest();
        xmlHttRequest.open(method,url);
        let userInfo = {
            username : this.state.account,
            password : this.state.passWord
        }
        console.log(userInfo)
        xmlHttRequest.setRequestHeader("Content-Type","application/json")
        xmlHttRequest.send(JSON.stringify(userInfo))
        xmlHttRequest.onreadystatechange = function () {
            console.log(xmlHttRequest)
            if (xmlHttRequest.readyState === 4 && xmlHttRequest.status === 200) {
                let resp = JSON.parse(xmlHttRequest.response);
                console.log(resp)
                if (resp.code === "200" && resp.state === "ok"){
                    __this.props.history.push('/home')
                }else{
                    alert("account or password is not incorrect！")
                }
            }
        }
    }
}
