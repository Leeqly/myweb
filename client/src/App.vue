<!-- 一个template（组件）下只能有一个并列的div -->
<template>
<div id="myweb">
	<headerNav></headerNav>
	<router-view class="view"></router-view>
</div>

</template>

<script>

import lui from './liqiyuan-ui'
import headerNav from './component/header-nav.vue'
import Vue from 'vue'
import axios from 'axios'

export default {
	data () {
		return {
			
		}
	},
    methods: {
		
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
