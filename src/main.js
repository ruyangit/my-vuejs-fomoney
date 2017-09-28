// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VeeValidate from 'vee-validate'
import VideoPlayer from 'vue-video-player'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

Vue.use(VeeValidate)

Vue.use(VideoPlayer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
