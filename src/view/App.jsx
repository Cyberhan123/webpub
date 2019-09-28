
const { BrowserRouter, Link } = ReactRouterDOM;
const Router = BrowserRouter;
import getNavList from "./../api/HomeApi.js";
import routes from '../router'
import RouteWithSubRoutes from "./../common/RouteWithSubRoutes.js";
import Navbar from './../components/NavBar.jsx';
import style from './../css/App.css';
import { get } from "http";

export default class App extends React.Component {
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
      data = JSON.parse(data).data
      __this.setState({
        navList: data
      })
    };
    fetchNavList()
  }

  render() {
    let navItems = [];
    this.state.navList.map((elem, index) => {
      navItems.push(<Link to="/" key={`nav-${index}`}>{elem.name}</Link>);
    })
    return (
      <div className={style.App}>
        <Router>
          <Navbar>
            <div>
              {navItems}
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
