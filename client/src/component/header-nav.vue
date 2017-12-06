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
			<div class="if-login" v-bind:class="{'show':ifLogin}">
				<a @mouseenter="showUserMenu" @mouseleave="hideUserMenu" href="javascript:;">{{ nickname }}</a>
				<ul @mouseenter="showUserMenu" @mouseleave="hideUserMenu" class="user-menu" v-bind:class="{'active':alertUserMenu}">
					<li>
						<a href="">个人中心</a>
						<a @click="exitLogin" href="javascript:;">退出</a>
					</li>
				</ul>
			</div>
			<div class="if-login" v-bind:class="{'show':noLogin}">
				<a href="javascript:;" @click="alertLogin">登录</a>
				<a href="javascript:;" @click="alertRegister">注册</a>
			</div>
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
					<button class="lui-btn" @click="close">取消</button>
					<button class="lui-btn" @click="login">登录</button>
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
					<button class="lui-btn" @click="close">取消</button>
					<button class="lui-btn" @click="register">注册</button>
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
			// 顶部菜单内容
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
			logo: 'myweb',				// logo
			alertUserMenu: false,		// 弹出用户菜单
			loginUsername: '',			// 用户名（登录）
			loginPassword: '',			// 密码（登录）
			regUsername: '',			// 用户名（注册）
			regPassword: '',			// 密码（注册）
			regPassword2: '',			// 密码（二次确认）
			ifLogin: false,				// 是否登录
			noLogin: false,				// 是否未登录
			nickname: ''				// 用户昵称
		}
	},
	methods: {
		// 登录框
		alertLogin(){
			lui.openDialog('loginDialog')
		},
		// 注册框
		alertRegister(){
			lui.openDialog('regDialog')
		},
		// 登录
		login(){
			axios.post( lui.url + '/login',{
      			username: this.loginUsername,
      			password: this.loginPassword
      		}).then( (response)=>{
      			lui.msg(response.data.message)
				if(response.data.code == '1'){
					lui.setCookie('id', response.data.id, 30*60)
					lui.setCookie('token', response.data.token, 30*60)
					this.nickname = response.data.nickname
					this.ifLogin = true
					this.noLogin = false
					this.close()
				}
			})
		},
		// 注册
		register(){
			axios.post( lui.url + '/register',{
      			username: this.regUsername,
      			password: this.regPassword,
      			password2: this.regPassword2
      		}).then( (response)=>{
      			lui.msg(response.data.message)
				if(response.data.code == '1'){
					this.close()
				}
			})
		},
		// 获取登录信息
		getLoginInfo(){
			let id = lui.getCookie('id')
			if(id == undefined){
				this.ifLogin = false
				this.noLogin = true
				return
			}
			axios.post( lui.url + '/getUsername', {
				id: id
			}).then((response)=>{
				if(response.data.code == '1'){
					this.ifLogin = true
					this.noLogin = false
					this.nickname = response.data.message.nickname
				}else{
					this.ifLogin = false
					this.noLogin = true
				}
			})
		},
		showUserMenu(){
			this.alertUserMenu = true
		},
		hideUserMenu(){
			this.alertUserMenu = false
		},
		exitLogin(){
			lui.setCookie('id', '', -1)
			lui.setCookie('token', '', -1)
			this.ifLogin = false
			this.noLogin = true
		},
		close(){
			lui.closeDialog()
		}
	},
	mounted: function(){
		this.getLoginInfo()
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
#header-nav .if-login{
	display: none
}
#header-nav .if-login a{
	display: inline-block
}
#header-nav .user-menu{
	width: 105px;
	margin: 0 auto;
	background: #fff;
	border: 1px solid #dcdcdc;
	text-align: left;
	line-height: 33px;
	opacity: 0;
	transition: .2s
}
#header-nav .user-menu.active{
	opacity: 1
}
#header-nav .user-menu a{
	color: #323232;
	display: block;
	margin: 0;
	padding: 0 10px
}
#header-nav .user-menu a:hover{
	background: #409eff;
	color: #fff
}
</style>