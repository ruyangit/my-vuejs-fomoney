<template>
    <div style="background-color:#f5f5f5;">
        <z-header goBack='true' headTitle="联系我们"></z-header>
        <div class="container contact-us-container">
            <div class="contact-banner"></div>
            <div class="contact-content">
                <div class="contact-address-info">
                    <h3>集团公司地址</h3>
                    <p>
                        <img src="/static/images/icon_phone.png" alt="电话">客服热线：<a class="c-808080" href="tel:400-700-8808">400-700-8808</a></p>
                    <p>
                        <img src="/static/images/icon_email.png" alt="邮箱">客服邮箱：fxjfkf@fosun.com</p>
                    <p>
                        <img src="/static/images/icon_weizhi.png" alt="地址">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址：上海市徐汇区宜山路1289号（克隆科技园）B栋</p>
                </div>
                <!--咨询留言-->
                <form @submit.prevent="validateBeforeSubmit('myform')" data-vv-scope="myform">
                    <h3>咨询留言</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label for="name">您的姓名：</label>
                                </td>
                                <td>
                                    <input :class="{'input': true, 'is-danger': errors.has('myform.name') }" v-validate="'required'" name="name" type="text" v-model="myform.name" placeholder="请输入您的姓名">
                                    <!--<p v-show="errors.has('name')" style="font-size:12px;color:red;">请输入您的姓名</p>-->
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="name">手机号：</label>
                                </td>
                                <td>
                                    <input :class="{'input': true, 'is-danger': errors.has('myform.phone') }" v-validate="'required|phone'" name="phone" type="text" v-model="myform.phone" placeholder="请输入手机号码">
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label for="name">备注：</label>
                                </td>
                                <td>
                                    <textarea v-model="myform.content"></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="2">
                                    <button class="btn" type="submit">提交</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        <z-footer></z-footer>
    </div>
</template>

<script>
import api from '@api'
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'

export default {
    data() {
        return {
            myform: {
                type:'1',
                name: '',
                phone: '',
                content: ''
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
                    api.post('/v1/guestbook/save', this.myform).then(response => {
                        if(response.status==200&&response.data.code==200){
                            alert('咨询留言-提交成功！');
                            Object.assign(this.myform, this.defaultData);
                        }
                    });
                }else{
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
.contact-us-container {
    padding: 0.8rem 0 0.4rem;
}

.contact-us-container .contact-banner {
    background: url(/static/images/contact_map.jpg) no-repeat center center;
    background-size: 7.5rem 3rem;
    width: 7.5rem;
    height: 3rem;
}

.contact-us-container .contact-content {
    background-color: #fff;
    padding: 0 0.3rem;
}

.contact-us-container .contact-content h3 {
    font-size: 0.32rem;
    color: #1a1a1a;
    padding: 0.4rem 0 0.15rem;
    line-height: 1;
}

.contact-us-container .contact-content .contact-address-info p {
    font-size: 0.24rem;
    color: #808080;
    padding-top: 0.2rem;
    line-height: 1;
}

.contact-us-container .contact-content .contact-address-info p img {
    width: 0.21rem;
    height: 0.2rem;
    margin-right: 0.16rem;
}

.contact-us-container .contact-content form h3 {
    padding: 0.8rem 0 0.25rem;
}

.contact-us-container .contact-content form label {
    font-size: 0.24rem;
    color: #808080;
}

.contact-us-container .contact-content form input {
    width: 5.6rem;
    height: 0.6rem;
    border: 0.01rem solid #ccc;
    font-size: 0.24rem;
    line-height: 0.6rem;
    padding: 0 0.15rem;
    margin-bottom: 0.2rem;
    outline: none;
    -webkit-appearance: none;
}

.contact-us-container .contact-content form textarea {
    width: 5.6rem;
    height: 1.2rem;
    border: 0.01rem solid #ccc;
    -webkit-appearance: none;
}

.contact-us-container .contact-content form .btn {
    width: 6.9rem;
    height: 0.9rem;
    background-color: #00a5fa;
    font-size: 0.36rem;
    color: #fff;
    border: none;
    margin: 0.6rem 0 0.4rem;
    outline: none;
}
</style>
