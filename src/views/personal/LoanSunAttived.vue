<template>
    <div id="" class="bg-fff">
        <z-header goBack='true' headTitle="我要贷款"></z-header>
        <!--内容-->
        <div class="item xdd active">
            <div class="banner"></div>
            <div class="txt-content">
                <h2>住宅抵押类贷款，随借随还，最高1000万。</h2>
                <h3>
                    <label>贷款金额：</label>
                    <span>不超过1000万元</span>
                </h3>
                <h3>
                    <label>贷款期限：</label>
                    <span>3个月</span>
                </h3>
                <h3>
                    <label>参考利息：</label>
                    <span>10% ~ 24%</span>
                </h3>
                <h3>
                    <label>还款方式：</label>
                    <span>等额本息</span>
                </h3>
                <p>主要针对上海、广州等范围内企业或的人的住宅房屋抵押贷款，提供简便、快速的审批流程，2个工作日的审批，7天放款。</p>
            </div>
            <div class="btn-box">
                <a class="btn" href="javascript:;">我要申请</a>
            </div>
        </div>
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
.xing-box .xdd .banner {
    width: 7.5rem;
    height: 2.1rem;
    background: url(/static/images/personal_xdd_banner.png) no-repeat center center;
    background-size: 7.5rem 2.1rem;
}
</style>
