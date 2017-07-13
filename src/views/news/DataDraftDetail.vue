<template>
    <div>
        <z-header goBack="true" headTitle="新闻稿"></z-header>
        <div class="container news-details-container">
            <h2 class="news-title fs32 c-1a1a1a text-center" v-text="articleItem.title"></h2>
            <h5>
                <span class="time" v-text="articleItem.viewDate"></span>
                <span class="browser ml40">浏览：{{articleItem.hits}}</span>
            </h5>
            <div v-html="content"></div>
            <p v-for="(item,index) in downloadFiles" :key="index">
                <a class="c-4a90e2" :href="fileBaseUrl+item" v-text="(index+1)+'、附件下载'" target="black"></a>
            </p>
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
            articleItem: {},
            content: '',
            downloadFiles: [],
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
            api.get('/v1/article/item', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    response.data.data.viewDate = response.data.data.updateDate.split(' ')[0]
                    this.articleItem = response.data.data
                    if (this.articleItem.articleData) {
                        this.content = this.articleItem.articleData.content
                    }
                    if (this.articleItem.articleFilesUrl) {
                        this.downloadFiles = this.articleItem.articleFilesUrl.split('|')
                    }

                }
            });
        },
    }
}
</script>
<style scoped>
.c-4a90e2{color:#4a90e2;}
</style>
