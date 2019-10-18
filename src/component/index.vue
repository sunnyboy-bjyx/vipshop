<template>
	<main>
		<header class="header-fixed">
			 <div class="header">
			 	 <router-link to="/sign"> <span class="iconfont icon-denglu"></span></router-link>
			 	 <router-link to="#"> <input type="text" placeholder="大家正在搜索:面膜" class="seacher"></router-link>
			 	 <router-link to="/type"><span class="iconfont icon-icon-test"></span></router-link>
			  </div>
			  <div class="header-box">
			 	 <div class="header-list">
			 		 <div class="header-ul">
			 			 <router-link to=""><span class="span1">今日推荐</span></router-link>
			 			  <router-link to="/fqbuy"><span>最后疯抢</span></router-link>
			 			  <router-link to=""><span>美妆</span></router-link>
			 			  <router-link to=""><span>母婴</span></router-link>
			 			  <router-link to=""><span>国际</span></router-link>
			 			  <router-link to=""><span>家电</span></router-link>
			 			  <router-link to=""><span>家居</span></router-link>
			 			 <router-link to=""><span>生活</span></router-link>
			 			 <router-link to=""><span>唯品会</span></router-link>
			 		 </div>
			 	 </div>
			 	  <router-link to="#" class="down"><span class="iconfont icon-webicon212 down1"></span></router-link>
			  </div> 
		</header>		
		<router-view></router-view>
	</main>
</template>
<script>
	
</script>

<style>
	.header-fixed{
		padding-left:10px;
		padding-right:10px;
		position:fixed;
		top:0px;
		left:0px;
		width:100%;
		background:white;
		z-index:200;
		box-sizing: border-box;
		text-align: center;
	}
	.header{
		width:100%;
		
	}
	.header a{
		color:#a1a4a8;
	}
	.header .seacher{
		color:#98989f;
		background-color:#f3f4f5;
		border:1px solid #ececed;
		outline:none;
		border-radius:20px;
		width:73%;
		height:26px;
		padding-left:10px;
		font-size: 0.75rem;
	}
	.header span{
		position:relative;
		top:5px;
		font-size:30px;
	}
	.header-box .down{
		position:absolute;
		width:28px;
		height:28px;
		right:0px;
		top:40%;
		transform:translateY(-50%);
	}
	.header-box{
		position:relative;
		margin-top:10px;
		overflow:hidden;
		height:30px;
		width:100%;
	}
	.header-list{
		width:90%;
		overflow-x:scroll;
		padding-bottom:20px;
	}
	.header-ul{
		text-align:left;
		/* padding-left:10px; */
		width:250%;
	}
	.header-ul span{
		font-size:0.676328rem;
		margin-right:22px;
		color:#92949a;
	}
	.header-ul .span1::after{
		content:"";
		width:100%;
		height:3px;
		background-color:#d34ba8;
		position:absolute;
		left:0px;
		bottom:-8px;
	}
	.header-ul .span1{
		color:#d34ba8;
	}
	.header-ul span{
		position:relative;
	}
	.header-box .down1{
		font-size:26px;
	}
</style>
