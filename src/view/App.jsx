
const { BrowserRouter, Link } = ReactRouterDOM;
const Router = BrowserRouter;
import routes from '../router'
import RouteWithSubRoutes from "./../common/RouteWithSubRoutes.js";
import Navbar from './../components/NavBar.jsx';
import style from './../css/App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className={style.App}>
        <Router>
          <Navbar>
            <div>
              <Link to="/">首页</Link>
              <Link to="#">网站</Link>
              <Link to="/sandwiches">FTP</Link>
              <Link to="/">数据库</Link>
              <Link to="/sandwiches">监控</Link>
              <Link to="/sandwiches">安全</Link>
              <Link to="/">文件</Link>
              <Link to="/sandwiches">计划任务</Link>
              <Link to="/sandwiches">消息统治</Link>
            </div>
          </Navbar>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Router>
      </div>
    );
  }
}
