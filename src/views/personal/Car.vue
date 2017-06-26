<template>
    <div id="" class="bg-fff">
        <z-header goBack='true' headTitle="我要买车"></z-header>
        <!--内容-->
        <div class="container personal-buycar-container">
            <h2>线上购车申请流程</h2>
            <div class="step-box">
                <div class="step clearfix">
                    <div class="left fl">
                        <img src="/static/images/step01.png" alt="步骤一" >
                        <div class="div-blue">申请</div>
                        <div class="div-light"></div>
                    </div>				
                    <div class="right fl">
                        <p>1.下载填写申请</p>
                        <p>2.准备申请材料</p>
                        <p>3.寄送资料到创富汽车</p>
                    </div>
                    <img class="icon-down" src="/static/images/icon_down.png" alt="向下" >
                </div>
                <div class="step clearfix">
                    <div class="left fl">
                        <img class="step-num-img" src="/static/images/step02.png" alt="步骤二" >
                        <div class="div-blue">审批</div>
                        <div class="div-light"></div>
                    </div>				
                    <div class="right step-pt50 fl">
                        <p>审批完成我们会给您致电</p>
                    </div>
                    <img class="icon-down" src="/static/images/icon_down.png" alt="向下" >
                </div>
                <div class="step clearfix">
                    <div class="left fl">
                        <img class="step-num-img" src="/static/images/step03.png" alt="步骤三" >
                        <div class="div-blue">签约</div>
                        <div class="div-light"></div>
                    </div>				
                    <div class="right step-pt50 fl">
                        <p>签订协议</p>
                    </div>
                    <img class="icon-down" src="/static/images/icon_down.png" alt="向下" >
                </div>
                <div class="step clearfix">
                    <div class="left fl">
                        <img class="step-num-img" src="/static/images/step04.png" alt="步骤四" >
                        <div class="div-blue">付款</div>
                        <div class="div-light"></div>
                    </div>				
                    <div class="right step-pt50 fl">
                        <p>支付首付及首期租金</p>
                    </div>
                    <img class="icon-down" src="/static/images/icon_down.png" alt="向下" >
                </div>
                <div class="step clearfix">
                    <div class="left fl">
                        <img class="step-num-img" src="/static/images/step05.png" alt="步骤五" >
                        <div class="div-blue">提车</div>
                        <div class="div-light"></div>
                    </div>				
                    <div class="right step-pt50 fl">
                        <p>直接提车</p>
                    </div>
                </div>
            </div>
            <section class="text-center">
                <img src="/static/images/personal_ car.png" alt="创富汽车金融">
            </section>
            <h2>线上购车品牌专区</h2>
            <div class="car-box clearfix">
                <a class="fl" href="javascript:;"><img class="small" src="/static/images/car_mark01.png" alt=""> </a>
                <a class="fl" href="javascript:;"><img class="small" src="/static/images/car_mark02.png" alt=""> </a>
                <a class="fl" href="javascript:;"><img class="big" src="/static/images/car_mark03.png" alt=""> </a>
                <a class="fl" href="javascript:;"><img class="big" src="/static/images/car_mark04.png" alt=""> </a>
                <a class="fl" href="javascript:;"><img class="small" src="/static/images/car_mark05.png" alt=""> </a>
                <a class="fl" href="javascript:;"><img class="big" src="/static/images/car_mark06.png" alt=""> </a>
                <a class="fl" href="javascript:;"><img class="small" src="/static/images/car_mark07.png" alt=""> </a>
            </div>
        </div>
        <!--文字部分-->
        <div class="buycar-txt-intro">
            <h3>创富汽车金融，启动梦想里程</h3>
            <p>在国外，我们随处可见“每月支付几十美元，或是首付几百美元，把车开回家”的广告，这就是在欧美及日本等汽车产业发达市场上流行的汽车融资租赁金融产品。
    现在，创富把这种消费模式和理念带到中国，根据市场需求推出了 “打包融资租赁”的产品，为消费者提供新车及二手车的融资租赁业务。</p>
            <p>创富汽车融资租赁，名为“租” 实为“购”，消费者通过分期支付租金的方式在租赁期满实现购车。</p>
        </div>
        <z-footer></z-footer>
        <!--我要申请-->
        <div class="btn-box">
            <a class="btn" href="javascript:;">我要申请</a>
        </div>
    </div>
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    components: {
        zHeader,
        zFooter
    }
}
</script>
<style scoped>
.personal-buycar-container h2{padding:0.45rem 0 0.05rem;line-height:1;color:#1a1a1a;font-size:0.32rem;}
		.personal-buycar-container .step-box{width:5rem;margin:0 auto;}
		.personal-buycar-container .step-box .step{position:relative;margin-top:0.2rem;}
		.personal-buycar-container .step-box .left{width:1.62rem;height:1.05rem;position:relative;}
		.personal-buycar-container .step-box .left img{width:0.29rem;height:0.62rem;position:absolute;left:0;z-index:5;}
		.personal-buycar-container .step-box .left .step-num-img{width:0.52rem;height:0.62rem;}
		.personal-buycar-container .step-box .left .div-blue{width:1.5rem;height:0.6rem;background-color:#e9f3ff;position:absolute;top:0.36rem;z-index:3;text-align:center;line-height:0.6rem;font-size:0.24rem;color:#4a90e2;}
		.personal-buycar-container .step-box .left .div-light{width:1.5rem;height:0.6rem;background-color:#f4f9ff;position:absolute;right:0;bottom:0;}
		.personal-buycar-container .step-box .right{padding-top:0.2rem;margin-left:0.7rem;}
		.personal-buycar-container .step-box .right p{color:#1a1a1a;font-size:0.2rem;line-height:1.2;}
		.personal-buycar-container img.icon-down{width:0.2rem;height:0.2rem;position:absolute;top:1.1rem;left:1.88rem;}
		.personal-buycar-container .step-box .step-pt50{padding-top:0.5rem;}
		.personal-buycar-container section{padding:0.45rem 0 0.4rem;}
		.personal-buycar-container section img{width:5.6rem;height:1.55rem;}
		.personal-buycar-container .car-box{padding:0.6rem 0 0.45rem;}
		.personal-buycar-container .car-box a{display:block;text-align:center;width:0.98rem;}
		.personal-buycar-container .car-box a img.small{width:0.41rem;height:0.44rem;}
		.personal-buycar-container .car-box a img.big{width:0.81rem;height:0.48rem;}
		footer.personal-buycar-pb125{padding-bottom:1.25rem;}
		.buycar-txt-intro{background:url(/static/images/personal_buycar_bg.jpg) no-repeat center center;background-size:7.5rem 3.38rem;height:3.38rem;text-align:center;padding:0 0.3rem;}
		.buycar-txt-intro h3{font-size:0.28rem;color:#fff;padding:0.4rem 0 0.2rem;}
		.buycar-txt-intro p{font-size:0.18rem;color:#b5bdc8;line-height:1.3;}
		/*弹框*/
		.apply-box form table tr td input[type="text"],.apply-box form table tr td select,.apply-box form table tr td textarea{margin-left:0.2rem;}
	</style>
