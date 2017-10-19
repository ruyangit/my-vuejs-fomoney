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

router.beforeEach((to, from, next) => {
  // to 和 from 都是 路由信息对象
   // 设置 标题  
   document.title = to.meta.title || '复星金服';  
   // 统计代码  
   if (from.name) {  
     _hmt.push(['_trackPageview'  
       , '/#' + to.fullPath  
       , window.location.origin ]);  
   } else {  
     _hmt.push(['_trackPageview'  
         , '/#' + to.fullPath]);  
   }  
  next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
