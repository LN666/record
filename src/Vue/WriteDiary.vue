<template>
	<div style="display: flex;width: 68%; flex-grow: 1;">
		<div class="write-diary">
			<div class="diary-title">
				<input type="text" name="" v-model="title">
			</div>
			<div class="diary-menu">
				<ul>
					<li><a href="javascript:;" title=""><i class="iconfont iconcuti icon"></i></a></li>
					<li><a href="javascript:;" title=""><i class="iconfont icontupian icon"></i></a></li>
					<li><a href="javascript:;" title=""><i class="iconfont iconshipin icon"></i></a></li>
					
				</ul>
				<div class="btn">
					<a href="javascript:;" title=""><i class="iconfont iconfuzhi"></i>保存</a>
					<a href="javascript:;" title=""><i class="iconfont iconfabu"></i>发布</a>
				</div>
			</div>
			<div class="diary-container">
				<textarea name=""></textarea>
			</div>
		</div>
		

		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				title: '一些感悟'
			}
		}
	}
</script>
<style scoped>
	.write-diary{
		background: #fff;
		width: 100%;
	}
	.diary-title{
		padding: 20px 30px;
		box-sizing: border-box;
		width: 100%;
	}
	.diary-title>input{
		width: 100%;
		height: 50px;
		border: none;
		outline: none;
		font-size: 26px;
		color: #595959;
	}
	.diary-menu{
		background: #d9d9d9;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.diary-menu>ul{
		height: 40px;
		display: flex;
		flex-direction: row;
		padding:0;
		margin:0;
		margin-left: 30px;
	}
	.diary-menu>ul>li{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 100%;
	}
	.icon{
		color: #595959;
		font-size: 18px;
	}
	.diary-menu>ul>li:hover{
		background: #595959;
	}
	.diary-menu>ul>li:hover i{
		color: #fff;
	}
	/*菜单按钮*/
	.btn{
		margin-right: 30px;
		display: flex;
		flex-direction: row;
	}
	.btn>a{
		margin-left: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 40px;
		width: 60px;
		color: #595959;
	}
	.btn>a>i{
		margin-right: 5px;
		font-size: 14px;
		color: #595959;
	}
	.btn>a:hover{
		background:#595959;
		color: #fff;
	}
	.btn>a:hover i{
		color: #fff;
	}
	.diary-container{
		width: 100%;
		height: 78%;
	}
	.diary-container>textarea{
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		padding: 30px 30px;
		font-size: 16px;
		font-family: "Micsoft YaHei";
		color: #595959;
		border: none;
		outline: none;
	}
</style>