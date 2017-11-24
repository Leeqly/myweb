<template>
	<div id="index">
		主页<br>主页<br>主页<br>主页<br>主页<br>主页<br>主页<br>主页<br>主页<br>主页<br>主页<br>主页<br>
		主页<br>主页<br>主页<br>主页<br>主页<br>主页
	</div>
</template>
 
<script>
import Vue from 'vue'
import axios from 'axios'
// import { MessageBox } from 'element-ui';
// Vue.use(MessageBox)
export default {
	data() {
		return {
			
	    }
	},
	methods: {
      // open() {
      //   this.$alert('这是一段内容', '标题名称', {
      //     confirmButtonText: '确定',
      //     callback: action => {
      //       this.$message({
      //         type: 'info',
      //         message: `action: ${ action }`
      //       });
      //     }
      //   });
      // }
    },
	mounted: function(){
		axios.get('http://10.10.32.101/bbs/index.php/Index/Publish/publish_data',{}).then( (response)=>{
			console.log(response.data);
		});
	}
}
</script>
 
<style>

</style>