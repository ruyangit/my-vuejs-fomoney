<template>
    <div>
        <z-header goBack='true' headTitle="走进金服"></z-header>
         <section class="brand-culture">
	    	<div class="title">
	    		<span class="fs32">企业文化</span>
	    	</div>	    	
	    </section>
		<div class="brand_banner"></div>
		<ul class="brand_biaoyu">
			<li><img src="/static/images/brand_biaoyu01.jpg" alt="诚信自发"></li>
			<li><img src="/static/images/brand_biaoyu02.jpg" alt="务实精进"></li>
			<li><img src="/static/images/brand_biaoyu03.jpg" alt="助善共达"></li>
			<li><img src="/static/images/brand_biaoyu04.jpg" alt="诚信自发"></li>
		</ul>
		<ul class="brand_company">
			<li>
				<div class="content">
					<span>01</span>
					<h2 class="fs32 c-1a1a1a">企业目标</h2>
					<div class="line"></div>
					<p class="c-1a1a1a">成为一家汇聚产业深度、全球广度和科技高度的领先的综合性金融服务集团</p>
				</div>
			</li>
			<li>
				<div class="content">
					<span>02</span>
					<h2 class="fs32 c-1a1a1a">企业愿景</h2>
					<div class="line"></div>
					<p class="c-1a1a1a">共筑 健康 快乐 星金融</p>
				</div>
			</li>
			<li>
				<div class="content">
					<span>03</span>
					<h2 class="fs32 c-1a1a1a">企业使命</h2>
					<div class="line"></div>
					<p class="c-1a1a1a">用创新的、国际化的金融服务助力中国产业升级、消费升级</p>
				</div>
			</li>
		</ul>
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
.brand-culture{padding: 0.8rem 0.3rem 0.3rem 0.3rem;width:7.5rem;margin: 0 auto;}
.brand-culture .title{height: 0.32rem;line-height: 0.32rem;padding: 0.45rem 0;}
.brand-culture .title .english{color: #CCCCCC;position: relative;top:-0.03rem;left:0.1rem;}
.brand_banner{width:100%;height:2.8rem;background:url(/static/images/brand_banner.jpg) no-repeat center center;background-size:7.5rem 2.8rem;}
.brand_biaoyu{margin:0 auto;width:7.5rem;}
.brand_biaoyu li{margin-bottom:0.1rem;}
.brand_biaoyu li img{width:7.5rem;height:1.8rem;}
.brand_company{width:7.5rem;padding:0 0.3rem;margin:0.5rem auto 0;}
.brand_company li{width:6.9rem;height:2rem;margin-bottom:0.5rem;box-shadow:0 0 0.2rem #f8f8f8;}
.brand_company li:nth-child(1){background:url(/static/images/company_target.jpg) no-repeat center center;background-size:6.9rem 2rem;}
.brand_company li:nth-child(2){background:url(/static/images/company_vision.jpg) no-repeat center center;background-size:6.9rem 2rem;}
.brand_company li:nth-child(3){background:url(/static/images/company_mission.jpg) no-repeat center center;background-size:6.9rem 2rem;}
.brand_company .content{padding-left:0.4rem;width:3.5rem;height:2rem;position:relative;}
.brand_company .content span{position: absolute;top:-0.25rem;color:#ededed;font-size:0.6rem;line-height:1;}
.brand_company .content h2{line-height:1;padding-top:0.5rem;}
.brand_company .content .line{width:0.8rem;border-bottom:0.03rem solid #c5ab60;margin:0.18rem 0;}
.brand_company .content p{font-size:0.18rem;line-height:1.5;}
</style>
