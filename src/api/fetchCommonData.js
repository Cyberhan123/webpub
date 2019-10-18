

import HOST from './HOST';
import {GET} from './Ajax';

// 获取顶栏列表
//http://rap2api.taobao.org/app/mock/232519/v1/webpub/navlist
let getNavList = function () {
    return  GET(`${HOST}/navlist`)
}

export default getNavList;