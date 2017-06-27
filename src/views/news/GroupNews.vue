<template>
    <div>
        <!--集团新闻-->
        <div class="item groupnews active">
            <a href="news_details.html" class="news-content-box clearfix">
                <div class="fl img-box">
                    <img src="/static/images/groupnews_img01.png" alt="">
                </div>
                <div class="fr txt-box">
                    <h3>复星大健康管理学院成立</h3>
                    <p>4月26日上午，筹备已久的复星大健康管理学院正式成立。复星集团联席总裁...</p>
                    <h5>2016-04-10</h5>
                </div>
            </a>
            <div class="down-load fs24 c-808080 text-center">
                下拉加载更多
            </div>
        </div>
    </div>
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
    components: {
        zHeader,
        zFooter
    }
}
</script>
<style scoped>

</style>
