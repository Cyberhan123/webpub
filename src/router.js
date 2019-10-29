// import Sandwiches from './view/Sandwiches.jsx';
// import Bus from './view/Bus.jsx';
// import Cart from './view/Cart.jsx';
import Home from './view/Home.jsx'
import Login from './view/Login.jsx'
import Register from "./view/register.jsx"
import Website from './view/website/index.jsx'
import Showbuild from './view/website/ShowBuild.jsx'
import Common from './components/Common.jsx'
import Detail from './view/website/Detail.jsx'
import NotFound from './view/NotFound.jsx'
import Ftp from './view/ftp/index.jsx'
const routes = [
    {
        path: "/home",
        component: Home,
        index: true
    }, {
        path: "/login",
        component: Login

    }, {
        path: "/register",
        component: Register
    }, {
        path: "/website",
        component: Common,
        routes: [
            {
                path: "/website/index",
                component: Website
            }, {
                path: "/website/showbuild",
                component: Showbuild
            }
        ]
    }, {
        path: "/detail/website",
        component: Detail
    },{

        path:"/ftp/index",
        component:Ftp
    }
    // {
    //     path: "*",
    //     component: NotFound
    // }
];

export default routes;
