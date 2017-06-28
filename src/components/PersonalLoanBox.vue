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
                                <label for="name">您的姓名：</label>
                            </td>
                            <td>
                                <input :class="{'input': true, 'is-danger': errors.has('myform.name') }" v-validate="'required'" v-model="myform.name" type="text" placeholder="请输入名称" name="name">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="phone">手机号：</label>
                            </td>
                            <td>
                                <input :class="{'input': true, 'is-danger': errors.has('myform.phone') }" v-validate="'required|phone'" v-model="myform.phone" type="text" placeholder="请输入电话" name="phone">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="gender">性别：</label>
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
                                <label for="city">城市：</label>
                            </td>
                            <td>
                                <input type="text" name="city" v-model="myform.city">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="occupation">职业：</label>
                            </td>
                            <td>
                                <input type="text" name="profession" v-model="myform.profession">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="assets">资产情况：</label>
                            </td>
                            <td>
                                <label v-for="(item,index) in array" :key="index">
                                    <input type="checkbox" v-model="checklist" :value="item"> {{item}}
                                </label>
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
            default: false
        },
        moduleType: {
            type: String,
            default: false
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
                name: '',
                sex: '1',
                phone: '',
                city: '',
                profession: '',
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
                var capital = "";
                if(this.checklist){
                    this.checklist.map(e=>{
                        capital+=','+e
                    });
                }
                if(capital.length>0){
                    this.myform.capital = capital.substring(1);
                }
                if (result) {
                    api.post('/v1/compersonal/save', this.myform).then(response => {
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
