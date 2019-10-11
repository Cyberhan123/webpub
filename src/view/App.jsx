
const { BrowserRouter, Link,IndexRouter } = ReactRouterDOM;
const Router = BrowserRouter;
import Bottombar from './../components/BottomBar.jsx'
import routes from '../router'
import RouteWithSubRoutes from "./../common/RouteWithSubRoutes.js";
import Navbar from './../components/NavBar.jsx';
import style from './../css/App.css';
import mStyle from '../css/mobilePhone/App.css';

export default class App extends React.Component {

  render() {
    if (window.$store.getState().TYPE === 'pc') {
      return (
        <div className={style.App}>
          <Router>
            <Navbar/>
            <main>

            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            </main>
            <Bottombar/>
          </Router>
        </div>);
    } else {
      return (
        <div className={mStyle.App}>
          <Router>
            <Navbar/>
            <main>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            </main>
          </Router>
        </div>);
    }
  }
}
