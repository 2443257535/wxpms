import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/login.js'

Vue.use(Router)


const routes =  new Router({
  routes: [
	{
		path: '/login',
		name: 'login',
		component: () => import('@/view/login/login.vue'),
		meta:{
			title: '登录'
		}
	}, {
		path: '/',
		name: '/',
		component: () => import('@/view/home/index.vue'),
		meta: {title:'首页',requireAuth: true}
	}, {
		path: '/task',
		name: '/task',
		component: () => import('@/view/task/index.vue'),
		meta: {title: '任务',requireAuth: true}
	}, {
		path: '/report',
		name: '/report',
		component: () => import('@/view/report/index.vue'),
		meta: {title: '任务',requireAuth: true}
	}, {
		path: '/personal',
		name: '/personal',
		component: () => import('@/view/personal/index.vue'),
		meta: {title: '任务',requireAuth: true}
	}
  ]
})

routes.beforeEach((to,from,next)=>{
	console.log("token: "+Store.state.token)
	if(to.meta.requireAuth){
		if(Store.state.token != '' && Store.state.token != undefined){
			next();
		}else{
			next({
				path: '/login'
			})
		}
	}else{
		next();
	}
})

export default routes;