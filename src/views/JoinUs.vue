<template>
	<div style="background-color:#f5f5f5;">
		<z-header goBack='true' headTitle="加入我们"></z-header>
		<div class="container join-us-container">
			<div class="join-banner">
				<h3 class="fs32">简历请投递至wangw@fosun.com</h3>				
			</div>
			<div class="join-content-txt">
				<h5><span>选：以发展来吸引人</span><span>用：以业绩来考核人</span></h5>
				<h5><span>育：以工作来培养人</span><span>留：以事业来凝聚人</span></h5>
				<p class="mt40">“星星之火，可以燎原”</p>
				<p>我们希望把复星金服的每一位员工都打造成一颗璀璨的明星。</p>
				<p>我们的人才观：</p>
				<p>复星金服视员工为企业最有价值的资产，高度重视人才的可持续</p>
				<p>发展和培养。本着为公司战略、企业文化建设服务的理念，通过</p>
				<p>帮助员工提升工作绩效和个人</p>
				<p>能力，推动员工与公司的共同成长。</p>	
				<div class="join-line mt40"></div>		
			</div>	
			<!--条件筛选-->
			<div class="join-condition">
				<ul class="clearfix">
					<li :class="[item.class , item.isA?'active':'']" v-for="(item,index) in categoryList" :key="index" @click="category(item.id)">
						<a href="javascript:;" v-text="item.name"></a>
					</li>
				</ul>
			</div>
			<!--招聘信息-->
			<div class="join-recruit">
				<h2>招聘信息</h2>
				<ul>
					<li v-for="(item,index) in articleList" :key="index">
						<h4 @click="detail($event,item.id)">
							<img class="img1" src="/static/images/icon_user.png" alt="">{{item.title}}
							<img class="img2" style="transform:rotate(180deg)" src="/static/images/icon_down02.png" alt="" v-if="isShowA==item.id">
							<img class="img2" src="/static/images/icon_down02.png" alt="" v-else>
						</h4>
						<div class="recruit-details" v-show="isShowA==item.id" v-if="articleItem.articleData" v-html="articleItem.articleData.content"></div>
					</li>
				</ul>
				<p class="fs24 text-center c-808080 mt10">邮件标题格式为“应聘职位名称-个人姓名”附件添加个人简历</p>
			</div>			
		</div>
		<z-footer></z-footer>
	</div>
</template>

<script>
import api from '@api'
import zHeader from '@/components/Header'
import zFooter from '@/components/Footer'
export default {
	data() {
		return {
			isShowA: '',
			categoryList: [],
			articleList: [],
			defaultCategoryId: '8deb06dab2384902a0c87081e41c6e14',
			articleItem:{}
		}
	},
	components: {
		zHeader,
		zFooter
	},
	mounted() {
		this.fetchInitialData()
	},
	methods: {
		async fetchInitialData() {
			const config = {
				categoryId: this.defaultCategoryId
			}
			api.get('/v1/category/list', config).then(response => {
				if (response.status == 200 && response.data.code == 200) {
					response.data.data.list.map((e, index) => {
						e.isA = false
						if (index % 3 === 0) {
							if (index === 0) {
								// e.class = 'active'
								e.isA = true

								this.category(e.id)
							} else {
								e.class = ''
							}
						} else {
							e.class = 'ml40 mb20'
						}
					})
					this.categoryList = response.data.data.list
				}
			});
		},
		category(id) {
			//选中切换
			this.categoryList.map((e, index) => {
				e.isA = false
				if (e.id === id)
					e.isA = true
			})

			const config = {
				categoryId: id,
				pageNo: 1,
				pageSize: 100
			}
			api.get('/v1/article/list', config).then(response => {
				if (response.status == 200 && response.data.code == 200) {
					response.data.data.list.map((e, index) => {
						e.isA = false
					})
					this.articleList = response.data.data.list
				}
			});
		},
		detail(event, id) {
			if (this.isShowA == id) {
				this.isShowA = ''
			} else {
				this.isShowA = id
			}

			api.get('/v1/article/item', { id }).then(response => {
				if (response.status == 200 && response.data.code == 200) {
					this.articleItem = response.data.data
				}
			});
			
		}
	}
}
</script>
<style scoped>
.join-us-container {
	padding: 0.8rem 0 0.3rem;
}

.join-us-container .join-banner {
	background: url(/static/images/join_us_banner.jpg) no-repeat center center;
	background-size: 7.5rem 1.8rem;
	width: 7.5rem;
	height: 1.8rem;
	text-align: center;
	color: #fff;
}

.join-us-container .join-banner h3,
.join-us-container .join-banner p {
	line-height: 1.5;
}

.join-us-container .join-banner h3 {
	padding-top: 0.7rem;
}













/*条件筛选*/

.join-us-container .join-condition {
	padding: 0.4rem 0.3rem;
}

.join-us-container .join-condition ul li {
	float: left;
}

.join-us-container .join-condition ul li a {
	display: inline-block;
	width: 2rem;
	height: 0.7rem;
	text-align: center;
	line-height: 0.7rem;
	color: #1a1a1a;
	font-size: 0.32rem;
	background-color: #fff;
}

.join-us-container .join-condition ul li.active a {
	color: #fff;
	background-color: #c9a96e;
}













/*招聘信息*/

.join-us-container .join-recruit {
	background-color: #fff;
	padding: 0.2rem 0.3rem;
}

.join-us-container .join-recruit h2 {
	font-size: 0.32rem;
	color: #1a1a1a;
	line-height: 1;
}

.join-us-container .join-recruit ul li h4 {
	width: 6.9rem;
	height: 0.6rem;
	line-height: 0.6rem;
	background-color: #c9a96e;
	font-size: 0.24rem;
	color: #fff;
	margin-top: 0.3rem;
	padding-left: 0.76rem;
	position: relative;
}

.join-us-container .join-recruit ul li .img1 {
	position: absolute;
	top: 0.16rem;
	left: 0.3rem;
	width: 0.27rem;
	height: 0.27rem;
}

.join-us-container .join-recruit ul li .img2 {
	position: absolute;
	top: 0.23rem;
	right: 0.3rem;
	width: 0.25rem;
	height: 0.14rem;
}

.join-us-container .join-recruit ul li .recruit-details {
	/*display: none;*/
}

.join-us-container .join-recruit ul li .recruit-details h5,
.join-us-container .join-recruit ul li .recruit-details p {
	line-height: 1.5;
	color: #808080;
	font-size: 0.24rem;
}

.join-us-container .join-recruit ul li .recruit-details p .job-time {
	padding-left: 0.5rem;
}

.join-us-container .join-recruit ul li .recruit-details h5 {
	margin-top: 0.35rem;
}

/*加入文字*/
.join-content-txt{
	width: 7.5rem;
	padding: 0.4rem 0.3rem 0;
	text-align: center;	
}
.join-content-txt .join-line {
	border-bottom: 1px solid #c9a96e;
}
.join-content-txt h5,.join-content-txt p {
	line-height: 1.5;
}
.join-content-txt h5 span {
	font-size: 0.3rem;
	color: #333;
	padding: 0 0.15rem;
}
.join-content-txt p {
	font-size:0.24rem;
	color: #808080;
}
.join-recruit ul li {
	color: #808080;
}
</style>
