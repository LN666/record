<template>
	<div>
		<div class="login-msg">
			<div class="login-input">
				<input class="input-bottom" type="text" name="" placeholder="你的昵称">
				<i class="iconfont iconuser-s"></i>
			</div>
			<div class="login-input">
				<input class="input-bottom" type="text" name="" placeholder="手机号">
				<i class="iconfont iconshouji"></i>
			</div>
			<div class="login-input">
				<input type="text" name="" placeholder="密码">
				<i class="iconfont iconmima1"></i>
			</div>
			<div class="register-btn">
				<button type="button"><a @click="register" href="javascript:;" title="">注册</a></button>
			</div>
			<div class="tip">
				<p>点击 “注册” 即表示您同意并愿意遵守</p>
				<div>
					<a href="Javascript:;" title="">用户协议</a>
					<span>和</span>
					<a href="Javascript:;" title="">隐私策略</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return{
				show: false,
				
			}
		},
		methods:{
			// 注册
			// register(){
			// 	axios.get('http://localhost:8081/api/register',{pass:456})
			// 		.then((res) => {

			// 			// var pass={
			// 			// 	username: 'lll',
			// 			// 	password: 123
			// 			// }
			// 			console.log('成功')



			// 		}).catch((err) => {
			// 			this.error = true
			// 			setTimeout(() => {
			// 				this.error=false;
			// 			},3000);
			// 		});
			// }

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
	.register-btn>button{
		width: 100%;
		margin-top: 20px;
	}
	.register-btn>button>a{
		display: block;
		width: 100%;
		height: 40px;
		line-height: 40px;
		background: #42c02e;
		color: #fff;
		font-size: 16px;
		border-radius: 20px;
	}
	.register-btn>button>a:hover{
		background: #3db922;
	}
	.iconfont{
		font-size: 22px!important;
	}
	.tip{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 10px 0;
		color: #969696;
		font-size: 12px;
	}
	.tip>p{
		margin: 0;
		padding-bottom: 5px;
	}
	.tip a{
		color: #3194d0;
	}
</style>