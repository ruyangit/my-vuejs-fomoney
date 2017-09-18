<template>
	<div>
		<z-header goBack='/' headTitle="新闻中心"></z-header>
		<!--内容-->
		<div class="container tong-common-container newscenter-container">
			<!--tab导航-->
			<div class="tab-box news-tab-box clearfix">
				<div @click="zTarg(index)" :class="item.isShow==true?'item fl active':'item fl'" v-for="(item,index) in hMenu" :key="index" >
					<span v-text="item.text"></span>
					<div class="line"></div>
				</div>
			</div>
			<div class="xing-box newscenter-xing-box">
				<transition name="slide">
					<router-view></router-view>
				</transition>
			</div>
		</div>
		<z-footer></z-footer>
	</div>
</template>

<script>
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
	data(){
		return {
			hMenu:[
				{
					text:'集团新闻',
					url:'/news/groupnews',
					isShow:true
				},
				{
					text:'媒体报道',
					url:'/news/medianews',
					isShow:false
				},
				{
					text:'资料专区',
					url:'/news/data/draft',
					isShow:false
				}
			]
		}
	},
	components: {
		zHeader,
		zFooter
	},
	methods:{
		zTarg(index){
			let rrto = this.$router
			this.hMenu.map(function (v,i) {
				if(i===index){
					v.isShow=true
					rrto.push({path:v.url})
				}else{
					v.isShow=false
				}
			});
		}
	},
	mounted(){
		let rrph = this.$route.path
		this.hMenu.map(function (v,i) {
			if(v.url===rrph){
				v.isShow=true
			}else{
				v.isShow=false
			}
		});

	}
}
</script>
<style scoped>
</style>
