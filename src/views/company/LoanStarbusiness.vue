<template>
  <div class="item sbe active">
      <div class="banner"></div>
      <div class="content">
          <p class="detail">复星金服“星商贷”是以银联POS机交易流水为依据，为小微商户发放的一种纯信用贷款，用于解决其生产经营活动过程中的流动资金需求。</p>
          <h3>产品优势</h3>
          <ul>
              <li>
                  <p class="texcolor">授信期限长</p>
                  <p class="color">额度及用款期限最长可达12个月；</p>
              </li>
              <li>
                  <p class="texcolor">无需抵押</p>
                  <p class="color">以实际经营、家庭资产、个人信用等作为授信依据；</p>
              </li>
              <li>
                  <p class="texcolor" >方便快捷</p>
                  <p class="color">审批简便、放款快捷，审批通过后闪电放款；</p>
              </li>
              <li>
                  <p class="texcolor">授信额度高</p>
                  <p class="color">授信最高达50万元。</p>
              </li>
          </ul>
          <p class="fs28 c-808080 mt20">服务热线：<a class="a-tel" href="tel:400-700-8808">400-700-8808</a></p>
      </div>
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
.sbe .banner{width: 7.5rem;height: 2.1rem;background: url(/static/images/company_sbe_banner.png) no-repeat center center;background-size: 7.5rem 2.1rem;}
.sbe .content{padding: 0.4rem 0.3rem 0 0.3rem}
.sbe .content .detail{font-size: 0.32rem}
.sbe .content h3{font-size: 0.28rem;margin-top: 0.2rem}
.sbe .content ul li{font-size: 0.24rem;margin-top: 0.2rem}
.sbe .content ul li .texcolor{color: #c9a96e}
.sbe .content ul li .color{color:#808080}
</style>


