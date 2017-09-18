<template>
    <div class="data-item picture-data data-active">
        <router-link :to="'/news/data/img/detail/'+item.id" class="every-box" v-for="(item,index) in imgList" :key="index">
            <img :src="item.image" alt="">
            <div class="txt-intro" v-text="item.title"></div>
        </router-link>
    </div>
</template>

<script>
import api from '@api'
import { imgBaseUrl } from '@/api/env'
export default {
    data() {
        return {
            imgList: [],
        }
    },
    components: {
    },
    methods: {
        async fetchInitialData() {
            const config = {
                pageNo: 1,
                pageSize: 30,
                categoryId: '76cab650ee6449b3902895fd5294cf40'
            }
            api.get('/v1/article/list', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    let list = response.data.data.list
                    list.map(e => {
                        e.image = imgBaseUrl + e.image;
                        e.originalImage = imgBaseUrl + e.originalImage;
                        // e.viewDate = e.updateDate.split(' ')[0]
                    })
                    this.imgList = list
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
