<template>
    <transition name="fade">
        <div class="apply-box" v-show="visible">
            <form @submit.prevent="validateBeforeSubmit('myform')" data-vv-scope="myform">
                <h2>{{title}}
                    <img class="btn-close" src="/static/images/icon_close.png" alt="关闭" @click="close()">
                </h2>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label for="companyName">企业名称：</label>
                            </td>
                            <td>
                                <input :class="{'input': true, 'is-danger': errors.has('myform.companyName') }" v-validate="'required'" v-model="myform.companyName" type="text" placeholder="请输入企业名称" name="companyName">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="name">联系人：</label>
                            </td>
                            <td>
                                <input :class="{'input': true, 'is-danger': errors.has('myform.name') }" v-validate="'required'" v-model="myform.name" type="text" placeholder="请输入联系人" name="name">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="phone">电话：</label>
                            </td>
                            <td>
                                <input :class="{'input': true, 'is-danger': errors.has('myform.phone') }" v-validate="'required|phone'" v-model="myform.phone" type="text" placeholder="请输入电话" name="phone">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="cooperative">合作业务：</label>
                            </td>
                            <td>
                                <select name="cooperative" v-model="myform.cooperative">
                                    <option value="2201">企业征信解决方案</option>
                                    <option value="2202">云风控解决方案</option>
                                    <option value="2203">反欺诈解决方案</option>
                                    <option value="2204">信用风险解决方案</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="name">备注：</label>
                            </td>
                            <td>
                                <textarea name="remarks" v-model="myform.remarks"></textarea>
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
</template>

<script>
import api from '@api'
export default {
    name: 'PersonalLoanBox',
    props: {
        title: {
            type: String,
            default: ''
        },
        moduleType: {
            type: String,
            default: ''
        },
        value: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            visible: this.value,
            checklist: [],
            array: [
                '有房',
                '有车',
            ],
            myform: {
                moduleType: this.moduleType,
                companyName: '',
                name: '',
                cooperative: this.moduleType,
                phone: '',
                remarks: ''
            }
        }
    },
    watch: {
        value(val) {
            this.visible = val
        }
    },
    created() {
        this.defaultData = JSON.parse(JSON.stringify(this.myform));
    },
    methods: {
        close() {
            this.visible = false
            this.$emit('input', false)
        },
        async validateBeforeSubmit(scope) {
            this.$validator.validateAll(scope).then(result => {
                if (result) {
                    api.post('/v1/comcompany/save', this.myform).then(response => {
                        if (response.status == 200 && response.data.code == 200) {
                            alert('提交申请成功！');
                            this.defaultData = Object.assign(this.myform, this.defaultData)
                            this.close()
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
