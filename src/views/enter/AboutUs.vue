<template>
    <div>
        <z-header goBack='true' headTitle="走进金服"></z-header>
         <!--内容-->
        <div class="container enter-common-container enter-aboutus-container">
            <h2>公司介绍<span>ABOUT  US</span></h2>
            <p>2016年复星集团初步完成了复星金融服务板块——复星金服的搭建，目前核心企业已有星联保理、广信小贷、云通小贷、星灵财富、创富租赁、量富征信、商盟支付等，以复星钱包为支付入口，征信、大数据、云风控运用为核心，嵌入复星健康、快乐、旅游、地产等资源的场景化服务从而组成信贷、财富管理及金融科技三大事业部。</p>
            <p class="mt40">复星金服，秉承着复星集团的价值观，努力搭建服务于千百万中国新中产家庭的民生金融和消费服务平台，致力于帮助和促进家庭的消费升级与资产增值。依靠复星集团的巨大体量以及资源支持，努力发展成为一家汇聚产业深度、全球广度和科技高度的领先的综合性金融服务集团，为社会公众提供更好的金融生活服务。</p>
            <h4>共创 “ <span>  健康、快乐、易金融   </span> ” 。</h4>
            <h3>金服家园</h3>
            <div class="family">
                <div class="first-line text-center">
                    <a href="javascript:;"><img src="/static/images/enter_logo01.png" alt="贷款服务"></a>
                    <a class="alert-cfzl" href="javascript:;" @click="zDetarget('al1')"><img src="/static/images/enter_logo02.png" alt="Great China"></a>
                    <a href="javascript:;" @click="zDetarget('al2')"><img src="/static/images/enter_logo03.png" alt="复星云通小贷"></a>
                </div>
                <div class="second-line text-center">
                    <a href="javascript:;" @click="zDetarget('al3')"><img src="/static/images/enter_logo04.png" alt="广信小贷"></a>
                    <a href="javascript:;" @click="zDetarget('al4')"><img src="/static/images/enter_logo05.png" alt="星联保理"></a>
                    <a href="javascript:;" @click="zDetarget('al5')"><img src="/static/images/enter_logo06.png" alt="星之灵"></a>
                    <a href="javascript:;"><img src="/static/images/enter_logo07.png" alt="财富管理"></a>
                </div>
                <div class="three-line text-center">
                    <a href="javascript:;"><img src="/static/images/enter_logo08.png" alt="金融科技"></a>
                    <a href="javascript:;" @click="zDetarget('al6')"><img src="/static/images/enter_logo09.png" alt="量富征信"></a>
                    <a href="javascript:;" @click="zDetarget('al7')"><img src="/static/images/enter_logo10.png" alt="统统付"></a>
                </div>
            </div>
        </div>
        <!--背景-->
        <div class="enter_aboutus_bg"></div>
        <z-footer></z-footer>
        <!--模态框公司详情-->
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al1" @click="zDetarget('al1')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_cfzl.png" alt="" class="img-cfzl1">
                </div>
                <h2>创富租赁</h2>
                <p>创富融资租赁（上海）有限公司是复星集团旗下一家专业汽车融资租赁公司，于2010年2月正式成立，总部位于上海。截至目前，创富已为超过2万名个人或企业客户提供近1万辆中高端乘用车的融资租赁服务，成为第三方汽车融资租赁服务提供商中的龙头企业。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al2" @click="zDetarget('al2')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_fxytxd.png" alt="" class="img-cfzl2">
                </div>
                <h2>云通小贷</h2>
                <p>广州复星云通小额贷款有限公司是复星集团旗下一家专注于小微企业在线供应链金融和大数据消费信贷的网络小额贷款公司。复星云通小贷始终坚持“金融+科技”的发展理念，通过互联网和大数据挖掘技术，为小微企业打造便捷高效的融资产品和其它促进经营的金融服务；而对个人消费者，复星云通小贷将提供满足消费需求的现金借贷和消费分期服务。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al3" @click="zDetarget('al3')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_gxxd.png" alt="" class="img-cfzl3">
                </div>
                <h2>广信小贷</h2>
                <p>上海虹口广信小额贷款有限公司是复星集团旗下专为上海地区的中小企业、个人客户提供经营或消费等贷款及咨询服务的小额贷款公司。公司专为上海地区的中小企业及个人客户提供供应链金融、个人消费金融、房屋抵押贷款、资金业务等贷款咨询服务，秉承服务至上和严谨细致的经营理念，根据每一位客户的情况和需求，量身定制专属贷款方案，解决客户贷款难题,使客户获得最合适的贷款产品。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al4" @click="zDetarget('al4')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_xlbl.png" alt="" class="img-cfzl4">
                </div>
                <h2>星联保理</h2>
                <p>上海星联商业保理有限公司和深圳星联商业保理有限公司是复星集团旗下，并依靠集团深厚的产业基础和投资背景，通过多元金融工具的组合与创新，为客户提供综合金融服务的两家综合商业保理有限公司。依靠集团深厚的产业基础，卓越的投资能力，多元化的资金渠道，星联保理致力于向供应链客户提供专业化金融服务能力，发展供应链金融，通过多元金融工具的组合与创新，为客户提供高效、有价值的综合金融服务(涵盖债权融资、股权投资、IPO辅导、上市等一站式服务)，专注于物流、医疗、工程、钢铁、大宗商品等方面的保理业务。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al5" @click="zDetarget('al5')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_xzl.png" alt="" class="img-cfzl5">
                </div>
                <h2>星灵资产</h2>
                <p>上海星灵资产管理有限公司是复星集团旗下，专注于打造具有产业深度的、多维生态圈的综合互联网投融资平台；以及为各种非标资产提供流动性的交易平台。星灵财富的核心价值观是：以价值投资的理念为指导，以领先的风控和金融手段为保障，筛选出优质资产，为投资人提供多样的金融产品和最好的客户体验。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al6" @click="zDetarget('al6')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_lfzx.png" alt="" class="img-cfzl6">
                </div>
                <h2>量富征信</h2>
                <p>量富征信管理有限公司是复星集团旗下独立的第三方征信公司，主营业务为企业征信，并已获得企业征信业务经营备案证。融合集团内外各类数据，采用国内外领先的建模技术，量富征信推出四大征信产品：企业征信解决方案、云风控平台、反欺诈产品和信用风险管理咨询，并与金融风控，供应链管理，旅游一体化等领域的众多机构建立深入合作。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al7" @click="zDetarget('al7')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_ttf.png" alt="" class="img-cfzl7">
                </div>
                <h2>商盟商务</h2>
                <p>商盟商务服务有限公司是复星集团旗下的独立第三方支付平台，总部位于杭州。2011年12月获得了中国人民银行第三批颁发的《支付业务许可证》，是浙江省第三家获得许可的支付机构。旗下推出的第三方支付APP——复星钱包，现已作为复星集团的支付入口，产品涵盖了复星集团的富足、健康、快乐三大板块。</p>
            </div>
        </transition>
    </div>
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    data(){
        return{
            al1:false,
            al2:false,
            al3:false,
            al4:false,
            al5:false,
            al6:false,
            al7:false
        }
    },
    components:{
        zHeader,
        zFooter
    },
    methods:{
        zDetarget(al) {
            if (al === "al1") {
                this.al1 = !this.al1
            } else if (al === "al2") {
                this.al2 = !this.al2
            } else if (al === "al3") {
                this.al3 = !this.al3
            } else if (al === "al4") {
                this.al4 = !this.al4
            }else if(al==="al5"){
                this.al5=!this.al5
            }else if(al==="al6"){
                this.al6=!this.al6
            }else if(al==="al7"){
                this.al7=!this.al7
            }
        }
    }
}
</script>
<style scoped>
.enter-aboutus-container p{font-size:0.24rem;color:#808080;line-height:1.5;}
.enter-aboutus-container h3,.enter-aboutus-container h4{font-size:0.32rem;text-align:center;line-height:1;}
.enter-aboutus-container h4{color:#808080;padding:0.35rem 0 0.66rem;}
.enter-aboutus-container h4 span{color:#1a1a1a;font-weight:bold;}
.enter-aboutus-container h3{color:#1a1a1a;padding-bottom:0.2rem;}
.enter-aboutus-container .family a{width:1.65rem;height:1.95rem;display:inline-block;}
.enter-aboutus-container .family a img{width:1.65rem;height:1.95rem;}
.enter-aboutus-container .family .second-line,.enter-aboutus-container .family .three-line{margin-top:-0.4rem;}
.enter_aboutus_bg{background:url(/static/images/enter_aboutus_bg.jpg) no-repeat center center;background-size:7.5rem 4.82rem;width:7.5rem;height:4.82rem;margin:-0.8rem auto 0;}
.enter_aboutus_footer{margin-top:-1.4rem;}
/*模态框公司详情*/
.modal-common{padding-top:2.6rem;}
.modal-cfzl .img-cfzl1{width:2.35rem;height:0.75rem;}
.modal-cfzl .img-cfzl2{width: 1.31reme;height: 0.17rem}
.modal-cfzl .img-cfzl3{width: 1.32rem;height: 0.4rem}
.modal-cfzl .img-cfzl4{width: 1.25rem;height: 0.29rem}
.modal-cfzl .img-cfzl5{width: 1.42rem;height: 0.38rem}
.modal-cfzl .img-cfzl6{width:1.43rem;height:0.32rem }
.modal-cfzl .img-cfzl7{width:1.37rem;height:0.4rem }
.modal-common h2{font-size:0.36rem;line-height:1;padding:0.2rem 0 0.9rem;}
.modal-common p{padding:0rem 1.26rem;}	
</style>
