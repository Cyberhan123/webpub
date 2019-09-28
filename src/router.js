import Sandwiches from './view/Sandwiches.jsx';
import Bus from './view/Bus.jsx';
import Cart from './view/Cart.jsx';
import Tacos from './view/Tacos.jsx';
import Login from './view/login.jsx';
const routes = [
    {
        path: "/sandwiches",
        component: Sandwiches
    },{
        path: "/tacos",
        component: Tacos,
        routes: [
            {
                path: "/tacos/bus",
                component: Bus
            },
            {
                path: "/tacos/cart",
                component: Cart
            }
        ]
    },{
        path:"/login",
        component:Login

    }
];

export default routes;
