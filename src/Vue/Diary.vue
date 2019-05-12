<template>
	<div style="height: 100%;display: flex;flex-direction: row;">
		<div class="diary">
			<div class="diary-menu">
				<div class="return">
					<router-link to="/tourist" class="return-btn">回首页</router-link>
				</div>
				<div class="add-corpus">
					<a @click="AddCorpus=true" href="javascript:;" title=""><i class="iconfont icontianjia1"></i><span>新建文集</span></a>
					<div class="corpus-name" v-show="AddCorpus">
						<input type="text" v-model="corpus" name="" value="" placeholder="请输入文集名...">
						<div class="btn">
							<a @click="addPush" class="btn-push" href="javascript:;" title="">提交</a>
							<a @click="AddCorpus=false" class="btn-cancel" href="javascript:;" title="">取消</a>
						</div>
					</div>
				</div>
				<div class="corpus-list">
					<ul>
						<li :class="{'corpus-line': index==msg}" @click="msg=index" v-for="(value,index) in ListArr">
							<router-link to="/diary_list">
								<p class="corpus-justify">
									<span class="corpus-title">{{value}}</span>
									<i class="iconfont iconshezhi" v-show="index==msg" @click="option=!option"></i>
								</p>
							</router-link>
							<!-- 操作文集 -->
							<div class="option" v-show="index==msg && option">
								<ul>
									<li><a href="javascript:;" title="">修改文集</a></li>
									<li><a href="javascript:;" title="">删除文集</a></li>
								</ul>
							</div>
						</li>

					</ul>
				</div>
			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				ListArr: ['日记本','巴黎','日本'],
				msg: 0,
				AddCorpus: false,
				corpus: '',
				option: false,
			}
		},
		methods:{
			addPush(){
				this.ListArr.push(this.corpus);
			},
		}
	}
</script>
<style scoped>
	.diary{
		overflow: hidden;
		display: flex;
		width: 18%;
		height: inherit;
		background:#404040;
		position: relative;
	}
	.diary-menu{
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background:#404040;
	}
	.return{
		padding: 30px 0;
	}
	.return-btn{
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 0 auto;
		color: #ec7259;
		width: 80%;
		height: 40px;
		border: 1px solid rgba(236,114,89,.8);
		border-radius: 20px;
	}
	.add-corpus>a{
		display: flex;
		flex-direction: row;
		margin: 0 auto;
		color: #fff;
		width: 80%;
	}
	.add-corpus>a>i{
		display: flex;
		align-items: center;
		margin-right: 5px;
	}
	.icontianjia1{
		font-size: 12px;
		font-weight: bold;
	}
	/*添加文集名称*/
	.corpus-name{
		display: flex;
		flex-direction: column;
		width: 80%;
		margin: 0 auto;
		padding: 20px 0;
	}
	.corpus-name>input{
		width: 100%;
	    height: 35px;
	    background-color: #595959;
	    border: 1px solid #333;
		box-sizing: border-box;
	    padding-left: 10px;
	    margin-bottom: 10px;
	    font-size: 14px;
	    line-height: 20px;
	    color: #ccc!important;
	}
	.btn{
		margin-top: 5px;
	}
	.btn-push{
		padding: 5px 15px;
		color: #42c02e;
		border: 1px solid #42c02e;
		border-radius: 15px;
		margin-right: 10px;
	}
	.btn-cancel{
		color: #999;
	}
	.btn-cancel:hover{
		color: #b3b3b3;
	}
	/*文集列表*/
	.corpus-list{
		margin: 10px 0;
	}
	.corpus-list>ul{
		padding: 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		/*overflow: hidden;*/
	}
	.corpus-list>ul>li{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		/*height: 40px;*/
		box-sizing: border-box;
		border-left: 3px solid #404040;
		position: relative;
	}
	.corpus-line{
		border-color: #ec7259!important;
		background: #666;
	}
	.corpus-list>ul>li:hover{
		border-color: #666;
		background: #666;
	}
	.corpus-list>ul>li>a{
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.corpus-justify{
		display: flex;
		justify-content: space-between;
		width: 80%;
	}
	.corpus-title{
		color: #fff;
	}
	.iconshezhi{
		color: #fff;
	}
	.option{
		position: absolute;
		right: 20px;
		bottom: -78px;
		/*border: 1px solid #ccc;*/
		background:#fff;
		/*border-radius: 7px;*/
		z-index: 20;
	}
	.option>ul{
		padding:0;
	}
	.option>ul>li:first-child{
		/*padding: 10px 30px;*/
		border-bottom: 1px solid #ccc;
	}
	.option>ul>li:hover{
		background:#666;
		color: #fff;
	}
	.option>ul>li:hover a{

		color: #fff;
	}
	.option>ul>li>a{
		display: block;
		padding: 10px 30px;
		color: #595959;
	}

</style>