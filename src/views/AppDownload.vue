<template>
    <div>
        <z-header></z-header>
        <div class="container app-container">
            <div class="close-box">
                <router-link to="/">
                    <img src="/static/images/icon_close.png" alt="关闭">
                </router-link>
            </div>
            <div class="fomoney-box text-center">
                <img src="/static/images/logo_fomoney.png" alt="复星钱包">
            </div>
            <div class="app-txt-box text-center">
                <img src="/static/images/app_txt.png" alt="健康.富足.快乐">
            </div>
            <div class="imgandbnt">
                <img src="/static/images/app_download_bg.jpg" alt="">
                <a class="btn download-btn" @click="downloadApp()">立即下载最新版</a>
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
    },
    created() {
        document.body.style.background='#fff';
    },
    methods: {
        downloadApp(){
            if(this.is_ios()){
                //alert('ios');
                window.open('https://itunes.apple.com/cn/app/fu-xing-qian-bao/id1155456006?mt=8');
            }else if(this.is_android()){
                //alert('android');
                window.open('http://app.qq.com/#id=detail&appid=1105656830');
            }else{
                //alert('other');
                window.open('http://app.qq.com/#id=detail&appid=1105656830');
            }
        },
        is_ios() {
            var ua = navigator.userAgent.toLowerCase();
            if (/iphone|ipad|ipod/.test(ua)) {
                return true;
            } else {
                return false;
            }
        },
        is_android() {
            var ua = navigator.userAgent.toLowerCase();
            if (/android|linux/.test(ua)) {
                return true;
            } else {
                return false;
            }
        }
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
    height: 0.53rem;
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
