import style from './../css/Common.less';
import RouteWithSubRoutes from '../common/RouteWithSubRoutes';
// const { BrowserRouter, Link } = ReactRouterDOM;
class Common extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }
    componentDidMount() {
        this.setState({
            title: window.$store.getState().website.title
        })
    }
    render() {
        return (
            <div className={style['website-wraper']}>
                <div className={style.header}>
                    <div className={style["header-bg"]}></div>
                    <h1>{this.state.title}</h1>
                </div>
                <div className={style.main}>
                    {this.props.routes.map((route, i) => (
                        <RouteWithSubRoutes {...route} key={i}></RouteWithSubRoutes>
                    ))}
                </div>
            </div>
        );
    }
}

export default Common;