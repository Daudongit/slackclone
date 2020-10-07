
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

// window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });

















import Vue from 'vue'
// import store from '~/store'
// import i18n from '~/plugins/i18n'
import router from './router'
import App from './components/App'

// import './plugins'
// import '~/components'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
//   i18n,
//   store,
  router,
  ...App
})
