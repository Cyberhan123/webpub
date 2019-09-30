// import { createStore } from 'redux'
const { createStore } = Redux;
import type from "./actions/type";
import initState from './actions/states.js'
function reducer(state = initState, action) {
    switch (action.type) {
        case 'MOBILE':
            state.TYPE = action.TYPE;
            break;
        default:
            break;
    }
    return state;
}
let store = createStore(reducer);

export default store;