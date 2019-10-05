
import getNavList from '../api/fetchCommonData'
import style from './../css/NavBar.css';
import mStyle from '../css/mobilePhone/NavBar.css';
const { Link } = ReactRouterDOM;
export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: []
        }
    }
    componentDidMount() {
        const __this = this
        async function fetchNavList() {
            let data = await getNavList();
            __this.setState({
                navList: data.data
            })
        };
        fetchNavList()
    }

    render() {
        let navItems = [];
        let isPc = window.$store.getState().TYPE === "pc"
        this.state.navList.map((elem, index) => {
            navItems.push(<div key={`nav-${index}`} className={isPc ? style['nav-item'] : mStyle['nav-item']}><Link to={elem.link}>{elem.name}</Link></div>);
        })
        if (isPc) {
            return (
                <div className={style['nav-wraper']}>
                    <nav className={style.nav}>
                        <div className={style['nav-item']}>
                            <div className={style.logo}></div>
                            devOPS自动运维
                    </div>
                        {navItems}
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
