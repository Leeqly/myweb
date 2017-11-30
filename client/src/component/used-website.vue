<template>
	<div id="used-website">

		<h4>常去网站</h4>

		<a style="display:block" v-for="(item, index) in webList" :href="item.url" target="_blank">{{index + 1}}、{{item.name}}</a>

		
		<button class="lui-btn" @click="openAddWebDialog()">添加</button>

		<div class="dialog-box" id="addWebDialog">
			<div class="dialog-content">
				<div class="content">
					<div class="form-group-block">
						<label>网站名</label>
						<input type="text" class="lui-input" v-model="name" placeholder="请输入网站名">
					</div>
					<div class="form-group-block">
						<label>网站链接地址</label>
						<input type="text" class="lui-input" v-model="url" placeholder="请输入网站链接地址">
					</div>
				</div>
				<div class="footer">
					<button class="lui-btn" @click="close()">取消</button>
					<button class="lui-btn" @click="addWebList()">确定</button>
				</div>
			</div>
		</div>

	</div>
</template>
 
<script>

	import axios from 'axios'
	import lui from '../liqiyuan-ui'

	export default{
		data(){
			return {
				name: '',
				url: '',
				webList: {}
			}
		},
		methods: {
			getWebList(){
				axios.post('http://localhost:7857/getWebList').then( (response)=>{
					this.webList = response.data
				});
			},
			addWebList(){
				let url = this.url
				let webPre = 'http://'
				if(url.substr(0,7) != webPre){
					url = webPre + url
				}
				axios.post('http://localhost:7857/addWebList',{
	      			name: this.name,
	      			url: url
	      		}).then( (response)=>{
	      			lui.msg(response.data.message)
	      			this.getWebList()
	      			this.close()
				});
			},
			openAddWebDialog(){
				lui.openDialog('addWebDialog')
			},
			close(){
				lui.closeDialog()
			}
		},
		mounted: function(){
			this.getWebList()
		}
	}
</script>
 
<style>
</style>