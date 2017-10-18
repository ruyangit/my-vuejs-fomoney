<template>
    <!--内容-->
    <div class="item xxind active">
        <div class="banner"></div>
        <div class="txt-content">
            <h2>复星员工专享，快速审批，3天放款。</h2>
            <h3>
                <label>贷款金额：</label>
                <span>1万元 ~ 5万元</span>
            </h3>
            <h3>
                <label>贷款期限：</label>
                <span>12个月以内</span>
            </h3>
            <!-- <h3>
                <label>参考利息：</label>
                <span>8% ~ 15%</span>
            </h3> -->
            <h3>
                <label>还款方式：</label>
                <span>等额本息</span>
            </h3>
            <p class="fs28">复星员工专属信用贷，审批快、无抵押。资料齐全后3日即可完成审批。</p>
            <p class="fs28">服务热线：<a class="a-tel" href="tel:400-700-8808">400-700-8808</a></p>
        </div>
        <div class="btn-box">
            <a class="btn" href="javascript:;" @click="myModel=true">我要申请</a>
        </div>
        <PersonalLoanBox v-model="myModel" title="申请星薪贷" moduleType="1002"></PersonalLoanBox>
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
.xing-box .xxind .banner {
    width: 7.5rem;
    height: 2.1rem;
    background: url(/static/images/personal_xxind_banner.png) no-repeat center center;
    background-size: 7.5rem 2.1rem;
}
</style>
