import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
 
//开启debug模式
Vue.config.debug = true;
 
Vue.use(VueRouter);

// App.vue入口文件，由vue引入其他组件或路由
// 定义组件
import index from './component/index.vue'
import todayPlan from './component/today-plan.vue'
import studyProgress from './component/study-progress.vue'
import myProject from './component/my-project.vue'
import myBlog from './component/my-blog.vue'
import summary from './component/summary.vue'
import technology from './component/technology.vue'
import usedWebsite from './component/used-website.vue'
import pictureEnjoy from './component/picture-enjoy.vue'
 
// 创建一个路由器实例并配置路由规则
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
	    { path: '/index', component: index },
	    { path: '/today-plan', component: todayPlan },
	    { path: '/study-progress', component: studyProgress },
	    { path: '/my-project', component: myProject },
	    { path: '/my-blog', component: myBlog },
	    { path: '/summary', component: summary },
	    { path: '/technology', component: technology },
	    { path: '/used-website', component: usedWebsite },
	    { path: '/picture-enjoy', component: pictureEnjoy }
	]
})

// 钩子函数
router.beforeEach((to, from, next) => {
    console.log( (new Date().getTime() - 1512121887342)/1000  )
    next();
});
 
// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
	router: router,
	render: h => h(App)
}).$mount('#app')