// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import Vuex from 'vuex';
import store from '@/store/login.js';


//mock.js
//import Mock from 'mockjs';

//axios
import axios from 'axios';

// index.scss
import '@/styles/index.scss';


// request 封装axios;
import http from '@/servers/request.js';


// //调用
// import VueResource from 'vue-resource';

// Vue.use(VueResource);

Vue.use(store);
Vue.use(Vuex);
Vue.use(Vant);


Vue.config.productionTip = false
Vue.prototype.http = http;
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
