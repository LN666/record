import Vue from 'vue'
import App from './App.vue'
// import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import routes from './router.config.js'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const router = new VueRouter({
	// 设置路由跳转中没有#
	mode:'history',
	routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
