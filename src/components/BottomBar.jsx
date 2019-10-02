
import style from './../css/BottomBar.css'
export default class BottomBar extends React.Component {
    render() {
        return (
        <footer className={style.footer}>
            <div className={style.bg}></div>
            <div className={style['bottom-wraper']}>
            <p>© 2019 Cyberhan <span>devOPS 自动运维系统</span></p> 
            </div>
        </footer>
        );
    }
}
