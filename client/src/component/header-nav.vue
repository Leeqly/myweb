<template>
	<div id="header-nav">
		<!-- 当v-for作用于组件上时，需要加key -->
		<router-link v-for="(item,index) in navList" :key="index" v-bind:to="item.href"> {{ item.name }} </router-link>
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
			]
		}
	}
}
</script>
 
<style>
#header-nav{
	text-align: center
}
#header-nav a{
	color: #fff;
	margin: 0 5px
}
#header-nav a:hover{
	color: #d8dce5
}
</style>