<template>
    <div class="item blyw active">
        <div class="banner"></div>
        <div class="txt-content">
            <h4>贸易融资</h4>
            <p>基于卖方因提供商品、服务或者出租资产而形成的应收账款权利，向卖方提供的短期融资服务，保理方向卖方提供融资，应收账款为第一还款来源。
            </p>
            <h4>销售分户账管理</h4>
            <p>星联保理向卖方提供的对因销售产生的分户应收账款回收管理、账款逾期管理、信用额度管理、财务统计报表管理等服务。</p>
            <h4>应收账款管理与催收</h4>
            <p>从卖方将货物或服务提供给买方，自债权成立开始，到款项实际收回或作为坏账处理结束，保理方运用企业开发的账务管理系统和综合工具，对应收账款回收全过程进行的管理。其目的是保证足额、及时收回应收账款，降低和避免企业的信用风险和经营风险。</p>
            <h4>买方信用额度担保</h4>
            <p>根据买方的资信情况，给予买方核定具体的授信额度，在此额度内核心客户（卖方）如因买方原因无法正常收款，保理方可以全额赔付。</p>
            <p class="fs28 mt30">服务热线：<a class="a-tel" href="tel:15102155250">400-700-8808</a></p>
        </div>
        <div class="btn-box">
            <a class="btn" href="javascript:;"  @click="isShow=!isShow">我要申请</a>
        </div>
        <!--弹框-->
        <transition name="fade">
            <div class="apply-box" v-show="isShow">
                <form @submit.prevent="validateBeforeSubmit('myform')" data-vv-scope="myform">
                    <h2>申请保理业务
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
                                        <span>* </span>联系人：</label>
                                </td>
                                <td>
                                    <input :class="{'input': true, 'is-danger': errors.has('myform.name') }" v-validate="'required'" v-model="myform.name" type="text" placeholder="请输入联系人" name="name">
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
import api from '@api'
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    data() {
        return {
            isShow: false,
            myform: {
                moduleType: '2002',
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
    },
    methods: {
        async validateBeforeSubmit(scope) {
            this.$validator.validateAll(scope).then(result => {
                if (result) {
                    api.post('/v1/comcompany/save', this.myform).then(response => {
                        if (response.status == 200 && response.data.code == 200) {
                            alert('提交申请成功！');
                            this.defaultData = Object.assign(this.myform, this.defaultData)
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
.xing-box .blyw .banner {
    width: 7.5rem;
    height: 2.1rem;
    background: url(/static/images/company_blyw_banner.png) no-repeat center center;
    background-size: 7.5rem 2.1rem;
}

.xing-box .blyw .txt-content p {
    padding-top: 0
}

.xing-box .blyw .txt-content h4 {
    padding: 0.4rem 0 0.2rem 0;
}
</style>
