import MobileLoginHeader from './../css/mobilePhone/login/loginHeader.css'
import loginHeader from './../css/loginHeader.css'
export default class LoginHeader extends React.Component {
    render() {
        if (window.$store.getState().TYPE === 'pc') {
            return (<div>
                <div className={loginHeader.loginHeader}/>
            </div>)
        } else {
            return (<div>
                <div className={MobileLoginHeader.loginHeader}/>
            </div>)
        }
    }
}
