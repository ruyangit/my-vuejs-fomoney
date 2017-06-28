<template>
    <div class="item ptd active">
        <div class="banner"></div>
        <div class="txt-content">
            <h3 class="mt40">
                <label>全线上：</label>
                <span>从申请到放款，全线上完成</span>
            </h3>
            <h3>
                <label>超高额度：</label>
                <span>最高可借500万</span>
            </h3>
            <h3>
                <label>超低日息：</label>
                <span>按日计息，最低至万分之2.49</span>
            </h3>
            <h3>
                <label>随借随还：</label>
                <span>60天内随借随还</span>
            </h3>
            <p>基于小企业经营收入，经营稳定性，企业主个人征信等结构化数据做综合风险评定，向小企业主提供贷款服务。
            </p>
            <h4>合作平台</h4>
            <div class="icon-box clearfix">
                <div class="iconitem">
                    <img src="/static/images/company_ptd_icon01.png" alt="亚马逊">
                </div>
                <div class="iconitem">
                    <img src="/static/images/company_ptd_icon02.png" alt="帮">
                </div>
                <div class="iconitem">
                    <img src="/static/images/company_ptd_icon03.png" alt="构家">
                </div>
                <div class="iconitem">
                    <img src="/static/images/company_ptd_icon04.png" alt="钢银电商">
                </div>
            </div>
        </div>
        <div class="btn-box">
            <a class="btn" href="javascript:;"  @click="isShow=!isShow">我要申请</a>
        </div>
        <!--弹框-->
        <transition name="fade">
            <div class="apply-box" v-show="isShow">
                <form @submit.prevent="validateBeforeSubmit('myform')" data-vv-scope="myform">
                    <h2>申请平台贷
                        <img class="btn-close" src="/static/images/icon_close.png" alt="关闭" @click="isShow=!isShow">
                    </h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label for="name">
                                        <span>* </span>您的姓名：</label>
                                </td>
                                <td>
                                    <input :class="{'input': true, 'is-danger': errors.has('myform.name') }" v-validate="'required'" v-model="myform.name" type="text" placeholder="请输入姓名" name="name">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="phone">
                                        <span>* </span>手机号：</label>
                                </td>
                                <td>
                                    <input :class="{'input': true, 'is-danger': errors.has('myform.phone') }" v-validate="'required|phone'" v-model="myform.phone" type="text" placeholder="请输入手机号" name="phone">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="gender">
                                        <span>* </span>性别：</label>
                                </td>
                                <td>
                                    <select name="sex" v-model="myform.sex">
                                        <!--<option value="">---请选择性别---</option>-->
                                        <option value="1">男士</option>
                                        <option value="2">女士</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="platform">
                                        <span>* </span>来自平台：</label>
                                </td>
                                <td>
                                    <select name="platform" v-model="myform.platform">
                                        <option value="1">&nbsp;Amazon</option>
                                        <option value="2">&nbsp;药师帮</option>
                                        <option value="3">&nbsp;构家网</option>
                                        <option value="4">&nbsp;钢银电商</option>
                                    </select>
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
                    <p>* 请填写您的基本资料，提交申请后，我们会在1个工作日内和您联系！</p>
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
                moduleType: '2001',
                name: '',
                sex: '1',
                phone: '',
                platform: '1',
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
/*平台贷*/

.xing-box .ptd .banner {
    width: 7.5rem;
    height: 2.1rem;
    background: url(/static/images/company_ptd_banner.png) no-repeat center center;
    background-size: 7.5rem 2.1rem;
}

.xing-box .ptd h4 {
    padding: 0.6rem 0 0.35rem;
}

.xing-box .ptd .txt-content .icon-box {
    padding-top: 0;
}

.xing-box .ptd .txt-content .icon-box .iconitem img {
    width: 1rem;
    height: 1.1rem;
}
</style>
