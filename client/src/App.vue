<!-- 一个template（组件）下只能有一个并列的div -->
<template>
<div id="myweb">
	<headerNav></headerNav>
	<router-view class="view"></router-view>
</div>
<!-- <div id="app">
	<el-container>
		<el-header>
			<el-row>
				<el-col :span="4">
					<h4>{{ msg }}</h4>
				</el-col>
				<el-col :span="16">
					<headerNav></headerNav>
				</el-col>
				<el-col :span="4">
					<div id="auth">
						<a href="javascript:;" @click="loginShow=true">登录</a>
						<a href="javascript:;" @click="registerShow=true">注册</a>
					</div>
				</el-col>
			</el-row>
		</el-header>
		<el-main>
			<router-view class="view"></router-view>
		</el-main>
	</el-container>
	<el-dialog class="dialog" :visible.sync="loginShow" :before-close="loginClose" width="500px">
		<span>
			<div class="form-group">
	  			<label>账12号：</label>
	  			<el-input size="small" placeholder="请输入账号" v-model="loginUsername"></el-input>
			</div>
			<div class="form-group">
	  			<label>密码：</label>
	  			<el-input type="password" size="small" placeholder="请输入密码" v-model="loginPassword"></el-input>
			</div>
		</span>
		<span slot="footer" class="dialog-footer">
	    	<el-button size="small" type="primary" @click="toLogin()">登录</el-button>
	    	<el-button size="small" @click="loginShow=false">取消</el-button>
	  	</span>
	</el-dialog>
	<el-dialog class="dialog" :visible.sync="registerShow" :before-close="registerClose" width="500px">
		<span>
			<div class="form-group">
	  			<label>用户名</label>
	  			<el-input size="small" placeholder="请输入用户名" v-model="regUsername"></el-input>
			</div>
			<div class="form-group">
	  			<label>密码</label>
	  			<el-input type="password" size="small" placeholder="请输入密码" v-model="regPassword"></el-input>
			</div>
			<div class="form-group">
	  			<label>密码确认	</label>
	  			<el-input type="password" size="small" placeholder="请再次输入密码" v-model="regRePassword"></el-input>
			</div>
		</span>
		<span slot="footer" class="dialog-footer">
	    	<el-button size="small" type="primary" @click="toRegister()">注册</el-button>
	    	<el-button size="small" @click="registerShow=false">取消</el-button>
	  	</span>
	  	<el-dialog :visible.sync="innerVisible" append-to-body width="20%">注册成功</el-dialog>
	</el-dialog>	
</div> -->
</template>

<script>

import lui from './liqiyuan-ui'
import headerNav from './component/header-nav.vue'
import Vue from 'vue'
import axios from 'axios'

export default {
	data () {
		return {
			// msg: 'My Website',
			// loginShow: false,
			// registerShow: false,
   //    		loginUsername: '',
   //    		loginPassword: '',
   //    		regUsername: '',
   //    		regPassword: '',
   //    		regRePassword: '',
   //    		innerVisible: false,
   //    		usernameInfo: '',
   //    		passwordInfo: '',
   //    		rePasswordInfo: ''
		}
	},
    methods: {
		loginClose(){
			this.loginShow = false
      	},
      	registerClose(){
			this.registerShow = false
      	},
      	toLogin(){
      		axios.post('http://localhost:7857/login',{
      			username: this.loginUsername,
      			password: this.loginPassword
      		}).then( (response)=>{
				console.log(response.data);
			});
      	},
      	toRegister(){
      		axios.post('http://localhost:7857/register',{
      			username: this.regUsername,
      			password: this.regPassword,
      			password2: this.regRePassword
      		}).then( (response)=>{
				if(response.data.code == '1'){
					this.innerVisible = true;
				}else{
					alert(response.data.message)
				}
			});
      	},
    },
    mounted: function(){
    	
    },
    components: {
    	headerNav
    }
}



</script>


<style>

	/*@import '//at.alicdn.com/t/font_357933_wtyqxqj3ba9k9.css';*/

</style>
