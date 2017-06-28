<template>
    <!--反欺诈产品-->
    <div class="item fqzcp active">
        <div class="banner"></div>
        <div class="txt-content">
            <p class="txt-p">反欺诈服务是量富征信为商户提供的一套综合解决方案，通过身份验证、号码信息、位置核验、金融信息分析以及关注名单库过滤等手段，利用先进的反欺诈模型对海量数据的进行全方位评估，来综合验证申请者是否具有欺诈的嫌疑，为商户甄别高危风险用户，排除恶意欺诈、信息造假、薅羊毛等潜在可能性的用户，从而帮助商户创造价值。
            </p>
            <h4>反欺诈服务帮助您</h4>
            <p>1）识别欺诈用户，降低业务风险</p>
            <p>2）差异化开展营销活动，更有效率地创造价值</p>
        </div>
        <div class="btn-box">
            <a class="btn" href="javascript:;" @click="myModel=true">我要申请</a>
        </div>
        <CompanyTechBox v-model="myModel" title="反欺诈产品" moduleType="2203"></CompanyTechBox>
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
.xing-box .fqzcp .banner {
    width: 7.5rem;
    height: 2.1rem;
    background: url(/static/images/company_finance_banner03.png) no-repeat center center;
    background-size: 7.5rem 2.1rem;
}
</style>
