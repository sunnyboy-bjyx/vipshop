import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './assets/js/router.js'
import axios from 'axios'
import './assets/iconfont/iconfont.css'
Vue.prototype.$http=axios
import css from './assets/css/cssreset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
import '../node_modules/swiper/dist/css/swiper.css'

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
