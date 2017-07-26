<template>
    <div>
        <z-header goBack='true' headTitle="走进金服"></z-header>
        <!--内容-->
        <div class="container enter-common-container enter-leadership-container">
            <h2>领导团队
                <span>LEADERSHIP TEAM</span>
            </h2>
            <ul class="clearfix">
                <li @click="zDetarget('al1')">
                    <a class="leader-guxiaoxu" href="javascript:;">
                        <div class="txt-intro">
                            <h3>辜校旭</h3>
                            <h5>复星集团副总裁</h5>
                            <h5>银行集团总裁</h5>
                        </div>
                    </a>
                </li>
                <li @click="zDetarget('al2')">
                    <a class="leader-shenzhihua ml50" href="javascript:;">
                        <div class="txt-intro">
                            <h3>申志华</h3>
                            <h5>复星金服执行总裁</h5>
                        </div>
                    </a>
                </li>
                <li @click="zDetarget('al5')">
                    <a class="leader-wangjunjie" href="javascript:;">
                        <div class="txt-intro">
                            <h3>王俊杰</h3>
                            <h5>复星金服总裁助理</h5>
                            <h5>创富融资租赁(上海)有限公司总裁</h5>
                        </div>
                    </a>
                </li>
                <li @click="zDetarget('al4')">
                    <a class="leader-yuanweimin ml50" href="javascript:;">
                        <div class="txt-intro">
                            <h3>袁伟民</h3>
                            <h5>复星金服总裁助理</h5>
                            <h5>科技开发与管理部总经理</h5>
                        </div>
                    </a>
                </li>
                <li @click="zDetarget('al3')">
                    <a class="leader-liupeng" href="javascript:;">
                        <div class="txt-intro">
                            <h3>刘鹏</h3>
                            <h5>复星金服总裁助理</h5>
                            <h5>市场与客户服务部总经理</h5>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <z-footer></z-footer>
    
        <!--模态框leader详情-->
        <transition name="fade">
            <div class="enter-alert-details modal-common-leader" v-show="al1" @click="zDetarget('al1')">
                <img src="/static/images/leader_guxiaoxu.png" alt="辜校旭">
                <h2>辜校旭</h2>
                <h5>复星集团副总裁</h5>
                <h5>银行集团总裁</h5>
                <p>辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。她所带领团队分别于2012、2013、2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行、上海通联金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="enter-alert-details modal-common-leader" v-show="al2" @click="zDetarget('al2')">
                <img src="/static/images/leader_shenzhihua.png" alt="申志华">
                <h2>申志华</h2>
                <h5>复星金服执行总裁</h5>
                <p>中国人民银行总行征信中心特聘专家；注册金融分析师(CFA)；并于2015年入选上海市千人计划。申志华先生曾任中国平安银行零售风险技术总监兼大数据决策管理部总经理、中国民生银行风险管理部副总经理、美国富国银行风险管理部副总裁、美国运通银行信用卡风险管理部高级研究员等职。申志华先生长期从事数据挖掘、商业银行风险管理、中小企业金融服务、量化模型、信贷工厂建设等工作。申志华先生拥有美国加州大学伯克利分校经济学博士和统计学硕士学位，多次在美国世界一流的计量经济学和经济学刊物发表论文。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="enter-alert-details modal-common-leader" v-show="al5" @click="zDetarget('al5')">
                <img src="/static/images/leader_wangjunjie.png" alt="王俊杰">
                <h2>王俊杰</h2>
                <h5>复星金服总裁助理</h5>
                <h5>创富融资租赁（上海）有限公司总裁</h5>
                <p>毕业于美国杜克大学MBA，注册金融分析师（CFA）。曾任汇丰银行深圳分行和武汉分行的副行长、麦肯锡管理咨询有限公司北京和上海分公司项目经理、科誉高瞻融资租赁有限公司首席财务官兼首席运营官、海航资本投资银行部总经理助理。2014年8月至今，任复星集团融资租赁发展部总经理。现为复星金服总裁助理兼创富融资租赁（上海）有限公司总裁。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="enter-alert-details modal-common-leader modal-leader-guxiaoxu" v-show="al4" @click="zDetarget('al4')">
                <img src="/static/images/leader_yuanweimin.png" alt="袁伟民">
                <h2>袁伟民</h2>
                <h5>复星金服总裁助理</h5>
                <h5>科技开发与管理部总经理</h5>
                <p>二十年金融和IT行业工作经验，长期负责国内金融相关公司的战略规划、业务运营、系统研发和相关公司管理工作。曾主导并参与多个大型交易系统、证券业务系统的建设和实施，如陆金所金融资产交易平台LFEX、平安交易所金融资产和商品交易系统、上海证券交易所NGTS新一代交易系统、上海期货交易所NGES新一代交易系统、上海期货交易所电子仓单系统、中国证券登记结算公司ACTS咨询服务项目等。从2011年开始，长期负责大型互联网移动APP和核心金融业务系统的统一运营、研发和运维和安全管理工作。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="enter-alert-details modal-common-leader" v-show="al3" @click="zDetarget('al3')">
                <img src="/static/images/leader_liupeng.png" alt="刘鹏">
                <h2>刘鹏</h2>
                <h5>复星金服总裁助理</h5>
                <h5>市场与客户服务部总经理</h5>
                <p>刘鹏先生先后在中国工商银行天津分行、中国建设银行总行、中国银联总公司、上海银行总行、万达金融集团、万达网络科技集团工作多年，金融工作经验丰富，曾多年在商业银行和万达集团任高级管理职位，其主持开发的金融产品和主持策划开展的大型营销活动先后获得十多次业内专业奖项。在学术方面，刘鹏先生著作出版《银行卡产品研发和客户忠诚度管理》、合著出版《银行卡服务营销理论与实务》。</p>
            </div>
        </transition>
    </div>
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    data() {
        return {
            al1: false,
            al2: false,
            al3: false,
            al4: false,
            al5: false,
        }
    },
    components: {
        zHeader,
        zFooter
    },
    methods: {
        zDetarget(al) {
            if (al === "al1") {
                this.al1 = !this.al1
            } else if (al === "al2") {
                this.al2 = !this.al2
            } else if (al === "al3") {
                this.al3 = !this.al3
            } else if (al === "al4") {
                this.al4 = !this.al4
            } else if (al === "al5") {
                this.al5 = !this.al5
            }
        }
    }
}
</script>
<style scoped>
.enter-leadership-container {
    padding-bottom: 1.3rem;
}

.enter-leadership-container h2 {
    padding-bottom: 0.15rem;
}

.enter-leadership-container ul li {
    float: left;
}

.enter-leadership-container ul li a {
    display: block;
    width: 3.2rem;
    height: 3.6rem;
    margin-top: 0.3rem;
    color: #fff;
    position: relative;
}

.enter-leadership-container ul li a.leader-guxiaoxu {
    background: url(/static/images/leader_guxiaoxu.png) no-repeat center center;
    background-size: 3.2rem 3.6rem;
    background-color: #f8f8f8;
}

.enter-leadership-container ul li a.leader-shenzhihua {
    background: url(/static/images/leader_shenzhihua.png) no-repeat center center;
    background-size: 3.2rem 3.6rem;
    background-color: #f8f8f8;
}

.enter-leadership-container ul li a.leader-liupeng {
    background: url(/static/images/leader_liupeng.png) no-repeat center center;
    background-size: 3.2rem 3.6rem;
    background-color: #f8f8f8;
}

.enter-leadership-container ul li a.leader-wangjunjie {
    background: url(/static/images/leader_wangjunjie.png) no-repeat center center;
    background-size: 3.2rem 3.6rem;
    background-color: #f8f8f8;
}

.enter-leadership-container ul li a.leader-yuanweimin {
    background: url(/static/images/leader_yuanweimin.png) no-repeat center center;
    background-size: 3.2rem 3.6rem;
    background-color: #f8f8f8;
}

.enter-leadership-container ul li .txt-intro {
    width: 3.2rem;
    height: 1.4rem;
    background-color: rgba(0, 0, 0, .6);
    text-align: center;
    position: absolute;
    bottom: 0;
    left: 0;
}

.enter-leadership-container ul li .txt-intro h3 {
    line-height: 1;
    font-size: 0.32rem;
    padding: 0.1rem 0;
}

.enter-leadership-container ul li .txt-intro h5 {
    line-height: 1.2;
    font-size: 0.2rem;
}
















/*弹出层*/

.modal-common-leader {
    padding-top: 1.4rem;
}

.modal-common-leader img {
    width: 2.9rem;
    height: 3.26rem;
}

.modal-common-leader h2 {
    padding: 0.4rem 0 0.2rem;
    line-height: 1;
    font-size: 0.48rem;
}

.modal-common-leader h5 {
    line-height: 1.2;
    font-size: 0.24rem;
}

.modal-common-leader p {
    padding: 0.3rem 0.64rem;
    line-height: 1.5;
    text-align: left;
}

</style>
