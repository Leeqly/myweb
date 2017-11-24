<template>
<div id="container">
	<el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-main>Main</el-main>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</div>
</template>
 
<script>
	import Vue from 'vue'
	import { Container, Header, Aside, Main, Footer } from 'element-ui'
	Vue.use(Container)
	Vue.use(Header)
	Vue.use(Aside)
	Vue.use(Main)
	Vue.use(Footer)

  export default{
    data(){
      return {
        
      }
    }
  }
</script>
 
<style>
#container .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
#container .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
#container .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
#container > .el-container {
    margin-bottom: 40px;
  }
  
#container .el-container:nth-child(5) .el-aside,
#container .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
#container .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>