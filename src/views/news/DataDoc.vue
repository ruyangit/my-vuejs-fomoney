<template>
    <div class="data-item file-data data-active">
        <!--每一个文件-->
        <div class="every-file" v-for="(item,index) in docList" :key="index" @click="detail(item.id)">
            <img :src="item.image" alt="文件" >
            <h4 v-text="item.title"></h4>
            <!--<span v-text="item.remarks"></span>-->
            <p>
                <img src="/static/images/icon_download.png" alt="下载" >
            </p>
        </div>
    </div>
</template>

<script>
import api from '@api'
import { imgBaseUrl,fileBaseUrl } from '@/api/env'
export default {
    data() {
        return {
            docList: [],
            // isList: true
        }
    },
    components: {
    },
    methods: {
        async fetchInitialData() {
            const config = {
                pageNo: 1,
                pageSize: 30,
                categoryId: '19d1a8f26397450cb695a26636c85da4'
            }
            api.get('/v1/article/list', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    let list = response.data.data.list
                    list.map(e => {
                        e.image = imgBaseUrl + e.image;
                        e.originalImage = imgBaseUrl + e.originalImage;
                        // e.viewDate = e.updateDate.split(' ')[0]
                    })
                    this.docList = list
                }
            });

        },
        detail(id) {
            console.log(id);
            const config = {
                id: id
            }
            api.get('/v1/link/item', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    if(response.data.data.linkFilesUrl){
                        let url = fileBaseUrl+response.data.data.linkFilesUrl.split('|')[0]
                        location.href = url
                    }
                }
            });
        }
    },
    mounted() {
        this.fetchInitialData()
    }
}
</script>
<style scoped>

</style>
