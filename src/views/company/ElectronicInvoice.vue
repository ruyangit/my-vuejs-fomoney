<template>
  <div style="position:relative;">
      <z-header goBack='true' headTitle="电子发票"></z-header>
      <div class="eti">
         <div class="banner"></div>
         <div class="apply">
            <ul>
              <li class="fl">
                <h2>企业</h2>
                <span class="line"></span>
                <p>更高效&nbsp;更省钱</p>
              </li>
              <li class="fr">
                <h2>税务</h2>
                <span class="line"></span>
                <p>更安全&nbsp;更全面</p>
              </li>
              <li class="fl user">
                <h2>用户</h2>
                <span class="line"></span>
                <p>更方便&nbsp;更贴心</p>
              </li>
            </ul>
            <a class="btn" href="javascript:;" @click="isShow=!isShow">我要申请</a>
         </div>
         <div class="detail-content">
            <p class="introduce"><a>电子发票</a>是随着社会不断进步、网络高速发展以及电子商务快速崛起而产生的，在电子发票上附有电子税局的签名机制，而税局则通过电子发票数据的产生、流转、查验和应用，实现“以票控税”向“信息管税”的过渡。复星金服电子发票服务，助力复星ONE FOSUN战略，从价值链形成服务闭环到形成开放的生态圈，强化产业能力和服务用户能力。</p>
            <p class="advantage">特点与优势</p>
            <ul>
              <li>
                <span class="fl left">省</span>
                <span class="fr right">“云+端” 税务信息化应用，大幅降低企业应用成本；减免发票管理过程中的繁冗环节，从而提升企业运营效率。</span>
              </li>
              <li>
                <span class="fl left">快</span>
                <span class="fr right">实现所有开具业务环节向线上迁移，优化客户体验增加企业运营效率；多层级机构开票数据统一汇总统一管理，为企业决策提供依据。</span>
              </li>
              <li>
                <span class="fl left">稳</span>
                <span class="fr right">采用多种身份认证，全方位、高科技保证企业数据安全；满足企业内控需求支持复杂的业务系统无缝对接；有效规避传统票据在传递中可能产生的税收管理风险。</span>
              </li>
            </ul>
            <p class="advantage">为什么选择我们</p>
            <ol>
              <li>
                <p class="title">安全性</p>
                <p class="detail">任何发票数据均由集团统一管理，确保数据安全</p>
              </li>
              <li>
                <p class="title">权威性</p>
                <p class="detail">基于专业的技术架构打造的平台，拥有领先的技术和税务体系的服务支持</p>
              </li>
              <li>
                <p class="title">经济性</p>
                <p class="detail">电子发票大大降低了开票场景中的人工成本</p>
              </li>
              <li>
                <p class="title">定制化</p>
                <p class="detail">具备强大的技术力量，根据企业的不同特性提供贴合业务需求的方案开发</p>
              </li>
              <li>
                <p class="title">便捷化</p>
                <p class="detail">无论是在线远程还是现场开票，用户获得发票途径更丰富、更方便</p>
              </li>
              <li>
                <p class="title">用户经营</p>
                <p class="detail">提供从电子发票到整合营销经营的全套方案，帮助客户实现用户从线下到线上的联通</p>
              </li>
            </ol>
         </div>
      </div>
      <z-footer></z-footer>
      <transition name="fade">
         <div class="apply-box" v-show="isShow">
           <form @submit.prevent="validateBeforeSubmit('myform')" data-vv-scope="myform">
              <h2>申请电子发票
                  <img class="btn-close" src="/static/images/icon_close.png" alt="关闭" @click="isShow=!isShow">
              </h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label for="name">
                      <span>* </span>企业名称：</label>
                    </td>
                    <td>
                      <input :class="{'input':true,'is-danger':errors.has('myform.companyName')}"  v-validate="'required'" v-model="myform.companyName" type="text" placeholder="请输入企业名称" name="companyName">
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label for="name">
                      <span>* </span>联系人：</label>
                    </td>
                    <td>
                      <input :class="{'input': true, 'is-danger': errors.has('myform.name') }" v-validate="'required'" v-model="myform.name" type="text" placeholder="请输入名称" name="name">
                    </td>
                  </tr>
                  <tr>
                    <td>
                       <label for="phone">
                       <span>* </span>电话：</label>
                     </td>
                     <td>
                        <input :class="{'input': true, 'is-danger': errors.has('myform.phone') }" v-validate="'required|phone'" v-model="myform.phone" type="text" placeholder="请输入电话" name="phone">
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <label for="">备注（选填）：</label>
                     </td>
                     <td>
                        <textarea name='remarks' v-model="myform.remarks" placeholder="请控制在250个汉字以内"></textarea>
                     </td>
                  </tr>
                  <tr>
                    <td colspan="2" align="center">
                      <input class="btn" type="submit" value="提交申请">
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>* 请填写您的基本资料，提交申请后，我们会在3个工作日内和您联系！</p>
           </form>
         </div>
      </transition>
  </div>
</template>
<script>
import api from "@api"
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
  data(){
    return{
      isShow:false,
      myform:{
        moduleType: '2301',
        companyName: '',
        name: '',
        phone: '',
        remarks: ''
      }
    }
  },
  components:{
      zHeader,
      zFooter
  },
  created(){
    this.defaultData = JSON.parse(JSON.stringify(this.myform));
  },
  methods:{
    async validateBeforeSubmit(scope) {
            this.$validator.validateAll(scope).then(result => {
                if (result) {
                    api.post('/v1/comcompany/save', this.myform).then(response => {
                        if (response.status == 200 && response.data.code == 200) {
                            alert('提交申请成功！');
                            Object.assign(this.myform, this.defaultData)
                            this.isShow = false
                        }
                    });
                } else {
                    alert('请将表单填写完整！');
                    return
                }
            }).catch(() => {
            });
     }
  }
}
</script>

<style scoped>
.eti{width: 7.5rem;margin: 0 auto;padding-top: 0.8rem;position: relative}
.eti .banner{background: url(/static/images/company_electronic_invoice.png) no-repeat center;background-size: 7.5rem 4.5rem;width: 7.5rem;height:4.5rem;}
.eti .apply{width: 6.5rem;height: 2.8rem;background-color: #fff;box-shadow:0 0 8px #f4f4f4;position:absolute;top:3.3rem;left: 0.5rem;padding: 0.35rem 0.45rem 0.3rem 0.45rem}
.eti .apply ul li h2{font-size: 0.4rem;color:#c9a96e}
.eti .apply ul li p{font-size: 0.24rem}
.eti .apply ul li .line{display: block;width:0.45rem;border-top: 0.05rem solid #c9a96e;position: absolute;top: 0.7rem;left:0.55rem}
.eti .apply ul li{text-align: center;position: relative}
.eti .apply ul .user{margin-left: 0.52rem}
.eti .apply .btn{width: 5.1rem;height: 0.7rem;margin: 0 auto;margin-left:0.25rem;margin-top:0.2rem;text-align: center;line-height: 0.7rem;background-color: #00a5fa;color: #fff;border-radius: 0.05rem;font-size: 0.32rem}
.eti .detail-content{padding: 1.15rem 0.5rem 0.4rem 0.5rem}
.eti .detail-content{font-size: 0.24rem;color:#808080;}
.eti .detail-content .introduce a{color:#c9a96e;font-size: 0.32rem}
.eti .detail-content .advantage{font-size: 0.32rem;margin-top: 0.2rem;color: black}
.eti .detail-content ul li{overflow:hidden;width: 6.5rem;margin-top: 0.25rem}
.eti .detail-content ul li .left{font-size: 0.32rem;width:0.5rem;color:#c9a96e;position:relative;top: -0.07rem}
.eti .detail-content ul li .right{font-size: 0.24rem;width: 6rem;line-height: 0.4rem}
.eti .detail-content ol{margin-bottom: 0.2rem}
.eti .detail-content ol li .title{font-size: 0.28rem;color:#c9a96e;margin-top: 0.1rem}
.eti .detail-content ol li .detail{line-height: 0.4rem}
</style>

