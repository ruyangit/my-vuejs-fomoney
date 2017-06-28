<template>
    <!--云风控平台-->
    <div class="item yfkpt active">
        <div class="banner"></div>
        <div class="txt-content">
            <p class="txt-p">量富征信的云审批决策服务旨在帮助小额贷款公司、P2P平台、汽车金融公司、消费金融公司等金融机构进行前端风险管理。通过对客户申请信息与外部数据的比对，识别客户的欺诈风险；进而通过大数据挖掘技术，客观评估客户信用风险，预测违约概率。此外，量富征信还将基于进件的风险高低对其准入，风险定价以及授信额度给出决策建议。
            </p>
            <h4>云审批决策服务可帮助您</h4>
            <p>1）标准化审批流程</p>
            <p>2）控制欺诈风险与信用风险，减少损失</p>
            <p>3）降低审批成本，提升审批效率</p>
        </div>
        <div class="btn-box">
            <a class="btn" href="javascript:;" @click="myModel=true">我要申请</a>
        </div>
        <CompanyTechBox v-model="myModel" title="云风控平台" moduleType="2202"></CompanyTechBox>
    </div>
</template>

<script>
import CompanyTechBox from '@/components/CompanyTechBox'
export default {
    data() {
        return {
            myModel: false
        }
    },
    components:{
        CompanyTechBox
    }
}
</script>>
<style scoped>
.xing-box .yfkpt .banner {
    width: 7.5rem;
    height: 2.1rem;
    background: url(/static/images/company_finance_banner02.png) no-repeat center center;
    background-size: 7.5rem 2.1rem;
}
</style>
