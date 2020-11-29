// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 全局引入jq
import $ from 'jquery'
/* eslint-disable no-new */
Vue.prototype.$ = $
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
