<template>
    <div>
        <z-header></z-header>
        <!--内容-->
        <div class="tong-container company-container">
            <h1>企业通</h1>
            <router-link to="/company/loanplatform" class="function function-bg1">
                <h3>企业贷款</h3>
                <p>助力企业成长！</p>
            </router-link>
            <router-link to="/company/car" class="function function-bg2">
                <h3>汽车租赁</h3>
                <p>创富金融直通车！</p>			
            </router-link>
            <router-link to="/company/techcredit" class="function function-bg3">		
                <h3>金融科技</h3>
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
.company-container{padding:0.8rem 0.3rem 0.5rem;}
.company-container .function{height:2.6rem;text-align:center;}
.company-container .function-bg1{background:url(/static/images/company_index01.png) no-repeat center center;background-size:6.9rem 2.6rem;}
.company-container .function-bg2{background:url(/static/images/company_index02.png) no-repeat center center;background-size:6.9rem 2.6rem;margin-top: 0.3rem;}
.company-container .function-bg3{background:url(/static/images/company_index03.png) no-repeat center center;background-size:6.9rem 2.6rem;margin-top: 0.3rem;}
.company-container .function h3{font-size:0.36rem;padding:0.86rem 0 0.2rem 0;}
.company-container .function p{font-size:0.28rem;}
</style>
