<template>
    <div>
        <z-header goBack='true' headTitle="走进星航"></z-header>
         <!--内容-->
        <div class="container enter-common-container enter-aboutus-container">
            <h2>公司介绍<span>ABOUT  US</span></h2>
            <p>2016年复星集团初步完成了复星金融服务板块——复星金服的搭建，目前核心企业已有星联保理、广信小贷、云通小贷、星灵财富、创富租赁、量富征信、商盟支付等，以复星钱包为支付入口，征信、大数据、云风控运用为核心，嵌入复星健康、快乐、旅游、地产等资源的场景化服务从而组成信贷、财富管理及金融科技三大事业部。</p>
            <p class="mt40">复星金服，秉承着复星集团的价值观，努力搭建服务于千百万中国新中产家庭的民生金融和消费服务平台，致力于帮助和促进家庭的消费升级与资产增值。依靠复星集团的巨大体量以及资源支持，努力发展成为一家汇聚产业深度、全球广度和科技高度的领先的综合性金融服务集团，为社会公众提供更好的金融生活服务。</p>
            <h4>共创 “ <span>  健康、快乐、易金融   </span> ” 。</h4>
            <h3>金服家园</h3>
            <div class="family">
                <div class="first-line text-center">
                    <a href="javascript:;"><img src="/static/images/enter_logo01.png" alt="贷款服务"></a>
                    <a class="alert-cfzl" href="javascript:;"><img src="/static/images/enter_logo02.png" alt="Great China"></a>
                    <a href="javascript:;"><img src="/static/images/enter_logo03.png" alt="复星云通小贷"></a>
                </div>
                <div class="second-line text-center">
                    <a href="javascript:;"><img src="/static/images/enter_logo04.png" alt="广信小贷"></a>
                    <a href="javascript:;"><img src="/static/images/enter_logo05.png" alt="星联保理"></a>
                    <a href="javascript:;"><img src="/static/images/enter_logo06.png" alt="星之灵"></a>
                    <a href="javascript:;"><img src="/static/images/enter_logo07.png" alt="财富管理"></a>
                </div>
                <div class="three-line text-center">
                    <a href="javascript:;"><img src="/static/images/enter_logo08.png" alt="金融科技"></a>
                    <a href="javascript:;"><img src="/static/images/enter_logo09.png" alt="量富征信"></a>
                    <a href="javascript:;"><img src="/static/images/enter_logo10.png" alt="统统付"></a>
                </div>
            </div>
        </div>
        <!--背景-->
        <div class="enter_aboutus_bg"></div>
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
.enter-aboutus-container p{font-size:0.24rem;color:#808080;line-height:1.5;}
.enter-aboutus-container h3,.enter-aboutus-container h4{font-size:0.32rem;text-align:center;line-height:1;}
.enter-aboutus-container h4{color:#808080;padding:0.35rem 0 0.66rem;}
.enter-aboutus-container h4 span{color:#1a1a1a;font-weight:bold;}
.enter-aboutus-container h3{color:#1a1a1a;padding-bottom:0.2rem;}
.enter-aboutus-container .family a{width:1.65rem;height:1.95rem;display:inline-block;}
.enter-aboutus-container .family a img{width:1.65rem;height:1.95rem;}
.enter-aboutus-container .family .second-line,.enter-aboutus-container .family .three-line{margin-top:-0.4rem;}
.enter_aboutus_bg{background:url(/static/images/enter_aboutus_bg.jpg) no-repeat center center;background-size:7.5rem 4.82rem;width:7.5rem;height:4.82rem;margin:-0.8rem auto 0;}
.enter_aboutus_footer{margin-top:-1.4rem;}
/*模态框公司详情*/
.modal-common{padding-top:2.6rem;}
.modal-cfzl .img-cfzl{width:2.35rem;height:0.75rem;}
.modal-common h2{font-size:0.36rem;line-height:1;padding:0.2rem 0 0.9rem;}
.modal-common p{padding:0rem 1.26rem;}	
</style>
