
const { BrowserRouter, Link } = ReactRouterDOM;
const Router = BrowserRouter;

import routes from '../router'
import RouteWithSubRoutes from "./../common/RouteWithSubRoutes.js";
import Navbar from './../components/NavBar.jsx';
import style from './../css/App.css';
import mStyle from './../css/m/App.css';

export default class App extends React.Component {

  render() {
    if (window.$store.getState().TYPE === 'pc') {
      return (
        <div className={style.App}>
          <Router>
            <Navbar />
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Router>
        </div>);
    } else {
      return (
        <div className={mStyle.App}>
          <Router>
            <Navbar/>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Router>
        </div>);
    }
  }
}
