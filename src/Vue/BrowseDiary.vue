<template>
	<div class="content">
		<div class="content-left">
			<div class="banner">
				<a href="javascript:;"><img src="../assets/images/banner.jpg" alt=""></a>
			</div>	
			<!-- 文章浏览 -->
			<div class="browse-title">
				<router-link to="/tourist/release" @click.native="msg=0" :class="{'browse-active': msg ===0}">最新发布</router-link>
				<span>|</span>
				<router-link to="/tourist/recommend" @click.native="msg=1" :class="{'browse-active': msg===1}">热门推荐</router-link>
			</div>
			<router-view></router-view>

		</div>
		<div class="content-right">
			<!-- 推荐作者 -->
			<div class="recommend-author">
				<div class="author-title">
					<h2>作者推荐</h2>
					<a href="javascript:;">查看更多></a>
				</div>
				<!-- 单个作者信息 -->
				<div class="authors">
					<div class="authors-logo">
						<a href="javascript:;"><img class="authors-img" src="../assets/images/userImg4.jpg" alt=""></a>
						<div class="authors-info">
							<a href="javascript:;">mack</a>
							<span>20人关注</span>
						</div>
					</div>
					<div class="attention">
						<a href="javascript:;">+关注</a>
					</div>
				</div>
				<!-- 单个作者信息 -->
				<div class="authors">
					<div class="authors-logo">
						<a href="javascript:;"><img class="authors-img" src="../assets/images/userImg1.jpg" alt=""></a>
						<div class="authors-info">
							<a href="javascript:;">jack</a>
							<span>20人关注</span>
						</div>
					</div>
					<div class="attention">
						<a href="javascript:;">+关注</a>
					</div>
				</div>
				<!-- 单个作者信息 -->
				<div class="authors">
					<div class="authors-logo">
						<a href="javascript:;"><img class="authors-img" src="../assets/images/userImg2.jpg" alt=""></a>
						<div class="authors-info">
							<a href="javascript:;">blue</a>
							<span>20人关注</span>
						</div>
					</div>
					<div class="attention">
						<a href="javascript:;">+关注</a>
					</div>
				</div>
				<!-- 单个作者信息 -->
				<div class="authors">
					<div class="authors-logo">
						<a href="javascript:;"><img class="authors-img" src="../assets/images/userImg3.jpg" alt=""></a>
						<div class="authors-info">
							<a href="javascript:;">lina</a>
							<span>20人关注</span>
						</div>
					</div>
					<div class="attention">
						<a href="javascript:;">+关注</a>
					</div>
				</div>
			</div>
			<!-- 热门标签 -->
			<div class="recommend-author hot-title">
				<div class="author-title">
					<h2>热门推荐</h2>
					<a href="javascript:;">查看更多></a>
				</div>
				<div class="titles">
					<ul>
						<li v-for="value in titles"><a href="javascript:;">{{value}}</a></li>
					</ul>
				</div>
				
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg: 0,
				titles: ['巴黎','三亚','马来西亚','兰桂坊','香格里拉','伦敦','香港迪士尼乐园','厦门','青岛','洱海','马尔代夫']
			}
		}
	}
</script>
<style>
	.content{
		width: 1000px;
		margin: 0 auto;
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	/*内容左部*/
	.content-left{
		display: flex;
		flex-direction: column;
		width: 680px;
	}
	.banner{
		height: 280px;
	}
	.banner>a>img{
		width: 100%;
		height: 100%;
		border-radius: 8px;
	}
	/*二级导航*/
	.browse-title{
		margin-top: 30px;
		font-size: 16px;
	}
	.browse-title>a{
		color: #818181;
	}
	.browse-title>span{
		color: #ddd;
		font-size: 14px;
		margin: 0 5px;
	}
	.browse-active{
		color: #333!important;
		font-weight: bold;
	}
	/*内容右部*/
	.content-right{
		display: flex;
		flex-direction: column;
		width: 280px;
		/*margin-left: 30px;*/
	}
	/*热门标签*/

	.author-title{
		width: 280px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #EDEDED;
		position: relative;
	}
	.author-title>h2{
		font-size: 16px;
	}
	.author-title>h2:after{
		content: '';
		position: absolute;
		left: 0;
		bottom: -1px;
		width: 65px;
		border-bottom: 1px solid #333;
	}
	.author-title>a{
		color: #C7C7C7;
	}
	.author-title>a:hover{
		color: #337ab7;
	}
	/*作者*/
	.authors{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.authors-logo{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 15px 0;
	}
	.authors-logo>a{
		display: flex;
		width: 45px;
		height: 45px;
	}
	.authors-img{
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
	.authors-info{
		margin-left: 10px;
		display: flex;
		flex-direction: column;
	}
	.authors-info>span{
		color: #C7C7C7;
	}
	.attention>a{
		padding: 3px 10px;
		border: 1px solid #FF7055;
		color: #FF7055;
		border-radius: 15px;
	}
	/*热门标签*/
	.hot-title{
		margin-top: 30px;
	}
	.titles{
		/*display: flex;*/
		/*flex-direction: row;*/
		width: 100%;

	}
	.titles>ul{
		padding: 0;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.titles>ul>li{
		/*display: flex;*/
		margin-right: 10px;
		margin-bottom: 10px;

	}
	.titles>ul>li>a{
		display: flex;
		padding: 5px 15px;
		border: 1px solid #F5F5F5;
		color: #818181;

	}
	
</style>