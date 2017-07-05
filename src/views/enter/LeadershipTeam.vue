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
                <li @click="zDetarget('al3')">
                    <a class="leader-wangjunjie" href="javascript:;">
                        <div class="txt-intro">
                            <h3>王俊杰</h3>
                            <h5>复星金服总裁助理</h5>
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
            </ul>
        </div>
        <z-footer></z-footer>
    
        <!--模态框leader详情-->
        <transition name="fade">
            <div class="enter-alert-details modal-common-leader" v-show="al1" @click="zDetarget('al1')">
                <img src="/static/images/leader_guxiaoxu.jpg" alt="辜校旭">
                <h2>辜校旭</h2>
                <h5>复星集团副总裁</h5>
                <h5>银行集团总裁</h5>
                <p>辜校旭女士自2011年加入复星集团以来，一直负责复星银行板块相关金融投资和产业运营事务，具有丰富的管理经验和广阔的金融科技视野。她所带领团队分别于2012、2013、2014年获得复星集团优秀投资团队奖；其个人曾获得2014年度复星集团“杰出经理人”等奖项。加入复星集团前，辜校旭女士先后在华夏银行上海分行、上海通联金融有限公司担任高级管理职务。辜校旭女士于2000年从华东师范大学获得硕士研究生学位。2004年11月获得证券基金从业资格。</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="enter-alert-details modal-common-leader" v-show="al2" @click="zDetarget('al2')">
                <img src="/static/images/leader_shenzhihua.jpg" alt="申志华">
                <h2>申志华</h2>
                <h5>复星金服执行总裁</h5>
                <p></p>
            </div>
        </transition>
        <transition name="fade">
            <div class="enter-alert-details modal-common-leader" v-show="al3" @click="zDetarget('al3')">
                <img src="/static/images/leader_wangjunjie.jpg" alt="王俊杰">
                <h2>王俊杰</h2>
                <h5>复星金服总裁助理</h5>
                <p></p>
            </div>
        </transition>
        <transition name="fade">
            <div class="enter-alert-details modal-common-leader modal-leader-guxiaoxu" v-show="al4" @click="zDetarget('al4')">
                <img src="/static/images/leader_yuanweimin.jpg" alt="袁伟民">
                <h2>袁伟民</h2>
                <h5>复星金服总裁助理</h5>
                <h5>科技开发与管理部总经理</h5>
                <p></p>
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
    background: url(/static/images/leader_guxiaoxu.jpg) no-repeat center center;
    background-size: 3.2rem 3.6rem;
}

.enter-leadership-container ul li a.leader-shenzhihua {
    background: url(/static/images/leader_shenzhihua.jpg) no-repeat center center;
    background-size: 3.2rem 3.6rem;
}

.enter-leadership-container ul li a.leader-wangjunjie {
    background: url(/static/images/leader_wangjunjie.jpg) no-repeat center center;
    background-size: 3.2rem 3.6rem;
}

.enter-leadership-container ul li a.leader-yuanweimin {
    background: url(/static/images/leader_yuanweimin.jpg) no-repeat center center;
    background-size: 3.2rem 3.6rem;
}

.enter-leadership-container ul li .txt-intro {
    width: 3.2rem;
    height: 1.2rem;
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
}
</style>
