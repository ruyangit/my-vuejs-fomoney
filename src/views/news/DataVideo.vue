<template>
    <div class="data-item video-data data-active">
        <div class="every-box" v-for="(item,index) in videoList" :key="index" @click="detail(item.id)">
            <img :src="imgBaseUrl+item.originalImage" alt="">
            <div class="txt-intro" v-text="item.title"></div>
        </div>
    </div>
</template>

<script>
import api from '@api'
import { imgBaseUrl, fileBaseUrl } from '@/api/env'
export default {
    data() {
        return {
            videoList: [],
            imgBaseUrl,
            fileBaseUrl
        }
    },
    components: {
    },
    methods: {
        async fetchInitialData() {
            const config = {
                pageNo: 1,
                pageSize: 30,
                categoryId: '7668bfe804874c958716ee0b12f757ad'
            }
            api.get('/v1/article/list', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    let list = response.data.data.list
                    // list.map(e => {
                    //     e.image = imgBaseUrl + e.image;
                    //     e.originalImage = imgBaseUrl + e.originalImage;
                    //     // e.viewDate = e.updateDate.split(' ')[0]
                    // })
                    this.videoList = list
                }
            });

        },
        detail(id){
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
