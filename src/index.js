// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './view/App.jsx';
import './css/reset.css';
import * as serviceWorker from './serviceWorker';
import { initScreen, isMobile } from "./common/common";
import store from "./redux";
const { Provider } = ReactRedux;
window.$store = store;
// 将action暂时存在这里
function type() {
    if (isMobile()) {
        const MOBILE = 'MOBILE';
        let dispatchTYPE = {
            type: MOBILE,
            TYPE: 'mobilePhone'
        };
        store.dispatch(dispatchTYPE);
    } else {
        const MOBILE = 'MOBILE';
        let dispatchTYPE = {
            type: MOBILE,
            TYPE: 'pc'
        };
        store.dispatch(dispatchTYPE);
    }
}
type();

if (store.getState().TYPE === 'pc') {
    import('./css/index.css')
} else if (store.getState().TYPE === 'mobilePhone') {
    import('./css/mobilePhone/index.css')
    initScreen();
}

ReactDOM.render(
        <App />
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// document.getElementById('root').innerHTML = "Hello React";
