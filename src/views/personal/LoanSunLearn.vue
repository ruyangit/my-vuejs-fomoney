<template>
    <!--内容-->
    <div class="item xxd active">
        <div class="banner"></div>
        <div class="txt-content">
            <h2>你负责学习，钱是我们的事，2天出款150万。</h2>
            <h3>
                <label>贷款金额：</label>
                <span>不超过150万元</span>
            </h3>
            <h3>
                <label>贷款期限：</label>
                <span>6个月以内</span>
            </h3>
            <h3>
                <label>参考利息：</label>
                <span>7.9% ~ 9.2%</span>
            </h3>
            <h3>
                <label>还款方式：</label>
                <span>等额本息</span>
            </h3>
            <p>主要针对留学的学生提供留学保证金的贷款业务，低门槛、低风险、高效率、纯信用的贷款服务。一款专为在上海市办理出国留学的个人，提供出国留学存款证明类信用贷款，资料齐全后仅需两天即可获得贷款资金。</p>
            <div class="icon-box clearfix">
                <div class="iconitem">
                    <img src="/static/images/personal_xxd_icon01.png" alt="低门槛">
                    <h5>低门槛</h5>
                </div>
                <div class="iconitem">
                    <img src="/static/images/personal_xxd_icon02.png" alt="低风险">
                    <h5>低风险</h5>
                </div>
                <div class="iconitem">
                    <img src="/static/images/personal_xxd_icon03.png" alt="高效率">
                    <h5>高效率</h5>
                </div>
                <div class="iconitem">
                    <img src="/static/images/personal_xxd_icon04.png" alt="纯信用">
                    <h5>纯信用</h5>
                </div>
            </div>
        </div>
        <div class="btn-box">
            <a class="btn" href="javascript:;" @click="myModel=true">我要申请</a>
        </div>
        <PersonalLoanBox v-model="myModel" title="申请星学贷" moduleType="1001"></PersonalLoanBox>
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
.xing-box .xxd .banner {
    width: 7.5rem;
    height: 2.1rem;
    background: url(/static/images/personal_xxd_banner.png) no-repeat center center;
    background-size: 7.5rem 2.1rem;
}

.xing-box .item .txt-content .icon-box .iconitem h5 {
    font-size: 0.2rem;
    color: #1a1a1a;
    line-height: 1;
    padding-top: 0.25rem;
}

.xing-box .item .txt-content .icon-box .iconitem img {
    width: 1rem;
    height: 1.08rem;
}
</style>
