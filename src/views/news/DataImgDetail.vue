<template>
    <div>
        <z-header goBack="true" headTitle="图片资料"></z-header>
        <div class="data-item">
            <a class="every-box" v-for="(item,index) in imgList" :key="index">
                <img :src="fileBaseUrl+item" alt="">
                <div class="txt-intro" v-text="title"></div>
            </a>
        </div>
        <z-footer></z-footer>
    </div>
</template>

<script>
import api from '@api'
import { fileBaseUrl } from '@/api/env'
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    data() {
        return {
            id: this.$route.params.id,
            title: '',
            imgList: [],
            fileBaseUrl
        }
    },
    components: {
        zHeader,
        zFooter
    },
    mounted() {
        this.fetchInitialData(this.id)
    },
    methods: {
        async fetchInitialData(id) {
            const config = {
                id: id
            }
            api.get('/v1/link/item', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    this.title = response.data.data.title
                    if (response.data.data.linkFilesUrl) {
                        this.imgList = response.data.data.linkFilesUrl.split('|')
                    }
                }
            });
        },
    }
}
</script>
<style scoped>
.data-item{margin-top: 1.1rem;overflow: hidden;padding:0 0.15rem}
.every-box{display:block;width:3.3rem;height:2.42rem;position:relative;margin:0 0.15rem 0.3rem 0.15rem;float: left;}
.every-box img{width:3.3rem;height:2.42rem;}
.every-box .txt-intro{color:#fff;height:0.6rem;line-height:0.6rem;background-color:rgba(0,0,0,.5);position:absolute;bottom:0;left:0;padding-left:0.2rem;font-size:0.24rem;width:3.3rem;}
</style>
