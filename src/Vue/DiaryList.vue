<template>
	<div style="display: flex;flex-grow: 3;">
		<div class="diary">
			<div class="add-diary">
				<a @click="currentDate()" href="javascript:;" title=""><i class="iconfont icontianjia"></i>新建日记</a>
			</div>
			<!-- 日记列表 -->
			<div class="diary-list" v-show="list.length != 0">
				<ul>
					<li :class="{'list-line':msg === index}" @click="msg=index" v-for="(value,index) in list">
						<a class="list-container" href="javascript:;" title="">
							<div class="list-left">
								<i class="iconfont iconwenjian"></i>
								<span>
									<p class="list-date">{{value.date}}</p>
									<p>{{value.title}}</p>
								</span>
							</div>
							<i @click="deleteList(index)" v-show="msg === index" class="iconfont iconshanchu"></i>
						</a>
					</li>
				</ul>
			</div>
			<div class="add-diary bottom-add">
				<a @click="currentDate()" href="javascript:;" title=""><i class="iconfont icontianjia1"></i>在下方新建日记</a>
			</div>
		</div>
		<router-view></router-view>

	</div>
</template>
<script>
	export default{
		data(){
			return{
				list: [
					{
						'date':  '2018-12-12',
						'title': '巴黎之约'
					},
					{
						'date':  '2018-12-30',
						'title': '浪漫的土耳其'
					},
				],
				msg: 0,
			}
		},
		methods:{
			currentDate(){
				let date = new Date();
        		let y = date.getFullYear();
        		let m = date.getMonth()+1;
        		let d = date.getDate();
        		let current = (`${y}-${m}-${d}`);
        		this.list.push({'date':current});
			},
			deleteList(index){
				this.list.splice(index,1);
			}
		}
	}
</script>
<style scoped>
	.diary{
		display: flex;
		flex-direction: column;
		width: 25%;
		background: #fff;
		border-right: 1px solid #d9d9d9;
	}
	.add-diary{
		width: 85%;
		height: 60px;
		margin: 0 auto;
	}
	.icontianjia{
		margin-right: 10px;
		font-size: 18px;
	}
	.add-diary>a{
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		color: #666;
		font-size: 16px;
	}
	.add-diary>a:hover{
		color: #333;
	}
	/*日记列表*/
	.diary-list>ul{
		margin: 0;
		padding: 0;
		border-top: 1px solid #d9d9d9;
		border-bottom: 1px solid #d9d9d9;
		box-sizing: border-box;
	}
	.diary-list>ul>li{
		border-bottom: 1px solid #d9d9d9;
		height: 90px;
		border-left: 5px solid #d9d9d9;
		padding: 0 30px 0 25px;
		box-sizing: border-box;
	}
	.diary-list>ul>li:last-child{
		border-bottom: none;
	}
	.diary-list>ul>li:hover{
		background: #e6e6e6;
		/*border-color: #e6e6e6;*/
	}
	/*改变线条颜色*/
	.list-line{
		background: #e6e6e6;
		border-left-color: #ec7259!important;
	}
	.list-container{
		display: flex;
		height: 100%;
		width: 100%;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.list-left>span{
		display: flex;
		flex-direction: column;
		margin-left: 20px;
	}
	.list-left>span>p{
		margin: 0;
		font-size: 16px;
		color: #595959;
	}
	.list-date{
		font-size: 18px!important;
	}
	.iconwenjian{
		font-size: 36px;
		color: #BEBEBE;
	}
	.icontianjia1{
		margin-right: 10px;
		font-size: 12px;
		font-weight: bold;
	}
	.iconshanchu{
		font-size: 20px;
		color: #595959;
	}
	.list-left{
		display: flex;
		flex-direction: row;
	}
	.bottom-add>a{
		font-size: 14px!important;
	}
</style>