<template>
    <div>
        <z-header goBack='true' headTitle="走进金服"></z-header>
         <!--内容-->
        <div class="container enter-common-container enter-aboutus-container">
            <h2>公司介绍<span>ABOUT  US</span></h2>
            <p>复星集团“以家庭客户为中心”、“深耕健康、快乐、富足，通过深度产业运营、整合和投资，智造复星C2M幸福生态系统”为愿景与使命，作为复星富足板块的重要组成部分，复星金服秉承与贯彻集团战略，提供领先的信贷、财富、科技等一系列金融服务。</p>
            <p class="mt40">目前，复星金服的核心企业包括星联保理、广信小贷、云通小贷、星灵资产、创富租赁、量富征信等，其他关联企业包括商盟支付等。以复星钱包为支付入口，征信、大数据、云风控运用为科技核心，嫁接复星健康、快乐等集团资源，通过金融服务，为产业助力，为板块赋能，致力于打造一个服务于中国千百万高成长、高价值家庭的消费金融平台，致力于发展成为一家汇聚产业深度、全球广度和科技高度的领先的综合性金融服务集团
            </p>
            <h4>共创 “ <span>  健康、快乐、易金融   </span> ” 。</h4>
            <h3>金服家园</h3>
            <div class="family">
                <div class="first-line text-center">
                    <a href="javascript:;"><img src="/static/images/enter_logo01.png" alt="信贷业务"></a>
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
        <z-footer class="enter_aboutus_footer"></z-footer>
        <!--模态框公司详情-->
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al1" @click="zDetarget('al1')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_cfzl.png" alt="" class="img-cfzl1">
                </div>
                <h2>创富租赁</h2>
                <p>创富融资租赁（上海）有限公司是（复星集团旗下）一家专业汽车融资租赁公司，总部位于上海。截至目前，创富融资租赁已在全国20个省（直辖市）设立了47家分公司，成为第三方汽车融资租赁服务提供商中的龙头企业。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al2" @click="zDetarget('al2')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_fxytxd.png" alt="" class="img-cfzl2">
                </div>
                <h2>云通小贷</h2>
                <p>广州复星云通小额贷款有限公司是（复星集团旗下）一家专注于小微企业在线供应链金融和大数据消费信贷的网络小额贷款公司。公司始终坚持“金融+科技”的发展理念，为小微企业打造便捷高效的融资产品和其它促进经营的金融服务；为个人消费者，提供满足消费需求的现金借贷和消费分期服务。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al3" @click="zDetarget('al3')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_gxxd.png" alt="" class="img-cfzl3">
                </div>
                <h2>广信小贷</h2>
                <p>上海虹口广信小额贷款有限公司是（复星集团旗下）一家专为上海地区的中小企业、个人客户提供经营或消费等贷款及咨询服务的小额贷款公司。公司提供包括供应链金融、个人消费金融、房屋抵押贷款、资金业务等贷款咨询服务，根据每一位客户的情况和需求，量身定制专属贷款方案，解决客户贷款难题,使客户获得最合适的贷款产品。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al4" @click="zDetarget('al4')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_xlbl.png" alt="" class="img-cfzl4">
                </div>
                <h2>星联保理</h2>
                <p>上海星联商业保理有限公司和深圳星联商业保理有限公司是依靠复星集团深厚的产业基础和投资背景，通过多元金融工具的组合与创新，为客户提供综合金融服务的两家综合商业保理有限公司。公司致力于向供应链用户提供专业化的金融服务，并通过多元化的金融工具的组合与创新，为用户提供高效、有价值的综合金融服务(涵盖债权融资、股权投资、IPO辅导、上市等一站式服务)，同时，专注于物流、医疗、工程、钢铁、大宗商品等方面的保理业务。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="modal-common enter-alert-details" v-show="al5" @click="zDetarget('al5')">
                <div class="modal-cfzl">
                    <img src="/static/images/alert_xzl.png" alt="" class="img-cfzl5">
                </div>
                <h2>星灵资产</h2>
                <p>上海星灵资产管理有限公司是复星集团旗下，专注于打造具有产业深度的、多维生态圈的综合互联网投融资平台；以及为各种非标资产提供流动性的交易平台。星灵资产的核心价值观是：以价值投资的理念为指导，以领先的风控和金融手段为保障，筛选出优质资产，为投资人提供多样的金融产品和最好的客户体验。</p>
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
                <p>商盟商务服务有限公司是一家独立的第三方支付平台，复星集团关联企业，总部位于杭州。2011年12月获得了中国人民银行第三批颁发的《支付业务许可证》，是浙江省第三家获得许可的支付机构。公司为国家级高新技术企业、软件企业、中国支付清算协会会员单位。</p>
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
.modal-common p{padding:0rem 1.26rem;text-align: left}	
</style>
