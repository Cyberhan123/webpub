import RegisterCss from './../css/register.css'
import LoginCss from './../css/login.css'

export default class Register extends React.Component {
    render() {
        return (<section>
            <div className={LoginCss.BG} />
            <div className={LoginCss.container+" "+RegisterCss.container}>
                <div>
                    <label htmlFor="userName">用户名</label>
                    <input id="userName" className={LoginCss['user-info']} type="text"/>
                    <label htmlFor="email">邮箱</label>
                    <input id="email" className={LoginCss['user-info']} type="text"/>
                    <label htmlFor="passWord">密码</label>
                    <input id="passWord" className={LoginCss['user-info']} type="text"/>
                    <a href="" className={LoginCss.btn}>注册</a>
                </div>
            </div>
        </section>)
    }
}
