<template>
    <div>
        <z-header></z-header>
        <!--内容-->
        <div class="tong-container personal-container">
            <h1>个人通</h1>
            <router-link to="/personal/loansunattived" class="function function-bg1">
                <div class="shadow">
                    <div class="txt-box">
                        <h3>我要贷款</h3>
                        <p>借款不求人，就这么简易！</p>
                    </div>
                </div>
            </router-link>
            <router-link to="/personal/car" class="function function-bg2">
                <div class="shadow">
                    <div class="txt-box">
                        <h3>我要买车</h3>
                        <p>创富汽车金融，启动梦想里程！</p>
                    </div>
                </div>
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
    },
    // 给此页面body加css样式
    created() {
        document.body.style.background='#f9f9f9';
    }
}
</script>
<style scoped>
.personal-container{padding:0.8rem 0.3rem 1.16rem;}
.personal-container .function{height:3.6rem;}
.personal-container .function-bg1{background:url(/static/images/personal_index01.png) no-repeat center center;background-size:6.9rem 3.6rem;}
.personal-container .function-bg2{background:url(/static/images/personal_index02.png) no-repeat center center;background-size:6.9rem 3.6rem;margin-top:0.3rem;}
.personal-container .function .shadow{width:100%;height:1.34rem;background-color:rgba(0,0,0,.6);position:absolute;left:0;bottom:0;}
.personal-container .function .shadow .txt-box{width:100%;height:100%;text-align:center;position:absolute;z-index:2;}		
.personal-container .function .shadow .txt-box h3{font-size:0.36rem;padding:0.3rem 0 0.18rem 0;}
.personal-container .function .shadow .txt-box p{font-size:0.24rem;}
</style>
