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
			<a href="javascript:;" @click="alertLogin()">登录</a>
			<a href="javascript:;" @click="registerShow=true">注册</a>
		</div>
		<div class="dialog-box">
			<div class="dialog-content">
				<div class="content">
					<div class="form-group-block">
						<label>用户名</label>
						<input type="text" class="lui-input" id="username" placeholder="手机号/邮箱/用户名">
					</div>
					<div class="form-group-block">
						<label>密码</label>
						<input type="password" class="lui-input" placeholder="密码">
					</div>
				</div>
				<div class="footer">
					<button class="lui-btn" @click="closeThis()">取消</button>
					<button class="lui-btn">登录</button>
				</div>
			</div>
		</div>
	</div>
</template>
 
<script>

import lui from '../liqiyuan-ui'

export default {
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
			logo: 'myweb',
		}
	},
	methods: {
		alertLogin(){
			lui.$class('dialog-box')[0].style.opacity = '1'
			lui.$class('dialog-box')[0].style.display = 'block'
			// let node = lui.$id('dialog-login')
			// let btn = {
			// 	text: '登录',
			// 	fn: ()=>{
			// 		console.log( lui.$id('username').value )
			// 	}
			// }
			// lui.dialog(node, btn)
		},
		closeThis(){
			lui.dialogClose()
		}
	}
}
</script>
 
<style>
#header-nav [class*='lui-col-']{
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