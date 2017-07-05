<template>
    <div>
        <z-header></z-header>
        <!--内容-->
        <div class="tong-container company-container clearfix">
            <h1>企业通</h1>
            <router-link to="/company/electronicinvoice" class="function-bg1 fl">
                <h3>电子发票</h3>
                <span class="line"></span>
                <p>助力复星ONE FOSUN战略</p>	
            </router-link>
            <router-link to="/company/loanstarbusiness" class="function-bg2 fr">
                <h3>企业贷款</h3>
                <span class="line"></span>
                <p>助力企业成长！</p>
            </router-link>
            <router-link to="/company/car" class="function-bg3 fl">
                <h3>汽车租赁</h3>
                <span class="line"></span>
                <p>创富金融直通车！</p>			
            </router-link>
            <router-link to="/company/techcredit" class="function-bg4 fr">		
                <h3>金融科技</h3>
                <span class="line"></span>
                <p>信仰是力量，信用是财富！</p>			
            </router-link>
        </div>
        <z-footer></z-footer>
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
.company-container{padding:0.8rem 0.4rem 0.5rem;width: 7.5rem;margin: 0 auto}
.company-container .function-bg1,.company-container .function-bg2,.company-container .function-bg3,.company-container .function-bg4{width:3.3rem;height:3.5rem;text-align: center;position: relative}
.company-container .function-bg1{background:url(/static/images/company_index01.png) no-repeat center center;background-size:3.3rem 3.5rem;}
.company-container .function-bg2{background:url(/static/images/company_index02.png) no-repeat center center;background-size:3.3rem 3.5rem;}
.company-container .function-bg3{background:url(/static/images/company_index03.png) no-repeat center center;margin-top: 0.1rem;background-size:3.3rem 3.5rem;}
.company-container .function-bg4{background:url(/static/images/company_index04.png) no-repeat center center;margin-top: 0.1rem;background-size:3.3rem 3.5rem;}
.company-container h3{font-size:0.32rem;padding:1.1rem 0 0.1rem 0;color: #fff;}
.company-container p{font-size:0.24rem;color:#fff}
.company-container .line{display: block;border-top:1px solid #fff;width: 0.6rem;position:absolute;top:1.7rem;left: 1.37rem}
</style>
