<template>
	<div id="index">
		<div class="form-group-block">
			<label>账号</label>
			<input type="text" class="lui-input">
		</div>
		<div class="form-group-inline">
			<label>账号</label>
			<input type="text" class="lui-input">
		</div>
	</div>
</template>
 
<script>
import Vue from 'vue'
import axios from 'axios'

export default {
	data() {
		return {
			
	    }
	},
	methods: {
      
    },
	mounted: function(){
		let name = 'test'
		let value = 'cookietest'
		var Days = 30;
		var exp = new Date();
		exp.setTime(exp.getTime() + Days*24*60*60*1000);
		document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
		console.log(8)
	}
}
</script>
 
<style>

</style>