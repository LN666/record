<template>
	<div>
		<div class="login-msg">
			<div class="login-input">
				<input class="input-bottom" type="text" name="" placeholder="手机号或邮箱">
				<i class="iconfont iconuser-s"></i>
			</div>
			<div class="login-input">
				<input type="text" name="" placeholder="密码">
				<i class="iconfont iconmima1"></i>
			</div>
			<div class="help">
				<a @click="show=!show" href="javascript:;" title="">忘记密码</a>
				<div class="mask" v-show="show">
					<ul>
						<li><a href="javascript:;">用手机号重置密码</a></li>
						<li><a href="javascript:;">用邮箱重置密码</a></li>
					</ul>
				</div>
			</div>
			<div class="login-btn">
				<button type="button"><a href="javascript:;" title="">登录</a></button>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				show: false
			}
		}
	}
</script>
<style scoped>
	.login-msg{
		margin-top: 50px;
		width: 300px;
	}
	.login-input{
		width: 100%;
		position: relative;
		overflow: hidden;
	}
	.login-input>i{
		color: #969696;
		position: absolute;
		left: 10px;
		font-size: 24px;
		top: 50%;
		transform: translateY(-50%);
	}
	.login-input>input{
		width: 100%;
		box-sizing: border-box;
		padding: 15px 0 15px 40px;
		border: none;
		border: 1px solid #c8c8c8;
		background: #f1f1f1;
		color: #969696;
		outline: none;
	}
	.input-bottom{
		border-bottom: none!important;
	}
	.iconfont{
		font-size: 22px!important;
	}
	.help{
		display: flex;
		flex-direction: row-reverse;
		margin: 20px 0;
		position: relative;
	}
	.mask{
		position: absolute;
		box-shadow: 0px 0px 3px #ccc;
		top: 30px;
		background: #fff;
	}
	.mask>ul{
		width: 180px;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: left;
	}
	.mask>ul>li{
		padding: 10px 30px;

	}
	.mask>ul>li:hover{
		background:#f5f5f5;
	}
	.login-btn>button{
		width: 100%;
	}
	.login-btn>button>a{
		display: block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #3194D2;
		color: #fff;
		font-size: 16px;
		border-radius: 20px;
	}
	.login-btn>button>a:hover{
		background: #187cb7;
	}
</style>