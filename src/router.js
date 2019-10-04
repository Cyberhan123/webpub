// import Sandwiches from './view/Sandwiches.jsx';
// import Bus from './view/Bus.jsx';
// import Cart from './view/Cart.jsx';
import Home from './view/Home.jsx'
import Login from './view/Login.jsx'
import Register from "./view/register.jsx";
import Website from './view/website/index.jsx'
import Showbuild from './view/website/show.jsx'
const routes = [
    // {
    //     patch: "/",
    //     to: "/home"
    // },
    {
        path: "/home",
        component: Home,
    }, {
        path: "/login",
        component: Login

    },{
        path:"/register",
        component:Register
    }, {
        path: "/website/index",
        component: Website
    },{
        path:"/website/showbuild",
        component:Showbuild
    }
];

export default routes;
