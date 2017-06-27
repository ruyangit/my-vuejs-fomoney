<template>
    <!--集团新闻-->
    <div class="item medianews active">
        <a href="news_details.html" class="news-content-box clearfix">
            <div class="fl img-box">
                <img src="/static/images/medianews_img01.png" alt="">
            </div>
            <div class="fr txt-box">
                <h3>上海信用生态圈成型 复星量富征信等成为生力军</h3>
                <p>为贯彻“让守信者一路畅通、让失信者寸步难行”的理念，营造社会共治的上海信...</p>
                <h5>2016-04-10</h5>
            </div>
        </a>
        <div class="down-load fs24 c-808080 text-center">
            下拉加载更多
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
