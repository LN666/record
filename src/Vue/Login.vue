<template>
	<div class="login">
		<div class="login-logo">
			<a href="javascript:;"><img src="../assets/images/logo.png" alt=""></a>
		</div>
		<div class="login-card">
			<div class="login-title">
				<router-link to="/login_in" @click.native="num=0" :class="{'login-title-active': num === 0}">登录</router-link>
				<span>·</span>
				<router-link to="/login_up" @click.native="num=1" :class="{'login-title-active': num ===1}">注册</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				num: 0
			}
		}
	}
</script>
<style scoped>
	.login{
		width: 100%;
		height: 100%;
		background: #f1f1f1;
	}
	.login-card{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		padding: 50px 50px;
		background: #fff;
	}
	.login-logo{
		padding: 50px 50px;
	}
	.login-logo>a>img{
		width: 72px;
	}
	.login-title{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: baseline;
	}
	.login-title>a{
		display: flex;
		color: #969696;
		font-size: 18px;
		padding: 0 10px 10px;
	}
	.login-title>span{
		color: #969696;
		font-size: 30px;
		padding: 0 20px;
	}
	.login-title>a:hover{
		border-bottom: 2px solid #ea6f5a;
	}
	.login-title-active{
		color: #ea6f5a!important;
		font-weight: bold;
		border-bottom: 2px solid #ea6f5a;
	}
</style>