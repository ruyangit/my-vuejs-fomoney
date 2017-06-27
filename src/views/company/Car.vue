<template>
    <div>
        <z-header goBack='true' headTitle="汽车租赁"></z-header>
        <!--内容-->
        <div class="container company-carlease-container ">
            <h2>创富金融直通车</h2>
            <div class="text-center">
                <img src="/static/images/company_carlease_img01.jpg" alt="汽车租赁">
            </div>
            <p>以专业的产品设计、高效的运营系统、优质的客服服务</p>
            <p>为企业提供专属的汽车金融解决方案</p>
            <p>汽车经销商：库存融资产品、试乘试驾产品</p>
            <p>经营性租赁公司：购车产品</p>
            <p>企业：清障车产品、牵引车产品</p>
            <a class="btn" href="javascript:;">我要申请</a>
        </div>
        <div class="company-carlease-bg"></div>
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

.company-carlease-container h2 {
    padding: 0.45rem 0 1rem;
    font-size: 0.32rem;
    color: #1a1a1a;
    line-height: 1;
}

.company-carlease-container img {
    width: 4.5rem;
    height: 2.56rem;
}

.company-carlease-container p {
    color: #808080;
    font-size: 0.28rem;
    text-align: center;
}

.company-carlease-container .btn {
    width: 5.8rem;
    height: 0.9rem;
    background-color: #00a5fa;
    color: #fff;
    font-size: 0.36rem;
    line-height: 0.9rem;
    margin: 0 auto;
    display: block;
    margin-top: 0.65rem;
}

.company-carlease-bg {
    width: 7.5rem;
    height: 3.8rem;
    background: url(/static/images/company_carlease_img02.jpg) no-repeat center center;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -3.75rem;
    background-size: 7.5rem 3.8rem;
}

.company-carlease-container a.btn {
    position: absolute;
    z-index: 1;
    right: 0;
    left: 0;
}
</style>
