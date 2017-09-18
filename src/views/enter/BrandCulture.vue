<template>
    <div>
        <z-header goBack='true' headTitle="走进金服"></z-header>
         <section class="brand-culture">
	    	<div class="title">
	    		<span class="fs32">品牌文化</span>
	    		<span class="fs24 english">Branding Culture</span>
	    	</div>
	    	<ul>
	    		<li class="target">
	    			<p>企业目标</p>
	    			<span></span>
	    			<div class="target-detail text-center">
	    				<a>成为一家汇聚产业深度、全球广度和科</a>
	    				<a class="detail">技高度的领先的综合性金融服务集团</a>
	    			</div>
	    		</li>
	    		<li class="vision">
	    			<p>企业愿景</p>
	    			<span></span>
	    			<div class="vision-detail text-center">
	    				<a>共筑  健康  快乐  易金融</a>
	    			</div>
	    		</li>
	    		<li class="mission">
	    			<p>企业使命</p>
	    			<span></span>
	    			<div class="mission-detail text-center">
	    				<a>用创新的、国际化的金融服务，助力中</a>
	    				<a class="detail">国产业升级、消费升级</a>
	    			</div>
	    		</li>
	    	</ul>
	    </section>
        <z-footer></z-footer>
    </div>
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    components:{
        zHeader,
        zFooter
    }
}
</script>
<style scoped>
.brand-culture{padding: 0.8rem 0.3rem 1.8rem 0.3rem;width:7.5rem;margin: 0 auto;}
.brand-culture .title{height: 0.32rem;line-height: 0.32rem;padding: 0.45rem 0;}
.brand-culture .title .english{color: #CCCCCC;position: relative;top:-0.03rem;left:0.1rem;}
.brand-culture ul{margin-top: 0.25rem;}
.brand-culture ul li{width: 6.9rem;height: 1.8rem;position: relative;}
.brand-culture ul .target{background: url(/static/images/en_target.jpg) no-repeat center;background-size: 6.9rem 1.8rem;}
.brand-culture ul .vision{background: url(/static/images/en_vision.jpg) no-repeat center;background-size: 6.9rem 1.8rem;margin-top: 0.8rem;}
.brand-culture ul .mission{background: url(/static/images/en_mission.jpg) no-repeat center;background-size: 6.9rem 1.8rem;margin-top: 0.5rem;}
.brand-culture ul li p{font-size: 0.32rem;position: absolute;}
.brand-culture ul .target p{top:0.4rem;left:1rem;}
.brand-culture ul .vision p{top: 0.3rem;right: 1.1rem;}
.brand-culture ul .mission p{top: 0.4rem;left: 1rem;}
.brand-culture ul li span{border-bottom: 0.03rem solid #c5ab60;position: absolute;width: 0.95rem;display: inline-block;}
.brand-culture ul .target span{top: 1.2rem;left:1.2rem;}
.brand-culture ul .vision span{top: 1.1rem;right: 1.25rem;}
.brand-culture ul .mission span{top: 1.2rem;left: 1.2rem;}
.brand-culture ul .target .target-detail,.brand-culture ul .mission .mission-detail{width: 3.45rem;background: rgba(102,102,102,0.5);height: 0.7rem;position: absolute;top: 1.45rem;left: 0;padding: 0.15rem 0;}
.brand-culture ul .target .target-detail a,.brand-culture ul .mission .mission-detail a{color: #FFFFFF;display: block;font-size: 0.18rem;width: 3.45rem;height: 0.18rem;line-height: 0.18rem;}
.brand-culture ul .target .target-detail .detail,.brand-culture ul .mission .mission-detail .detail{margin-top: 0.1rem;}
.brand-culture ul .vision .vision-detail{width: 2.45rem;background: rgba(102,102,102,0.5);height: 0.4rem;line-height:0.4rem;position: absolute;top:1.55rem;right:0.5rem;padding: 0.05rem 0;}
.brand-culture ul .vision .vision-detail a{color: #FFFFFF;display: block;font-size: 0.18rem;}
</style>
