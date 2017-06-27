<template>
    <div>
        <z-header goBack='true' headTitle="走进星航"></z-header>
        <!--内容-->
        <div class="container enter-common-container enter-cooperative-container">
            <h2>合作伙伴
                <span>COOPERATIVE PARTNER</span>
            </h2>
            <h3>集团合作伙伴</h3>
            <div class="enter-partner-box">
                <!-- Swiper -->
                <div class="swiper-container">
                    <swiper :options="swiperOption" ref="mySwiper">
                        <swiper-slide class="swiper-slide">
                            <ul class="clearfix">
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner01.png" alt="复地" style="width:1.7rem;height:0.26rem;">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner02.png" alt="复星医院" style="width:1.59rem;height:0.37rem;">
                                    </a>
                                </li>
                                <li>
                                    <a class="border-right-none" href="javascript:void(0);">
                                        <img src="/static/images/en_partner03.png" alt="复星保德信" style="width:1.41rem;height:0.43rem;">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner06.png" alt="老庙黄金" style="width:1.73rem;height:0.36rem;">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner07.png" alt="爱必侬" style="width:1.18rem;height:0.49rem;">
                                    </a>
                                </li>
                                <li>
                                    <a class="border-right-none" href="javascript:void(0);">
                                        <img src="/static/images/en_partner08.png" alt="构家" style="width:1.19rem;height:0.37rem;">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner11.png" alt="星堡" style="width:1.56rem;height:0.66rem;">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner12.png" alt="星泓资本" style="width:0.91rem;height:0.74rem;">
                                    </a>
                                </li>
                                <li>
                                    <a class="border-right-none" href="javascript:void(0);">
                                        <img src="/static/images/en_partner13.png" alt="星浩资本" style="width:1.32rem;height:0.4rem;">
                                    </a>
                                </li>
                                <li>
                                    <a class="border-bottom-none" href="javascript:void(0);">
                                        <img src="/static/images/en_partner16.png" alt="onelink" style="width:1.42rem;height:0.51rem;">
                                    </a>
                                </li>
                                <li>
                                    <a class="border-bottom-none" href="javascript:void(0);">
                                        <img src="/static/images/en_partner17.png" alt="阳光印网" style="width:1.35rem;height:0.44rem;">
                                    </a>
                                </li>
                                <li>
                                    <a class="border-right-none border-bottom-none" href="javascript:void(0);">
                                        <img src="/static/images/en_partner18.png" alt="德邦证券" style="width:1.62rem;height:0.42rem;">
                                    </a>
                                </li>
                            </ul>
                        </swiper-slide>
                        <swiper-slide class="swiper-slide">
                            <ul class="clearfix">
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner05.png" alt="豫园商城" style="width:1.36rem;height:0.43rem;">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner04.png" alt="复星联合健康保险" style="width:1.51rem;height:0.6rem;">
                                    </a>
                                </li>
                                <li>
                                    <a class="border-right-none" href="javascript:void(0);">
                                        <img src="/static/images/en_partner09.png" alt="易太极" style="width:1.13rem;height:0.4rem;">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner10.png" alt="上海钢联" style="width:1.74rem;height:0.5rem;">
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0);">
                                        <img src="/static/images/en_partner14.png" alt="星豫资本" style="width:0.6rem;height:0.8rem;">
                                    </a>
                                </li>
                                <li>
                                    <a class="border-right-none" href="javascript:void(0);">
                                        <img src="/static/images/en_partner15.png" alt="星景资本" style="width:1.84rem;height:0.2rem;">
                                    </a>
                                </li>
                                <li>
                                    <a class="border-bottom-none" href="javascript:void(0);">
                                        <img src="/static/images/en_partner19.png" alt="德邦基金" style="width:1.62rem;height:0.42rem;">
                                    </a>
                                </li>
                            </ul>
                        </swiper-slide>
                    </swiper>
                    <!-- 左右滑动按钮 -->
                    <div class="swiper-button-next">&gt;</div>
                    <div class="swiper-button-prev">&lt;</div>
                    <!--背景-->
                    <div class="enter-partner-bg"></div>
                </div>
            </div>
        </div>
        <z-footer></z-footer>
    </div>
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data() {
        return {
            swiperOption: {
                //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true  
                notNextTick: true,
                // pagination: '.swiper-pagination',
                slidesPerView: 'auto',
                centeredSlides: true,
                paginationClickable: true,
                prevButton: '.swiper-button-prev',
                nextButton: '.swiper-button-next',
                spaceBetween: 30,
                onSlideChangeEnd: swiper => {
                    //这个位置放swiper的回调方法  
                    this.page = swiper.realIndex + 1;
                    this.index = swiper.realIndex;
                }
            },
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
    }
}
</script>
<style scoped>
.enter-cooperative-container {
    padding-bottom: 2.36rem;
}

.enter-cooperative-container h3 {
    padding: 0.65rem 0 0.2rem;
    font-size: 0.24rem;
    color: #1a1a1a;
}

.enter-cooperative-container .enter-partner-box {
    position: relative;
}

.enter-cooperative-container .enter-partner-box .swiper-container ul li {
    float: left;
}

.enter-cooperative-container .enter-partner-box .swiper-container ul li a {
    display: inline-block;
    width: 2.3rem;
    height: 1.36rem;
    border-bottom: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
    text-align: center;
    line-height: 1.36rem;
}

.enter-cooperative-container .enter-partner-box .swiper-container ul li a.border-right-none {
    border-right: none;
}

.enter-cooperative-container .enter-partner-box .swiper-container ul li a.border-bottom-none {
    border-bottom: none;
}

.enter-cooperative-container .enter-partner-box .swiper-container .swiper-button-next,
.enter-cooperative-container .enter-partner-box .swiper-container .swiper-button-prev {
    background-image: none;
    background-color: rgba(201, 169, 110, .6);
    color: #fff;
    text-align: center;
    width: 0.46rem;
    height: 0.7rem;
    line-height: 0.7rem;
    margin-top: -19px;
}

.enter-cooperative-container .enter-partner-box .swiper-container .swiper-button-next {
    right: 0;
}

.enter-cooperative-container .enter-partner-box .swiper-container .swiper-button-prev {
    left: 0;
}

.enter-cooperative-container .enter-partner-box .enter-partner-bg {
    position: absolute;
    top: 0.7rem;
    left: -0.3rem;
    background: url(/static/images/enter_cooperative_bg.jpg) no-repeat center center;
    background-size: 7.5rem 4.26rem;
    width: 7.5rem;
    height: 4.26rem;
    z-index: -10;
}
</style>
