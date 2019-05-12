<template>
	<div class="clear">
		<div class="nav">
			<div class="nav-menu">
				<div class="menu">
					<div class="logo">
						<img src="../assets/images/logo.png" alt="">
					</div>
					<!-- 菜单 -->
					<ul class="menu-item">
						<li v-for="(value,index) in menu"><a :class="{ 'menu-active': id==index}" @click="active(index)" href="javascript:;">{{value}}</a></li>
					</ul>
					<!-- 搜索框 -->
					<div class="search">
						<input type="text" :class="{'search-focus':isFocus}" name="" @focus="isFocus = true" @blur="isFocus = false" placeholder="搜索">
						<a href="javascript:;"><i class="iconfont iconsousuo search-inco"></i></a>
					</div>
				</div>
				<div class="nav-btn">
					<router-link class="login" to="/login_in">登录</router-link>
					<router-link class="register" to="/login_up">注册</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				menu:['首页','写日记'],
				id: 0,
				inputChange: true,
				isFocus: false,
			}
		},
		methods:{
			// 菜单样式切换
			active(index){
				this.id = index;
			},	
		}

	}
</script>
<style>
	.clear{
		width: 100%;
		height: 70px;
		overflow: hidden;
	}
	.nav{
		width: 100%;
		height: 70px;
		position: absolute;
		left: 50%;
		top: 0;
		transform: translateX(-50%);
		background: #fff;
		box-shadow: 0px 1px 3px #ddd;
	}
	.nav-menu{
		width: 1000px;
		height: 70px;
		margin: 0 auto;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.menu{
		display: flex;
		flex-direction: row;
		align-items: center;
	}
	.logo{
		width: 45px;
	}
	.logo>img{
		width: 100%;
	}
	/*ul*/
	.menu-item{
		display: flex;
		flex-direction: row;
		text-align: center;
		/*padding-left: 30px;*/
	}
	.menu-item>li{
		display: block;
		font-size: 18px;
		margin-right: 30px;
	}
	.menu-active{
		color: #ea6f5a;
	}
	/*.nav-btn>button{
		padding: 0;
		margin-left: 10px;
	}
	.nav-btn>button>a{
		display: block;
		padding: 5px 20px;
		font-size: 16px;
	}
	.nav-btn{
		color: #969696;
	}*/
	.login{
		font-size: 16px;
		color: #969696;
	}
	.register{
		margin-left: 30px;
		padding: 5px 20px;
		font-size: 16px;
		border: 1px solid #ea6f5a;
		color: #ea6f5a!important;
		border-radius: 15px;
	}
	.register:hover{
		transition: background .5s;		
		background: rgba(236,97,73,.1);
	}
	/*搜索框*/
	.search{
		margin-left: 10px;
		position: relative;
	}
	.search>input{
		width: 140px;
		transition: width .5s;
		height: 35px;
		border:none;
		background: #eee;
		border-radius: 20px;
		padding-left: 20px;
		outline: none;
	}
	/*点击改变输入框样式*/
	.search-focus{
		width: 220px!important;
		transition: width .5s;
	}
	.search-inco{
		position: absolute;
		right: 10px;
		top: 0px;
		font-size: 25px;
		color: #999;
	}
</style>