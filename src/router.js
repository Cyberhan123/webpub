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
import Db from './view/db/index.jsx'

import Message from './view/message/index.jsx'
import Watch from './view/watch/index.jsx'
import Safe from './view/safe/index.jsx'
import Plan from './view/plan/index.jsx'

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
    }, {
        path: "/ftp",
        component: Common,
        routes: [
            {
                path: "/ftp/index",
                component: Ftp
            },
        ]

    },
    {
        path: "/db",
        component: Common,
        routes: [
            {
                path: "/db/index",
                component: Db
            },
        ]

    }, {
        path: "/watch",
        component: Common,
        routes: [
            {
                path: "/watch/index",
                component: Watch
            },
        ]

    }, {
        path: "/safe",
        component: Common,
        routes: [
            {
                path: "/safe/index",
                component: Safe
            },
        ]

    }, {
        path: "/message",
        component: Common,
        routes: [
            {
                path: "/message/index",
                component: Message
            },
        ]
    }, {
        path: "/plan",
        component: Common,
        routes: [
            {
                path: "/plan/index",
                component: Plan
            },
        ]
    }
];

export default routes;
