<template>
  <div id="app">
	 <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
	  window.onresize = getRem;
	     function getRem(){
	         document.documentElement.style.fontSize = document.documentElement.offsetWidth / 20+'px';
	     }
	     getRem();
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  // display: inline-block;
  // margin: 0 10px;
}

a {
  text-decoration:none;
}
// .header-fixed{
// 	padding-top:10px;
// 	position:fixed;
// 	top:0px;
// 	left:0px;
// }
// .header{
// 	width:100%;
	
// }
// .header a{
// 	color:#a1a4a8;
// }
// .header .seacher{
// 	color:#98989f;
// 	background-color:#f3f4f5;
// 	border:1px solid #ececed;
// 	outline:none;
// 	border-radius:20px;
// 	width:80%;
// 	height:26px;
// 	padding-left:10px;
// }
// .header span{
// 	font-size:27px;
// }
// .header-list{
// 	width:92%;
// 	overflow:hidden;
// 	padding-bottom:10px;
// }
// .header-ul{
// 	width:120%;
// }
// .header-ul .span1::after{
// 	content:"";
// 	width:100%;
// 	height:3px;
// 	background-color:#d34ba8;
// 	position:absolute;
// 	left:0px;
// 	bottom:-10px;
// }
// .header-ul .span1{
// 	color:#d34ba8;
// }
// .header-ul span{
// 	position:relative;
// }
// .header-box .down{
// 	position:absolute;
// 	width:30px;
// 	height:30px;
// 	right:0px;
// 	top:50%;
// 	transform:translateY(-50%);
// }
// .header-box{
// 	position:relative;
// 	margin-top:10px;
// }
// .header-box .down1{
// 	font-size:26px;
// }
</style>
