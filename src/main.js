// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './vuex/store'
import App from './App'
import router from './router'
// 引入API文件
import api from './api/index.js'
// 引入utils文件
import utils from './utils/index.js'
// 将API绑定全局
Vue.prototype.$api = api
// 将utils绑定全局
Vue.prototype.$utils = utils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
