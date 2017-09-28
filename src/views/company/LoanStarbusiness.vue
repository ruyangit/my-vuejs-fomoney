<template>
  <div class="item sbe active">
      <div class="banner"></div>
      <div class="content">
          <p class="detail">针对银联商务POS收单、专业化服务商户，提供最高达50万元的生产经营信用贷款。</p>
          <h3>产品优势</h3>
          <ul>
              <li>
                  <p class="texcolor">无需抵押</p>
                  <p class="color">无需抵押，以商户POS流水数据作为授信依据；</p>
              </li>
              <li>
                  <p class="texcolor">审批快捷</p>
                  <p class="color">放款速度快，贷款支用审批通过后即放款；</p>
              </li>
              <li>
                  <p class="texcolor" >灵活便利</p>
                  <p class="color">贷款期限长，最长可达12个月，最长授信3年，授信期内可多次使用；</p>
              </li>
              <li>
                  <p class="texcolor">授信额度高</p>
                  <p class="color">个人客户最高达50万元。</p>
              </li>
          </ul>
          <p class="fs28 c-808080 mt20">服务热线：<a class="a-tel" href="tel:15102155250">400-700-8808</a></p>
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


