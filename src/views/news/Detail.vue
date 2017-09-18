<template>
    <div>
        <z-header goBack="true" headTitle="新闻中心"></z-header>
        <div class="news-details-container" style="width:7.5rem;margin:0 auto;">
            <h2 class="news-title fs32 c-1a1a1a text-center" v-text="articleItem.title"></h2>
		    <h5><span class="time" v-text="articleItem.viewDate"></span><span class="browser ml40">浏览：{{articleItem.hits}}</span></h5>
            <div v-html="content"></div>
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
            id: this.$route.params.id,
            articleItem:{},
            content:''
        }
    },
    components: {
        zHeader,
        zFooter
    },
    mounted(){
        this.fetchInitialData(this.id)
    },
    methods:{
        async fetchInitialData(id) {
            const config = {
                id:id
            }
            api.get('/v1/article/item', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    response.data.data.viewDate= response.data.data.createDate.split(' ')[0]
                    this.articleItem=response.data.data
                    if(this.articleItem.articleData){
                        this.content = this.articleItem.articleData.content
                    }

                   
                }
            });
        },
    }
}
</script>
<style scoped>
.app-container .close-box {
    padding: 0.28rem 0;
    text-align: right;
}

.app-container .close-box img {
    width: 0.41rem;
    height: 0.41rem;
}

.app-container .fomoney-box img {
    width: 1.38rem;
    height: 1.38rem;
}

.app-container .app-txt-box {
    padding: 0.4rem 0 0.45rem;
}

.app-container .app-txt-box img {
    width: 5.53rem;
    height: 1.03rem;
}

.app-container .imgandbnt {
    position: relative;
}

.app-container .imgandbnt .download-btn {
    width: 4.5rem;
    height: 0.9rem;
    background-color: #c9a96e;
    color: #fff;
    line-height: 0.9rem;
    font-size: 0.32rem;
    position: absolute;
    bottom: 0.15rem;
    left: 50%;
    margin-left: -2.25rem;
    box-shadow: 0 0.05rem 0.15rem #d4d4d4;
}

.app-container .imgandbnt img {
    width: 5.6rem;
    height: 6.1rem;
    margin-left: -0.3rem;
}
</style>
