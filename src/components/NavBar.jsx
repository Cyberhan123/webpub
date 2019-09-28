import style from './../css/NavBar.css'

export default class NavBar extends React.Component {
    render() {
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
    }
}