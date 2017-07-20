<template>
    <div>
        <z-header goBack='true' headTitle="走进金服"></z-header>
         <section class="development-history">
	    	<div class="title">
	    		<span class="fs32">发展历程</span>
	    		<span class="fs24 english">DEVELOPMENT HISTORY</span>
	    	</div>
	    	<div class="content">
	    		<div class="chain">
				    <span class="di round"></span>
				    <div class="line height150"></div>
				    <span class="di round"></span>
				    <div class="line height315"></div>
				    <span class="di round"></span>
				    <div class="line height485"></div>
				    <span class="di round"></span>
				    <div class="line height210"></div>
				    <span class="di round"></span>
				    <div class="line height150"></div>
				    <span class="di round"></span>
				    <div class="line height170"></div>
			    </div>
			    <div class="content-left text-right">
				<div class="time">
					<div class="rectangular">
						<p class="text-center fs60">2017</p>
						<span class="text-center fs30">飞跃成长</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt70 mb100">
					<div class="fs30 height30">2016年6月</div>
					<p class="fs16 mt20 height20">商盟商务服务有限公司成为复星集团关联企业</p>
					<div class="fs30 mt45 height30">2016年10月</div>
					<p class="fs16 mt20 height20">复星钱包正式推出</p>
					<div class="fs30 mt45 height30">2016年12月</div>
					<p class="fs16 mt20 height20">星联保理进入医疗行业</p>
				</div>
				<div class="time">
					<div class="rectangular">
						<p class="text-center fs60">2015</p>
						<span class="text-center fs30">在路上</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt400 mb110">
					<div class="fs30 height30">2014年10月</div>
					<p class="fs16 mt20 height20">上海星联商业保理有限公司成立</p>
					<div class="fs30 mt45 height30">2014年12月</div>
					<p class="fs16 mt20 height20">上海虹口广信小额贷款有限公司成立</p>
				</div>
				<div class="time">
					<div class="rectangular">
						<p class="text-center fs60">2010</p>
						<span class="text-center fs30">飞跃成长</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt70">
					<div class="fs30 height30">2007年6月</div>
					<p class="fs16 mt20 height20">商盟商务服务有限公司成立 </p>
				</div>
			</div>
			<div class="content-right">
				<div>
					<div class="fs30 height30">2017年3月</div>
					<p class="fs16 mt20 height20">云通小贷获得优秀科技金融创新奖</p>
					<p class="fs16 mt20 height20">量富征信、复星钱包入住“诚信上海APP”</p>
				</div>
				<div class="time mt30">
					<div class="rectangular">
						<p class="text-center fs60">2016</p>
						<span class="text-center fs30">在路上</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt240">
					<div class="fs30 height30">2015年4月</div>
					<p class="fs16 mt20 height20">量富征信管理有限公司成立</p>
					<div class="fs30 mt45 height30">2015年6月</div>
					<p class="fs16 mt20 height20">星联保理进入工程行业</p>
					<div class="fs30 mt45 height30">2015年9月</div>
					<p class="fs16 mt20 height20">广州复星云通小额贷款有限公司成立</p>
					<div class="fs30 mt45 height30">2015年11月</div>
					<p class="fs16 mt20 height20">区金融局同意广州复星云通小额贷款有限公司开业</p>
				</div>
				<div class="time mt20">
					<div class="rectangular">
						<p class="text-center fs60">2014</p>
						<span class="text-center fs30">在路上</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
				<div class="mt125">
					<div class="fs30 height30">2010年2月</div>
					<p class="fs16 mt20 height20">创富融资租赁（上海）有限公司成立</p>
				</div>
				<div class="time mt30">
					<div class="rectangular">
						<p class="text-center fs60">2007</p>
						<span class="text-center fs30">征程开始</span>
					</div>
					<div class="rectangular-under"></div>
				</div>
			</div>
	    	</div>
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
.development-history{padding: 0.8rem 0.3rem 1.2rem 0.3rem;width:7.5rem;margin: 0 auto;}
.development-history .title{height: 0.32rem;line-height: 0.32rem;padding: 0.45rem 0;}
.development-history .title .english{color: #CCCCCC;position: relative;top:-0.03rem;left:0.1rem;}
.development-history .content{position:relative;margin-top: 0.2rem;}
.development-history .content .chain{width:0.2rem;margin: 0 auto;}
.development-history .content .chain .round{width:0.2rem;height:0.2rem;border-radius:50%;border: 1px solid #ffcd54;background-color:#ffcd54;}
.development-history .content .chain .line{border-left:0.02rem dashed #ffcd54;margin-left:0.09rem;margin-bottom:0.08rem;}
.development-history .height150{height: 1.5rem;}
.development-history .height315{height: 3.15rem;}
.development-history .height485{height: 4.85rem;}
.development-history .height210{height: 2.1rem;}
.development-history .height170{height: 1.7rem;}
.development-history .content .height30{height:0.3rem;line-height:0.3rem;}
.development-history .content .height20{height:0.2rem;line-height:0.2rem;}
.development-history .content .rectangular{width:1.7rem;height:1.3rem;background-color: #cfa865;z-index:1;position: relative;left: 0.12rem;top:1.16rem;}
.development-history .content .rectangular-under{width:1.7rem;height:1.3rem;background-color: #f5eee0;} 
.development-history .content .content-left{top: 0.4rem;left:-0.05rem;}
.development-history .content .content-right{top: 0.2rem;left:4rem;}
.development-history .content .content-left,.development-history .content .content-right{width:3rem;position: absolute;}
.development-history .content .content-left .time{margin-left:1.15rem;margin-top: -1.35rem;}
.development-history .content .time .rectangular p{color: white;height:0.5rem;line-height:0.5rem;padding-top:0.2rem;}
.development-history .content .time .rectangular span{display: block;color: white;height:0.4rem;line-height:0.4rem;padding-top:0.2rem;}
.development-history .fs60{font-size: 0.6rem;}
.development-history .fs30{font-size: 0.3rem;}
.development-history .fs16{font-size: 0.16rem;}
.development-history .mt400{margin-top: 4rem;}
.development-history .mt70{margin-top:0.7rem;}
.development-history .mt240{margin-top: 2.4rem;}
.development-history .mt110{margin-top: 1.1rem;}
.development-history .mt125{margin-top: 1.25rem;}
.development-history .mb110{margin-bottom: 1.1rem;}
.development-history .mb100{margin-bottom: 1rem;}
.development-history .mt20{margin-top: 0.2rem;}
.development-history .mt25{margin-top: 0.25rem;}
.development-history .mt45{margin-top: 0.45rem;}
</style>
