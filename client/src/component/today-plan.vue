<template>
	<div id="today-plan">
		今日计划
		<input type="text" id="test" class="lui-input">
		<button class="lui-btn" @click="qw()">点击</button>
	</div>
</template>
 
<script>
	import lui from '../liqiyuan-ui'
	export default{
		data(){
			return {
				
			}
		},
		methods: {
			qw(){
				console.log( lui.$id('test').value )
			}
		}
	}
</script>
 
<style>
</style>