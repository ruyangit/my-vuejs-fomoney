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
            <swiper-slide class="swiper-slide">
              <img src="/static/images/index_banner05.jpg" alt="用价值投资">
            </swiper-slide>
            <!-- Add Pagination -->
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <!--</div>-->
        </div>
      </div>
      <!--4个功能块-->
      <div class="function-box">
        <swiper :options="zb">
          <swiper-slide class="swiper-slide">
            <div class="li" @click="zDetarget('al1')">
              <a class="load-serve" href="javascript:;">
                <img src="/static/images/icon_daikuan.png" alt="贷款业务">
                <h3>融资服务</h3>
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="li" @click="zDetarget('al2')">
              <a class="money-manage" href="javascript:;">
                <img src="/static/images/icon_caifu.png" alt="财富管理">
                <h3>财富管理</h3>
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="li" @click="zDetarget('al3')">
              <a class="finance-tech" href="javascript:;">
                <img src="/static/images/icon_keji.png" alt="金融科技">
                <h3>金融科技</h3>
              </a>
            </div>
          </swiper-slide>
          <swiper-slide class="swiper-slide">
            <div class="li" @click="zDetarget('al4')">
              <a class="invest-manage" href="javascript:;">
                <img src="/static/images/icon_invest.png" alt="投资管理">
                <h3>投资管理</h3>
              </a>
            </div>
          </swiper-slide>
        </swiper>
      </div> 
    </div>
    <z-footer></z-footer>
  
    <!--贷款业务弹框-->
    <transition name="fade">
    <div class="index-modal-box modal-load" v-show="al1">
      <h2>融资服务</h2>
      <p>为帮助个人及企业用户合理规划成本，实现资产最大化，复星金服提供高效、便捷、安全的融资服务，既以健康、居家、旅游、时尚、文化等为场景，满足用户品质生活的一站式金融服务需求；同时，又以产业为依托，深耕产业链，为其上下游企业提供流动性支持与综合金融服务。</p>
      <img class="modal-img01" src="/static/images/modal_img01.png" alt="" >
      <div class="modal-btn-box clearfix">
        <router-link to="/personal/loansunattived" class="fl">个人融资 >></router-link>
        <router-link to="/company/loanplatform" class="fr">企业融资 >></router-link>
      </div>
      <img class="modal-close" src="/static/images/icon_close.png" alt="关闭"  @click="zDetarget('al1')">
    </div>
    </transition>
    <!--财富管理弹框-->
    <transition name="fade">
    <div class="index-modal-box modal-money" v-show="al2">
      <h2>财富管理</h2>
      <!-- <div class="bg-circle"></div>  -->
      <img class="modal-img02" src="/static/images/modal_img02.png" alt="" >     
      <p>以服务高成长、高价值客户为核心，以复星集团战略为基础，复星金服通过向客户提供现金、信用、保险、投资等一系列的金融服务，将客户的资产、负债、流动性进行管理，以满足客户不同阶段的财务需求，综合考虑风险、收益、流动性、可行性等因素，帮助客户达到降低风险，实现财富增值的目的。</p>
      <img class="modal-close" src="/static/images/icon_close.png" alt="关闭"  @click="zDetarget('al2')">
    </div>
    </transition>
    <!--金融科技弹框-->
    <transition name="fade">
    <div class="index-modal-box modal-finance" v-show="al3">
      <h2>金融科技</h2>
      <p>坚持以科技引领金融，链接现在与未来，复星金服充分利用云计算、大数据、人工智能、区块链等前沿技术，将科技运用于支付、征信、信贷等各个金融服务环节，携手各个业务板块，不断探索创新，开拓科技金融的创新业务模式。</p>
      <img class="modal-img03" src="/static/images/modal_img03.png" alt="" >
      <div class="modal-btn-box">
        <router-link to="/company/techcredit" >体验金融科技服务 >></router-link>
      </div>
      <img class="modal-close" src="/static/images/icon_close.png" alt="关闭"  @click="zDetarget('al3')">
    </div>
    </transition>
    <!--投资管理弹框-->
    <transition name="fade">
    <div class="index-modal-box modal-invest" v-show="al4">
      <h2>投资管理</h2>
      <img class="modal-img04" src="/static/images/modal_img04.png" alt="" >
      <p>遵循复星集团“中国动力嫁接全球资源”的投资模式，复星金服通过对宏观与微观经济趋势的深入了解以及对全球金融市场情况的深入分析，捕捉受惠于中国成长动力的投资机会，通过战略投资、二级市场投资等形式，对全球银行、信托、融资租赁、金融科技以及相关领域布局，助力集团实现C2M战略。目前，复星成功投资了葡萄牙千禧银行（BCP）、浙江网商银行在内的一级市场及数个二级市场、债券市场资产配置项目。
      </p>     
      <img class="modal-close" src="/static/images/icon_close.png" alt="关闭"  @click="zDetarget('al4')">
    </div>
    </transition>
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
        autoplay: 6000,
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        spaceBetween: 30,
        loop: true,
        autoplayDisableOnInteraction: false,
        onSlideChangeEnd: swiper => {
          //这个位置放swiper的回调方法  
          this.page = swiper.realIndex + 1;
          this.index = swiper.realIndex;
        }
      },
      zb: {
        notNextTick: true,
        slidesPerView: 4,   //设置slider容器能够同时显示的slides数量，可以是小数，例如3.5，就是显示3个完整的和1个一半的，滑动可以让另一半显示
        paginationClickable: true,
        spaceBetween: 10
      },
      al1:false,
      al2:false,
      al3:false,
      al4:false,
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
      }else if(al==="al4"){
        this.al4 = !this.al4
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
  padding: 0.3rem 0.2rem;
}

.index-container .function-box .li {
  float: left;
  width: 100%;
}

.index-container .function-box .li a {
  display: block;
  /* width: 2.16rem; */
  width: 100%;
  height: 1.7rem;
  background-color: #c9a96e;
  text-align: center;
  color: #fff;
  font-size: 0.2rem;
  box-shadow:0 2px 0 #dbdbdb; 
}

.index-container .function-box .li a img {
  width: 0.6rem;
  margin-top: 0.4rem;
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

.modal-money .modal-close {
  margin-top: 2.2rem;
}

.modal-finance .modal-btn-box a {
  width: 4rem;
  margin: 0 auto;
}

.modal-money .modal-img02 {
  width: 2.18rem;
  height: 2.23rem;
  margin: 0.4rem 0 0.56rem;
}

.modal-finance .modal-img03 {
  width: 1.8rem;
  height: 1.16rem;
  margin: 0.8rem 0 1.8rem;
}

.modal-invest .modal-img04 {
  width: 1.87rem;
  height: 1.21rem;
  margin: 0.25rem 0 0.5rem;
}

.modal-invest .modal-close {
  margin-top: 2rem;
}
</style>
