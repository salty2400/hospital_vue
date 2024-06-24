import router from "./router";
import Nprogress from 'nprogress';
import useUserStore from '@/store/modules/user';
import pinia from '@/store'
let userStore = useUserStore(pinia);

import "nprogress/nprogress.css"

Nprogress.configure({ showSpinner: false });

let whiteList = ["/home", '/hospital/register', '/hospital/detail', '/hospital/notice', '/hospital/close', '/hospital/search'];

router.beforeEach((to, from, next) => {
    Nprogress.start();
    document.title = `尚医通-${to.meta.title}`;
    let token = userStore.userInfo.token;
    if (token) {
        next();
    } else {
        if (whiteList.includes(to.path)) {
            next();
        } else {
            userStore.visiable = true;
            next({ path: '/home', query: { redirect: to.fullPath } })
        }
    }
});

router.afterEach((to, from) => {

    Nprogress.done();
})