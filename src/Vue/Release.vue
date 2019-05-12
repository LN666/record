<template>
	<div>
		<!-- 最新发布 -->
		<div class="card">
			<div class="card-title">
				<div class="card-user">
					<a href="javascript:;">
					    <img class="user-logo" src="../assets/images/userImage5.jpg" alt="">
					    <p>张小姐</p>
					</a>
				</div>
				<span class="timer">2小时前</span>
			</div>
			<div class="card-container">
				<a href="javascript:;">
					<img class="card-banner" src="../assets/images/banner2.png" alt="">
					<h3>漫游三亚</h3>
					<p>从爱上旅行至今，走过百余个城市。能叫人难以忘怀的一定是那些有独特气质的城市，总是吸引我一去再去，例如风花雪月的大理，年轻朝气的深圳，民国遗风的南京，皇城底蕴的北京，我想我最喜欢的还是度假天堂的三亚。</p>
				</a>
			</div>
			<div class="card-bottom">
				<a href="javascript:;" @click="comments=!comments" >
					<i class="iconfont" :class="{'iconpinglun2': comments,'iconpinglun1': !comments}"></i>
					<span>22</span>
				</a>
				<a href="javascript:;" @click="change">
					<i class="iconfont" :class="{'iconaixin_shixin': heart,'heart-active':heart,'iconicon-test': !heart}"></i>
					<span>{{favourite}}</span>
				</a>
			</div>
		
		</div>
		<div class="card">
			<div class="card-title">
				<div class="card-user">
					<a href="javascript:;">
					    <img class="user-logo" src="../assets/images/userImg3.jpg" alt="">
					    <p>lina</p>
					</a>
				</div>
				<span class="timer">2小时前</span>
			</div>
			<div class="card-container">
				<a href="javascript:;">
					<img class="card-banner" src="../assets/images/banner2.jpg" alt="">
					<h3>知和行书局，不仅只是书店</h3>
					<p>知和行书局，海口书局连锁，为海口增添了阅读休闲好去处。知和行书局日月广场店，分为四个区域，书籍区，文具用品区，童趣市集区域，知和行咖啡。这里的墙面保留了原汁原味的灰色，在我个人看来是比较算是性冷淡的设…</p>
				</a>
			</div>
			<div class="card-bottom">
				<a href="javascript:;" @click="comments=!comments" >
					<i class="iconfont" :class="{'iconpinglun2': comments,'iconpinglun1': !comments}"></i>
					<span>22</span>
				</a>
				<a href="javascript:;" @click="change">
					<i class="iconfont" :class="{'iconaixin_shixin': heart,'heart-active':heart,'iconicon-test': !heart}"></i>
					<span>{{favourite}}</span>
				</a>
			</div>
		
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				favourite: 22,
				increase: -1,
				comments: false,
				heart: false,

			}
		},
		methods:{
			change(){
				this.heart=!this.heart;
				this.increase = -this.increase;
				this.favourite = this.favourite + this.increase;
			}
		}
	}
</script>
<style>
	.card{
		display: flex;
		flex-direction: column;
		padding: 30px 0;
		border-bottom: 1px solid #ccc;
	}
	.card-title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.card-user>a{
		display: flex;
		flex-direction: row;
		height: 45px;
	}
	.user-logo{
		width: 45px;
		height: 45px;
		/*background: red;*/
		border-radius: 50%;
		margin-right: 10px;
	}
	.timer{
		color: #ccc;
	}
	/*内容banner*/
	.card-banner{
		margin-top: 30px;
		height: 180px;
		width: 100%;
	}
	.card-container h3{
		font-size: 24px;
		font-weight: normal;
		color: #2D2D2F;

	}
	.card-container p{
		color: #818181;
		display:-webkit-box;
		-webkit-box-orient:vertical;
    	-webkit-line-clamp:2;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 14px;
	}
	/*卡片底部*/
	.card-bottom{
		display: flex;
		flex-direction: row-reverse;
		/*height: 50px;*/
		/*background: red;*/
		align-items: center;
	}
	.card-bottom>i{
		font-size: 14px;
		/*color: #ccc;*/
		margin-left: 10px;
	}
	.card-bottom>a{
		margin-left: 20px;
		color: #c7c7c7;
	}
	.heart-active{
		color: #FF7055;
	}
	
</style>