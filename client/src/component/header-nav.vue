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
			<a href="javascript:;" @click="alertRegister()">注册</a>
		</div>
		<div class="dialog-box" id="loginDialog">
			<div class="dialog-content">
				<div class="content">
					<div class="form-group-block">
						<label>用户名</label>
						<input type="text" class="lui-input" v-model="loginUsername" placeholder="手机号 / 邮箱 / 用户名">
					</div>
					<div class="form-group-block">
						<label>密码</label>
						<input type="password" class="lui-input" v-model="loginPassword" placeholder="密码">
					</div>
				</div>
				<div class="footer">
					<button class="lui-btn" @click="close()">取消</button>
					<button class="lui-btn" @click="login()">登录</button>
				</div>
			</div>
		</div>
		<div class="dialog-box" id="regDialog">
			<div class="dialog-content">
				<div class="content">
					<div class="form-group-block">
						<label>用户名</label>
						<input type="text" class="lui-input" v-model="regUsername" placeholder="手机号 / 邮箱 / 用户名">
					</div>
					<div class="form-group-block">
						<label>密码</label>
						<input type="password" class="lui-input" v-model="regPassword" placeholder="密码">
					</div>
					<div class="form-group-block">
						<label>密码确认</label>
						<input type="password" class="lui-input" v-model="regPassword2" placeholder="密码">
					</div>
				</div>
				<div class="footer">
					<button class="lui-btn" @click="close()">取消</button>
					<button class="lui-btn" @click="register()">注册</button>
				</div>
			</div>
		</div>
	</div>
</template>
 
<script>

import axios from 'axios'
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
			loginUsername: '',
			loginPassword: '',
			regUsername: '',
			regPassword: '',
			regPassword2: '',
		}
	},
	methods: {
		alertLogin(){
			lui.openDialog('loginDialog')
		},
		alertRegister(){
			lui.openDialog('regDialog')
		},
		login(){
			axios.post('http://localhost:7857/login',{
      			username: this.loginUsername,
      			password: this.loginPassword
      		}).then( (response)=>{
      			lui.msg(response.data.message)
				if(response.data.code == '1'){
					this.close()
				}
			});
		},
		register(){
			axios.post('http://localhost:7857/register',{
      			username: this.regUsername,
      			password: this.regPassword,
      			password2: this.regPassword2
      		}).then( (response)=>{
      			lui.msg(response.data.message)
				if(response.data.code == '1'){
					this.close()
				}
			});
		},
		close(){
			lui.closeDialog()
		}
	},
	mounted: function(){

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