// import Sandwiches from './view/Sandwiches.jsx';
// import Bus from './view/Bus.jsx';
// import Cart from './view/Cart.jsx';
import Home from './view/Home.jsx'
import Login from './view/Login.jsx'
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

    }
];

export default routes;
