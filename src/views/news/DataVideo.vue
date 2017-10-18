<template>
    <div class="data-item video-data data-active">
        <div class="every-box" v-for="(item,index) in videoList" :key="index" @click="player(item)" v-show="!isPlay">
            <!-- <video-player ref="videoPlayer" :options="playerOptions"></video-player> -->
            <img :src="imgBaseUrl + item.originalImage" style="width:5.30rem;height:3.42rem;">
            <img src="/static/images/play.png" style="position: absolute;width: 60px;height: 60px;top: 39%;left: 42%;">
        </div>
        <div class="every-box" v-show="isPlay">
            <video-player ref="videoPlayer" :options="playerOptions"></video-player>
        </div>
    </div>
</template>

<script>
import api from '@api'
import { videoPlayer } from 'vue-video-player'
import { imgBaseUrl, fileBaseUrl } from '@/api/env'
export default {
    data() {
        return {
            videoList:[],
            isPlay:false,
            imgBaseUrl,
            fileBaseUrl,
            playerOptions: {}
        }
    },
    components: {
        videoPlayer
    },
    methods: {
        async fetchInitialData() {
            const config = {
                pageNo: 1,
                pageSize: 30,
                categoryId: '7668bfe804874c958716ee0b12f757ad'
            }
            await api.get('/v1/article/list', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    this.videoList = response.data.data.list
                }
            });
        },
        player(e) {

            const config = {
                id: e.id
            }
            api.get('/v1/link/item', config).then(response => {
                if (response.status == 200 && response.data.code == 200) {
                    if (response.data.data.linkFilesUrl) {
                        // this.videoShow = true
                        // this.playerOptions.sources.src = fileBaseUrl + response.data.data.linkFilesUrl.split('|')[0]
                        const poster = this.imgBaseUrl + e.originalImage
                        const src = fileBaseUrl + response.data.data.linkFilesUrl.split('|')[0]
                        // console.log(poster)
                        // console.log(src)
                        this.playerOptions = {

                            // component options
                            start: 0,
                            playsinline: false,

                            // videojs options
                            // muted: true,
                            language: 'zh-CN',
                            // playbackRates: [0.7, 1.0, 1.5, 2.0],
                            sources: [{
                                type: "video/mp4",
                                src: src
                            }],
                            poster: poster,
                            autoplay: true,
                        }
                        this.isPlay = true
                    }
                }
            });
        }
    },
    mounted() {
        this.fetchInitialData()
    },
    watch: {
        'video'() {
            // if (this.video) {
            //     this.detail()
            // }
        }
    }
    // beforeDestroy: function () {
    //     this.dispose()
    // }
}
</script>
<style>
.video-js.vjs-custom-skin{height:200px;}
.video-js.vjs-custom-skin .vjs-control{width:2em!important;}
</style>
