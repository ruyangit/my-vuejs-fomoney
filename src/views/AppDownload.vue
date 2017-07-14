<template>
    <div>
        <z-header></z-header>
        <div class="container app-container">
            <div class="close-box">
                <router-link to="/"><img src="/static/images/icon_close.png" alt="关闭"></router-link>
            </div>
            <div class="fomoney-box text-center">
                <img src="/static/images/logo_fomoney.png" alt="复星钱包">
            </div>
            <div class="app-txt-box text-center">
                <img src="/static/images/app_txt.png" alt="健康.富足.快乐">
            </div>
            <div class="imgandbnt">
                <img src="/static/images/app_download_bg.jpg" alt="">
                <a class="btn download-btn" href="https://www.fosun-pay.com/module/qrcode/fx_download.jsp">立即下载最新版</a>
            </div>
        </div>
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
.app-container .close-box {
    padding: 0.28rem 0;
    text-align: right;
}

.app-container .close-box img {
    width: 0.41rem;
    height: 0.41rem;
}

.app-container .fomoney-box img {
    width: 1.38rem;
    height: 1.38rem;
}

.app-container .app-txt-box {
    padding: 0.4rem 0 0.45rem;
}

.app-container .app-txt-box img {
    width: 5.53rem;
    height: 1.03rem;
}

.app-container .imgandbnt {
    position: relative;
}

.app-container .imgandbnt .download-btn {
    width: 4.5rem;
    height: 0.9rem;
    background-color: #c9a96e;
    color: #fff;
    line-height: 0.9rem;
    font-size: 0.32rem;
    position: absolute;
    bottom: 0.15rem;
    left: 50%;
    margin-left: -2.25rem;
    box-shadow: 0 0.05rem 0.15rem #d4d4d4;
}

.app-container .imgandbnt img {
    width: 5.6rem;
    height: 6.1rem;
    margin-left: -0.3rem;
}
</style>
