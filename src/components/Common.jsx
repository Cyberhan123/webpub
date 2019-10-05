import style from './../css/Common.less';
import RouteWithSubRoutes from '../common/RouteWithSubRoutes';
// const { BrowserRouter, Link } = ReactRouterDOM;
class Common extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        console.log(this.props);
        return (
            <div className={style['website-wraper']}>
                <div className={style.header}>
                    <div className={style["header-bg"]}></div>
                    <h1>我的站点</h1>
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