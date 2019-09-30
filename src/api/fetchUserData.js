
import { POST } from './Ajax';
import HOST from './HOST';

// 用户登录
//http://rap2api.taobao.org/app/mock/232519/v1/webpub/
export let postUserInfo = function (data) {
    return POST(`${HOST}/user/login`, data)
}