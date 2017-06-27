<template>
    <div>
       draft
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
                    text: '集团新闻',
                    url: '/news/groupnews',
                    isShow: true
                },
                {
                    text: '媒体报道',
                    url: '/news/medianews',
                    isShow: false
                },
                {
                    text: '资料专区',
                    url: '/news/data/draft',
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
