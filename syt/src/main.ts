
import { createApp } from 'vue'

import '@/style/reset.scss'

import App from '@/App.vue'

import HospitalTop from '@/components/hospital_top/index.vue';
import HosiptalBottom from '@/components/hospital_bottom/index.vue';
import Login from '@/components/login/index.vue';

import router from '@/router';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import pinia from '@/store'

const app = createApp(App);
import Visitor from '@/components/visitor/visitor.vue';
app.component('HospitalTop', HospitalTop);
app.component('HosiptalBottom', HosiptalBottom);
app.component('Login',Login);

app.component('Visitor',Visitor);

app.use(router);

app.use(ElementPlus, {
    locale: zhCn,
});

app.use(pinia);

import './permisstion'

app.mount('#app');
