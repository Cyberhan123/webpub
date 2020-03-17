import getNavList from '../api/fetchCommonData'
import style from './../css/NavBar.css';
import mStyle from '../css/mobilePhone/NavBar.css';
import Dropdown from '../components/Dropdown.jsx';

const {Link} = ReactRouterDOM;
export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: [],
            dropdownState: false,
        }
    }

    async fetchNavList() {
        let data = await getNavList();
        if (!localStorage.getItem('navList')) {
            localStorage.removeItem('navList');
            localStorage.setItem('navList', JSON.stringify(data))
        } else {
            let navList = JSON.parse(localStorage.getItem('navList'));
            //设置过期时间
            if (navList.Etag !== data.Etag) {
                localStorage.removeItem('navList');
                localStorage.setItem('navList', JSON.stringify(data))
            }
        }
    };

    changeDropdownState() {
        this.setState({
            dropdownState: !this.state.dropdownState,
        })
    }

    componentDidMount() {
        const __this = this;
        this.fetchNavList();
        //即使网络错误也可保存数据
        let navList = JSON.parse(localStorage.getItem('navList'));
        __this.setState({
            navList: navList.data
        })

    }

    render() {
        let navItems = [];
        let isPc = window.$store.getState().TYPE === "pc";
        this.state.navList.map((elem, index) => {
            navItems.push(<div key={`nav-${index}`} className={isPc ? style['nav-item'] : mStyle['nav-item']}><Link
                to={elem.link}>{elem.name}</Link></div>);
        });
        if (isPc) {
            return (
                <div className={style['nav-wraper']}>
                    <nav className={style.nav}>
                        <div className={style['nav-item']}>
                            <div className={style.logo}/>
                            devOPS自动运维
                        </div>
                        {navItems}
                        <div className={style["nav-item"]} onClick={this.changeDropdownState.bind(this)}>
                            <a>消息通知</a>
                            <Dropdown dropdownState={this.state.dropdownState}>
                                <li>11111111</li>
                                <li>11111111</li>
                                <li>11111111</li>
                            </Dropdown>
                        </div>
                        <div className={style["nav-item"]}>
                            头像
                        </div>
                    </nav>
                </div>

            );
        } else {
            return (
                <nav className={mStyle.nav}>
                    {this.props.children}
                </nav>
            );
        }

    }
}
