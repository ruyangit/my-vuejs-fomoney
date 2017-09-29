<template>
    <div>
        <z-header goBack='true' headTitle="汽车租赁"></z-header>
        <!--内容-->
        <div class="container company-carlease-container ">
            <h2>创富金融直通车</h2>
            <div class="text-center">
                <img src="/static/images/company_carlease_img01.jpg" alt="汽车租赁">
            </div>
            <p>以专业的产品设计、高效的运营系统、优质的客户服务</p>
            <p>为企业提供专属的汽车金融解决方案</p>
            <p>汽车经销商：库存融资产品、试乘试驾产品</p>
            <p>经营性租赁公司：购车产品</p>
            <p>其他企业：清障车产品、牵引车产品</p>
            <a class="btn" href="javascript:;"   @click="isShow=!isShow">我要申请</a>            
        </div>
        <div class="company-carlease-bg">
            <p class="fs28 text-center c-808080 mt30">服务热线：<a class="a-tel" href="tel:15102155250">400-700-8808</a></p>
        </div>
        <!--弹框-->
        <transition name="fade">
            <div class="apply-box" v-show="isShow">
                <form @submit.prevent="validateBeforeSubmit('myform')" data-vv-scope="myform">
                    <h2>租赁申请入口
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
                                    <input :class="{'input': true, 'is-danger': errors.has('myform.companyName') }" v-validate="'required'" v-model="myform.companyName" type="text" placeholder="请输入企业名称" name="companyName">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="name">
                                        <span>* </span>名称：</label>
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
                                    <textarea name='remarks' v-model="myform.remarks" placeholder="请控制在250个汉字以内" maxlength="250"></textarea>
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
import api from '@api'
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    data() {
        return {
            isShow: false,
            myform: {
                moduleType: '2101',
                companyName: '',
                name: '',
                phone: '',
                remarks: ''
            }
        }
    },
    components: {
        zHeader,
        zFooter
    },
    created() {
        this.defaultData = JSON.parse(JSON.stringify(this.myform));       
        document.body.style.background='#fff';
    },
    methods: {
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
.company-carlease-container h2 {
    padding: 0.45rem 0 1rem;
    font-size: 0.32rem;
    color: #1a1a1a;
    line-height: 1;
}

.company-carlease-container img {
    width: 4.5rem;
    height: 2.56rem;
}

.company-carlease-container p {
    color: #808080;
    font-size: 0.28rem;
    text-align: center;
}

.company-carlease-container .btn {
    width: 5.8rem;
    height: 0.9rem;
    background-color: #00a5fa;
    color: #fff;
    font-size: 0.36rem;
    line-height: 0.9rem;
    margin: 0 auto;
    display: block;
    margin-top: 0.65rem;
}

.company-carlease-bg {
    width: 7.5rem;
    height: 3.8rem;
    background: url(/static/images/company_carlease_img02.jpg) no-repeat center center;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -3.75rem;
    background-size: 7.5rem 3.8rem;
    z-index: -1;
}

.company-carlease-container a.btn {
    position: absolute;
    z-index: 1;
    right: 0;
    left: 0;
}

</style>
