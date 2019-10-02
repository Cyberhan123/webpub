
import { POST, GET } from './Ajax';
import HOST from './HOST';

// 用户登录
//http://rap2api.taobao.org/app/mock/232519/v1/webpub/
let postUserInfo = function (data) {
    return POST(`${HOST}/user/login`, data)
}
//获取用户网站列表
//http://rap2api.taobao.org/app/mock/232519/v1/webpub/website/list

let getUserWebsite = function () {
    return GET(`${HOST}/website/list`)
}
export { getUserWebsite, postUserInfo }