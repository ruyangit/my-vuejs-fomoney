<template>
    <div>
        <z-header></z-header>
        <!--内容-->
        <div class="container tong-container enter-index-container">
            <h1>走进金服</h1>
            <div class="function-box clearfix">
                <div class="left fl">
                    <router-link to="/enter/aboutus" class="function function-bg1">
                        <h3>公司介绍</h3>
                        <div class="line"></div>
                    </router-link>
                    <router-link to="/enter/leadershipteam" class="function function-bg2 mt10">
                        <h3>团队介绍</h3>
                        <div class="line"></div>
                    </router-link>
                    <router-link to="/enter/brandculture" class="function function-bg3 mt10">
                        <h3>品牌文化</h3>
                        <div class="line"></div>
                    </router-link>
                </div>
                <div class="right fr">
                    <router-link to="/enter/developmenthistory" class="function function-bg4">
                        <h3>发展历程</h3>
                        <div class="line"></div>
                    </router-link>
                    <router-link to="/enter/cooperativepartner" class="function function-bg5 mt10">
                        <h3>合作伙伴</h3>
                        <div class="line"></div>
                    </router-link>
                </div>
            </div>
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
.enter-index-container .function-box {
    padding: 0 0.5rem 1.1rem;
}

.enter-index-container .function-box .left,
.enter-index-container .function-box .right {
    width: 2.9rem;
}

.enter-index-container .function-box .function {
    width: 2.9rem;
    height: 2.45rem;
}

.enter-index-container .function-box .left .function-bg1 {
    background: url(/static/images/enter_index_bg01.jpg) no-repeat center center;
    background-size: 2.9rem 2.45rem;
}

.enter-index-container .function-box .left .function-bg2 {
    background: url(/static/images/enter_index_bg02.jpg) no-repeat center center;
    background-size: 2.9rem 2.45rem;
}

.enter-index-container .function-box .left .function-bg3 {
    background: url(/static/images/enter_index_bg03.jpg) no-repeat center center;
    background-size: 2.9rem 2.45rem;
}

.enter-index-container .function-box .right .function-bg4 {
    background: url(/static/images/enter_index_bg04.jpg) no-repeat center center;
    background-size: 2.9rem 5rem;
    height: 5rem;
}

.enter-index-container .function-box .right .function-bg5 {
    background: url(/static/images/enter_index_bg05.jpg) no-repeat center center;
    background-size: 2.9rem 2.45rem;
}

.enter-index-container .function-box .mt10 {
    margin-top: 0.1rem;
}

.enter-index-container .function-box .line {
    border-bottom: 2px solid #fff;
    margin: 0.1rem auto;
    width: 0.62rem;
}

.enter-index-container .function-box h3 {
    font-size: 0.32rem;
    padding-top: 1rem;
    text-align: center;
}

.enter-index-container .function-box .function-bg4 h3 {
    padding-top: 2.3rem;
}
</style>
