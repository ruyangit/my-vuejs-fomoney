<template>
    <!--内容-->
    <div class="item xdd active">
        <div class="banner"></div>
        <div class="txt-content">
            <h2>有房在手，世界可有！(借款最高1000万)</h2>
            <h3>
                <label>贷款金额：</label>
                <span>最高不超过1000万元</span>
            </h3>
            <h3>
                <label>贷款期限：</label>
                <span>3个月以内</span>
            </h3>
            <!-- <h3>
                <label>参考利息：</label>
                <span>10% ~ 24%</span>
            </h3> -->
            <h3>
                <label>还款方式：</label>
                <span>等额本息</span>
            </h3>
            <p>主要针对上海、广州等范围内企业或个人的住宅房屋抵押贷款，提供简便、快速的审批流程，2个工作日审批，7天放款。</p>
            <p class="fs28">服务热线：<a class="a-tel" href="tel:400-700-8808">400-700-8808</a></p>
        </div>
        <div class="btn-box">
            <a class="btn" href="javascript:;" @click="myModel=true">我要申请</a>
        </div>
        <PersonalLoanBox v-model="myModel" title="申请星抵贷" moduleType="1003"></PersonalLoanBox>
    </div>
</template>

<script>
import PersonalLoanBox from '@/components/PersonalLoanBox'
export default {
    data() {
        return {
            myModel: false
        }
    },
    components:{
        PersonalLoanBox
    }
}
</script>
<style scoped>
.apply-box{height:15rem;}
.xing-box .xdd .banner {
    width: 7.5rem;
    height: 2.1rem;
    background: url(/static/images/personal_xdd_banner.png) no-repeat center center;
    background-size: 7.5rem 2.1rem;
}
</style>
