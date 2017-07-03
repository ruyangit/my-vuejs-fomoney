<template>
	<div>
		<z-header goBack='/company' headTitle="金融科技"></z-header>
		<!--内容-->
		<div class="container tong-common-container">
			<!--tab导航-->
			<div class="tab-box finance-tab-box clearfix">
				<div @click="zTarg(index)" :class="item.isShow==true?'item fl active':'item fl'" v-for="(item,index) in hMenu" :key="index" >
					<span v-text="item.text"></span>
					<div class="line"></div>
				</div>
			</div>
			<div class="xing-box finance-xing-box">
				<transition name="slide">
					<router-view></router-view>
				</transition>
			</div>
		</div>
	
	</div>
</template>

<script>
import zHeader from '@/components/Header'
export default {
	data(){
		return {
			hMenu:[
				{
					text:'企业征信',
					url:'/company/techcredit',
					isShow:true
				},
				{
					text:'云风控平台',
					url:'/company/techrisk',
					isShow:false
				},
				{
					text:'反欺诈产品',
					url:'/company/techcheat',
					isShow:false
				},
				{
					text:'信用风险管理',
					url:'/company/techcreditrisks',
					isShow:false
				}
			]
		}
	},
	components: {
		zHeader,
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
.finance-tab-box .item{width:1.725rem;}
.finance-tab-box .item span{font-size:0.24rem;}
.xing-box{margin-bottom: 2rem;}
</style>
