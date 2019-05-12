import Tourist from './Vue/Tourist.vue'
import Release from './Vue/Release.vue'
import Recommend from './Vue/Recommend.vue'
// 登录
import Login from './Vue/Login.vue'
import LoginMsg from './Vue/LoginMsg.vue'
import Registr from './Vue/Register.vue'
// 写日记
import Diary from './Vue/Diary.vue'
import DiaryList from './Vue/DiaryList.vue'
import WriteDiary from './Vue/WriteDiary.vue'

export default[
	{
		// 游客访问页面
		path: '/tourist',
		name: 'tourist',
		component: Tourist,
		children:[
			{
				path: '/tourist/release',
				component: Release
			},
			{
				path: '/tourist/recommend',
				component: Recommend
			}
		]
	},
	{
		// 登录页面
		path: '/login',
		component: Login,
		children:[
			{
				path: '/login_in',
				component: LoginMsg

			},
			{
				path: '/login_up',
				component: Registr

			}
		]
	},
	{
		path: '/diary',
		component: Diary,
		children:[
			{
				path: '/diary_list',
				component: DiaryList,
				children:[
					{
						path:'/diary_list/write',
						component: WriteDiary
					}

				]
			}


		]

	},
	{
		path:'*',
		redirect:'/diary_list/write'
	},
]