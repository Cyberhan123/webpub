// import { createStore } from 'redux'
const { createStore } = Redux;
import type from "./actions/type";
import initState from './actions/states.js'
function reducer(state = initState, action) {
    switch (action.type) {
        case 'MOBILE':
            state.TYPE = action.TYPE;
            break;
        case 'changeWebsiteTitle':
            state.website.title = action.website.title;
        default:
            break;
    }
    return state;
}
let store = createStore(reducer);

export default store;