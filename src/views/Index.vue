<template>
  <div>
    <z-header></z-header>
    <div class="container index-container">
      <!--banner轮播-->
      <div class="banner-box">
        <!-- Swiper -->
        <div class="swiper-container">
          <!--<div class="swiper-wrapper">-->
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-slide">
              <img src="/static/images/index_banner01.jpg" alt="健康快乐易金融">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="/static/images/index_banner02.jpg" alt="安全高效便捷">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="/static/images/index_banner03.jpg" alt="高成长高价值">
            </swiper-slide>
            <swiper-slide class="swiper-slide">
              <img src="/static/images/index_banner04.jpg" alt="让科技服务金融">
            </swiper-slide>
            <!-- Add Pagination -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <!--</div>-->
        </div>
      </div>
      <!--3个功能块-->
      <div class="function-box">
        <ul class="clearfix">
          <li @click="zDetarget('al1')">
            <a class="load-serve" href="javascript:;">
              <img src="/static/images/icon_daikuan.png" alt="贷款业务">
              <h3>贷款业务</h3>
            </a>
          </li>
          <li @click="zDetarget('al2')">
            <a class="money-manage ml20" href="javascript:;">
              <img src="/static/images/icon_caifu.png" alt="财富管理">
              <h3>财富管理</h3>
            </a>
          </li>
          <li @click="zDetarget('al3')">
            <a class="finance-tech ml20 " href="javascript:;">
              <img src="/static/images/icon_keji.png" alt="金融科技">
              <h3>金融科技</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <z-footer></z-footer>
  
    <!--贷款业务弹框-->
    <div class="index-modal-box modal-load" v-show="al1">
      <h2>贷款业务</h2>
      <p>为了帮助个人及企业用户合理规划成本并且努力实现资料利用最大化，复星金服贷款业务以消费金融及供应链金融为两大主线。消费金融以健康，旅游，时尚消费，文化，居家，出行为场景，满足年轻用户品质生活的一站式需求；供应链金融是以产业为依托，深耕产业链，为其上下游企业提供流动性支持以及综合金融服务。</p>
      <img class="modal-img01" src="/static/images/modal_img01.png" alt="" >
      <div class="modal-btn-box clearfix">
        <a class="fl" href="personal_load.html">消费金融 >></a>
        <a class="fr" href="company_load.html">供应链金融 >></a>
      </div>
      <img class="modal-close" src="/static/images/icon_close.png" alt="关闭"  @click="zDetarget('al1')">
    </div>
    <!--财富管理弹框-->
    <div class="index-modal-box modal-money" v-show="al2">
      <h2>财富管理</h2>
      <div class="bg-circle">
        财富管理是一种财富的传承，它不仅是物质的传承，也是一种精神的传承
      </div>
      <p>财富管理的基础是建立在对人和对文化的认同上的信任，复星金服以复星文化和投资理念为基础，以客户的需求为核心，综合考虑风险、收益、流动性、可行性等因素，借助保险、信托、离岸公司、证券化、结构性产品等金融工具，设计系统的、有效合理的整体财富架构。</p>
      <img class="modal-close" src="/static/images/icon_close.png" alt="关闭"  @click="zDetarget('al2')">
    </div>
    <!--金融科技弹框-->
    <div class="index-modal-box modal-finance" v-show="al3">
      <h2>金融科技</h2>
      <p>作为复星金服高科技内核，金融科技事业部坚持以科技引领金融，打造“移动支付”、“大数据征信”、“新兴技术”三大核心，携手各业务板块不断开拓创新，探索互联网金融新业务模式。</p>
      <img class="modal-img03" src="/static/images/modal_img03.png" alt="" >
      <div class="modal-btn-box">
        <a href="company_finance.html">体验金融科技服务 >></a>
      </div>
      <img class="modal-close" src="/static/images/icon_close.png" alt="关闭"  @click="zDetarget('al3')">
    </div>
  
  </div>
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'index-container',
  data() {
    return {
      swiperOption: {
        //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
        notNextTick: true,
        autoplay: 3000,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法  
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }
      },
      al1:false,
      al2:false,
      al3:false,
    }
  },
  components: {
    zHeader,
    zFooter,
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    // you can use current swiper instance object to do something(swiper methods)
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    // console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(0, 1000, false)
  },
  methods:{
    zDetarget(al){
      if(al==="al1"){
        this.al1 = !this.al1
      }else if(al==="al2"){
        this.al2 = !this.al2
      }else if(al==="al3"){
        this.al3 = !this.al3
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.index-container {
  padding: 0.8rem 0 0 0;
}








/*轮播*/

.index-container .banner-box .swiper-container .swiper-slide img {
  width: 7.5rem;
  height: 7.8rem;
}

.index-container .banner-box .swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 3px;
}

.index-container .banner-box .swiper-container-horizontal>.swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 5px;
  width: 1.7rem;
  left: 5.8rem;
}

.index-container .banner-box .swiper-pagination-bullet {
  background: none;
  border: 1px solid #c9a96e;
  opacity: 1;
}

.index-container .banner-box .swiper-pagination-bullet-active {
  background: #c9a96e;
}








/*3个功能块*/

.index-container .function-box {
  padding: 0.3rem;
}

.index-container .function-box li {
  float: left;
}

.index-container .function-box li a {
  display: block;
  width: 2.16rem;
  height: 1.7rem;
  background-color: #c9a96e;
  text-align: center;
  color: #fff;
  font-size: 0.2rem;
}

.index-container .function-box li a img {
  width: 0.6rem;
  height: 0.6rem;
  margin-top: 0.35rem;
}








/*弹框*/

.index-modal-box {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(12, 17, 23, .9);
  z-index: 90;
  text-align: center;
  color: #d3b4a0;
  padding: 0 0.3rem;
  font-size: 0.24rem;
}

.index-modal-box h2 {
  line-height: 1;
  padding: 2.8rem 0 0.44rem;
  font-size: 0.42rem;
}

.index-modal-box p {
  font-size: 0.2rem;
  padding: 0 0.18rem;
  line-height: 1.5;
  width: 6.9rem;
  margin: 0 auto;
  text-align: left;
}

.modal-load .modal-img01 {
  width: 1.8rem;
  height: 1.16rem;
  margin: 1.2rem 0 0.8rem;
}

.index-modal-box .modal-btn-box {
  padding: 0 0.18rem;
  width: 6.9rem;
  margin: 0 auto;
}

.index-modal-box .modal-btn-box a {
  width: 3.16rem;
  height: 0.72rem;
  background-color: #c9a96e;
  text-align: center;
  line-height: 0.72rem;
  display: block;
  color: #fff;
}

.index-modal-box .modal-close {
  width: 0.46rem;
  height: 0.46rem;
  margin-top: 1rem;
}

.modal-money h2 {
  padding-bottom: 0;
}

.modal-money .bg-circle {
  width: 2.16rem;
  height: 2.05rem;
  background: url(/static/images/modal_img02.png) no-repeat center center;
  margin: 0.3rem auto;
  background-size: 2.16rem 2.05rem;
  color: #6ca9fa;
  line-height: 1.2;
  font-size: 0.2rem;
  padding: 0.5rem 0.3rem;
}

.modal-money .modal-close {
  margin-top: 2.2rem;
}

.modal-finance .modal-btn-box a {
  width: 4rem;
  margin: 0 auto;
}

.modal-finance .modal-img03 {
  width: 1.8rem;
  height: 1.16rem;
  margin: 0.8rem 0 1.8rem;
}
</style>
