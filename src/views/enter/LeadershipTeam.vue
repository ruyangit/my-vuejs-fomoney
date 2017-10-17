<template>
    <div>
        <!-- 弹框 -->
        <div class="bigImgBox" v-show="showBox">
            <div class="closeBox" @click="hiddenAlert">
                 <img src="/static/images/icon_close.png" alt="关闭">
            </div>           
            <img class="big-team" src="/static/images/team2.jpg" alt="领导团队" >
        </div>
        <!-- 头部 -->
        <z-header goBack='true' headTitle="走进金服"></z-header>
        <!--内容-->
        <div class="container enter-common-container enter-leadership-container">
            <h2>团队介绍</h2> 
                          
        </div>
        <a class="team-banner" @click="showAlert"><img src="/static/images/team.jpg" alt="领导团队"></a>
        <div class="team-content">
            <p>作为复星集团银行板块布局的实施者，我们将坚决贯彻集团“以家庭客户为中心”、“深耕健康、快乐、富足，通过深度产业运营、整合和投资，智造复星C2M幸福生态系统”的战略与愿景，充分利用内外部资源，发挥自我优势，明晰发展战略，致力于将复星金服打造成一个业界一流的金融服务平台。</p>
            <p>“诚信自发、务实精进、助善共达、坦诚齐心”这十六个字，是我们的企业文化。复星金服是一支充满着活力与朝气的队伍，大多数同学都有着多年金融行业的经验，团队中有来自华夏银行、平安银行、招商银行、富国银行、陆金所、万达等知名企业的优秀人才，正是因为有了他们的加入，才使得金服有勇于拓展业务的信心以及创新业务的勇气。</p>
            <p>“做难的事、做对的事、做长远的事”，复星金服的全体同学们将拥抱这个充满挑战与机会的社会，拥抱我们最忠实的用户们，用金服所有人的努力同所有用户们一起迈向更加灿烂辉煌的明天！</p>
        </div>
        <z-footer></z-footer>  
    </div>    
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    data() {
        return {
            showBox: false,
        }
    },
    components: {
        zHeader,
        zFooter
    },
    created() {
        setTimeout(function(){
            $('div.bigImgBox').each(function() {
                console.log(this);
                new RTP.PinchZoom($(this), {});
            });            
            $('.pinch-zoom-container').css({
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                display: 'none'
            })
        },500)
    },
    methods: {
       showAlert () {
           this.showBox = true
           $('.pinch-zoom-container').css({
                display: 'block'
            })
       },
       hiddenAlert () {
           this.showBox = false
           $('.pinch-zoom-container').css({
                display: 'none'
            })
       }
    }
}
</script>
<style scoped>
.enter-leadership-container {
    padding-bottom: 0.3rem;
}

.enter-leadership-container h2 {
    padding-bottom: 0.15rem;
}

.team-banner { 
    width:7.5rem;
    margin:0 auto;
    display:block;
}
.team-banner img{
    width:7.5rem;
    height: 2.05rem;
}
.team-content {
    width: 7.5rem;
    margin: 0 auto;
    padding: 0.3rem 0.3rem 0.5rem;
}
.team-content p {
    font-size: 0.24rem;
    color: #808080;
    line-height: 1.8;
}


div.bigImgBox,
div.bigImgBox img {
    width: 100%;
    -webkit-user-drag: none;
}
div.bigImgBox {
    position:absolute;
    left:0;
    right:0;
    top:0;
    bottom:0;
    background:rgba(0,0,0,1);
    z-index:60;
}
div.bigImgBox .big-team {
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
}
.closeBox {
    text-align: right;
    line-height: 1rem;
    padding-right: 0.3rem;
}
.bigImgBox .closeBox img {
    width: 0.44rem;
    height: 0.44rem;
}
</style>
