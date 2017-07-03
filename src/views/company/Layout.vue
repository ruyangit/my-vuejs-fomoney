<template>
	<div>
		<z-header goBack='true' headTitle="企业贷款"></z-header>
		<!--内容-->
		<div class="container tong-common-container">
			<!--tab导航-->
			<div class="tab-box company-tab-box clearfix">
				<div @click="zTarg(index)" :class="item.isShow==true?'item fl active':'item fl'" v-for="(item,index) in hMenu" :key="index" >
					<span v-text="item.text"></span>
					<div class="line"></div>
				</div>
			</div>
			<div class="xing-box">
				<transition name="slide">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	
		<!--<z-footer></z-footer>-->
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
					text:'星商贷',
					url:'/company/starbusiness',
					isShow:true
				},
				{
					text:'平台贷',
					url:'/company/loanplatform',
					isShow:false
				},
				{
					text:'保理业务',
					url:'/company/loanfactoring',
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
.company-tab-box .item{width:2.3rem;}
.xing-box{margin-bottom: 2rem;}
</style>
