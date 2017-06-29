<template>
    <div class="data-item news-data data-active">
        <router-link :to="'/news/data/draft/detail/'+item.id" class="every-box" v-for="(item,index) in draftList" :key="index">
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
            draftList: [],
        }
    },
    components: {
    },
    methods: {
        async fetchInitialData() {
            const config = {
                pageNo: 1,
                pageSize: 30,
                categoryId: '9ba6835925ea4904a1bf0bda8f40314d'
            }
            api.get('/v1/article/list', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    let list = response.data.data.list
                    list.map(e => {
                        e.image = imgBaseUrl + e.image;
                        e.originalImage = imgBaseUrl + e.originalImage;
                        // e.viewDate = e.updateDate.split(' ')[0]
                    })
                    this.draftList = list
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
