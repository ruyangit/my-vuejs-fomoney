<template>
    <!--集团新闻-->
    <div class="item groupnews active">
        <div v-for="(item,index) in groupNewsList" :key="index">
            <template v-if="item.link">
                <a :href="item.link" target="_black" class="news-content-box clearfix">
                    <div class="fl img-box">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="fr txt-box">
                        <h3 v-text="item.title"></h3>
                        <p>{{item.description | strCut}}</p>
                        <h5 v-text="item.viewDate"></h5>
                    </div>
                </a>
            </template>
            <router-link v-else :to="'/news/detail/'+item.id" class="news-content-box clearfix">
                <div class="fl img-box">
                    <img :src="item.image" alt="">
                </div>
                <div class="fr txt-box">
                    <h3 v-text="item.title"></h3>
                    <p>{{item.description | strCut}}</p>
                    <h5 v-text="item.viewDate"></h5>
                </div>
            </router-link>
        </div>
        <div class="down-load fs24 c-808080 text-center">
            <a href="javascript:;" @click="loadMore()" v-if="isMore">点击查看更多</a>
            <!--<a href="javascript:;" v-if="!isMore">没有更多记录了</a>-->
        </div>
    </div>
</template>

<script>
import api from '@api'
import { imgBaseUrl } from '@/api/env'
// import { strCut } from '@/filters'
export default {
    data() {
        return {
            groupNewsList: [],
            pageNo: 1,
            totalPage: 0,
            isMore: true
        }
    },
    components: {
    },
    mounted() {
        this.fetchInitialData()
    },
    methods: {
        async fetchInitialData(pageNo) {
            if (!pageNo) pageNo = 1;
            const config = {
                pageNo: pageNo,
                pageSize: 6,
                categoryId: 3
            }
            api.get('/v1/article/list', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    let list = response.data.data.list
                    list.map(e => {
                        e.image = imgBaseUrl + e.image;
                        e.originalImage = imgBaseUrl + e.originalImage;
                        e.viewDate = e.createDate.split(' ')[0]
                    })

                    this.totalPage = response.data.data.totalPage
                    this.pageNo = pageNo
                    if (pageNo === 1) {
                        this.groupNewsList = [].concat(list)
                    } else {
                        this.groupNewsList = this.groupNewsList.concat(list)
                    }
                    if (this.pageNo === this.totalPage) {
                        this.isMore = false
                    }
                }
            });
        },
        loadMore() {
            if (this.pageNo === this.totalPage) {
                this.isMore = false
            } else {
                this.fetchInitialData(this.pageNo + 1)
            }
        }
    },
    filters: {
        strCut(str) {
            if (!str) return '...'
            if (str.length >= 35) {
                return str.substring(0, 34) + '...'
            }
            return str
        }
    }
}
</script>
<style scoped>

</style>
