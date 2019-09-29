import loginCss from './../css/login.css'
import LoginHeader from '../components/LoginHeader.jsx'



export default class login extends React.Component {
    render() {
        return (<div>
        <LoginHeader />
        <div className={loginCss.test}>
                <label htmlFor="userName">UserName</label>
                <input id="userName" type="text"/>
                <label htmlFor="passWord">PassWord</label>
                <input id="passWord" type="password"/>
                <button className={loginCss.login}>sign in</button>
        </div>
        </div>)
    }
}
