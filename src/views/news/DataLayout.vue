<template>
    <div class="item datasection active">
        <div class="data-box clearfix">
            <div class="data-left fl">
                <div @click="zTarg(index)" :class="item.isShow==true?'nav-item current':'nav-item'" v-for="(item,index) in hMenu" :key="index" v-text="item.text" ></div>
            </div>
            <div class="data-right fr">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    data() {
        return {
            hMenu: [
                {
                    text: '新闻稿',
                    url: '/news/data/draft',
                    isShow: true
                },
                {
                    text: '视频资料',
                    url: '/news/data/video',
                    isShow: false
                },
                {
                    text: '文档资料',
                    url: '/news/data/doc',
                    isShow: false
                },
                {
                    text: '图片资料',
                    url: '/news/data/img',
                    isShow: false
                }
            ]
        }
    },
    components: {
        zHeader,
        zFooter
    },
    methods: {
        zTarg(index) {
            let rrto = this.$router
            this.hMenu.map(function (v, i) {
                if (i === index) {
                    v.isShow = true
                    rrto.push({ path: v.url })
                } else {
                    v.isShow = false
                }
            });
        }
    },
    mounted() {
        let rrph = this.$route.path
        this.hMenu.map(function (v, i) {
            if (v.url === rrph) {
                v.isShow = true
            } else {
                v.isShow = false
            }
        });

    }
}
</script>
<style scoped>

</style>
