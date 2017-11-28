<template>
	<div id="header-nav">
		<div class="lui-col-2">
			<p class="logo-replace">{{ logo }}</p>
		</div>
		<div class="lui-col-8">
			<!-- 当v-for作用于组件上时，需要加key -->
			<router-link v-for="(item,index) in navList" :key="index" v-bind:to="item.href"> {{ item.name }} </router-link>
		</div>
		<div class="lui-col-2">
			<a href="javascript:;" @click="loginShow=true">登录</a>
			<a href="javascript:;" @click="registerShow=true">注册</a>
		</div>
	</div>
</template>
 
<script>
export default {
	name: 'headerNav',
	data(){
		return {
			navList: [
				{ name: '首页', href: '/index' },
				{ name: '今日计划', href: '/today-plan' },
				{ name: '学习进程', href: '/study-progress' },
				{ name: '我的项目', href: '/my-project' },
				{ name: '我的博客', href: '/my-blog' },
				{ name: '总结反思', href: '/summary' },
				{ name: '技术天地', href: '/technology' },
				{ name: '常去网址', href: '/used-website' },
				{ name: '美图欣赏', href: '/picture-enjoy' }
			],
			logo: 'myweb'
		}
	}
}
</script>
 
<style>
#header-nav{
	height: 55px;
	line-height: 55px;
	background: #409eff;
	text-align: center;
	font-size: 16px
}
#header-nav a{
	color: #fff;
	margin: 0 5px
}
#header-nav a:hover{
	color: #d8dce5
}
#header-nav .logo-replace{
	color: #fff;
	font-size: 16px;
	font-weight: 600
}
#header-nav .lui-col-2{
	font-size: 14px
}
</style>