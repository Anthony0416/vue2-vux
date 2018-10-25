// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import axios from 'axios2'
import { AlertPlugin, ToastPlugin } from 'vux'

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// 全局变量
Vue.prototype.axios = axios
