<!-- 一个template（组件）下只能有一个并列的div -->
<template>
<div id="app">
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
	  			<label>账号：</label>
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
</div>
</template>

<script>

import headerNav from './component/header-nav.vue'
import Vue from 'vue'
import axios from 'axios'
import { blankCheck } from './public/public'
import { Row,Col,Container,Header,Main,Dialog,Button,Input,Popover } from 'element-ui'

Vue.use(Row)
Vue.use(Col)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Dialog)
Vue.use(Button)
Vue.use(Input)
Vue.use(Popover)

export default {
	data () {
		return {
			msg: 'My Website',
			loginShow: false,
			registerShow: false,
      		loginUsername: '',
      		loginPassword: '',
      		regUsername: '',
      		regPassword: '',
      		regRePassword: '',
      		innerVisible: false,
      		usernameInfo: '',
      		passwordInfo: '',
      		rePasswordInfo: ''
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
      	}
    },
    components: { headerNav }
}
</script>


<style>

@import url('./public/public.css');

#app > section > header{
	position: fixed;
	width: 100%;
	background: #409eff;
	color: #fff;
	line-height: 60px
}
#app > section > main{
	width: 1140px;
	margin: 60px auto 0 auto
}

#auth{
	text-align: right;
	margin-right: 60px
}
#auth a:nth-child(1){
	color: #fff;
	padding-right: 15px;
	border-right: solid 1px rgb(180,180,180)
}
#auth a:nth-child(2){
	color: #fff;
	padding-left: 11px;
}
#auth a:hover{
	color: #d8dce5
}
.dialog{
	background:rgba(0,0,0,0.1);
}

</style>
