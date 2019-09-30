import style from './../css/NavBar.css';
import mStyle from '../css/mobilePhone/NavBar.css';
export default class NavBar extends React.Component {
    render() {
        if(window.$store.getState().TYPE==="pc"){
            return (
                <nav className={style.nav}>
                    <div className={style.weclome + style.nav}>
                        欢迎
                    </div>
                    <div>
                        {this.props.children}
                    </div>
                </nav>
            );
        }else{
            return (
                <nav className={mStyle.nav}>
                        {this.props.children}
                </nav>
            );
        }

    }
}
