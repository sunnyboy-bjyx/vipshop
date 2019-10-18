<template>
	<main>
		<header class="fix-header">
			<header class="title-box">
				<router-link to="/" class="left"><span class=" header-img iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span></router-link>
				<div class="header-center">
					<ul>
						<li class="header-title1">
							<router-link to="#">分类</router-link>
						</li>
						<li class="header-title2">
							<router-link to="#">品牌</router-link>
						</li>
					</ul>
				</div>
				<router-link to="#" class="house"><span class="header-img iconfont icon-fangzi"></span></router-link>
			</header>
			<div class="type-search">			
				<router-link to="#">
					<button class="input-type">
						<span class="search iconfont icon-sousuo"></span>
						<span class="type-word">搜索品牌或商品</span>				
					</button></router-link>			
			</div>
		</header>
		<aside class="left-fix">
			<div class="left-fix-box">
				<ul>					
					<li :class="{leftfixtype:true,leftfixtype1:index2==i}" v-for="(v,i) in list" @click="index1(i)">
						<router-link to="">{{v}}</router-link>
					</li>
				</ul>
			</div>
		</aside>
		<!-- <typeconstr></typeconstr> -->
		<component :is="typeindex"></component>
		<!-- <component :is=""></component> -->
		<!-- <section class="type-content">
			<div class="content-small" v-for="(v,i) in title">
				<h5>{{v}}</h5>
				<ul>
					<li class="content-img" v-for="(m,n) in list1[i].type">
						<router-link to=""><img :src="m.img"></router-link>						
						<span class="content-word">{{m.word}}</span>
					</li>
				</ul>
			</div>
		</section> -->
		<!-- <typewom></typewom>
		<typeconstr></typeconstr> -->
	</main>	
</template>

<script>
	import typeconstr from './typeconstr.vue'
	import typewom from './typewom.vue'
	export default{
		components:{
			"typeconstr":typeconstr,
			"typewom":typewom
			
		},
		data(){
			return{
				list:['为你推荐','女装','男装','男女内衣','女鞋',
				      '男鞋','箱包皮具','手表配饰','护肤彩妆','个人护理','母婴',
					  '运动户外'				
				],
				index2:0,
				type:["typeconstr","typewom"],
				typeindex:"typeconstr"
			}
		},
		methods:{
			index1(i){
				this.index2=i
				this.typeindex=this.type[i]
				console.log(this.index2)
			}
		}
		// mounted(){
		//    this.$http.get('./data/type.json')
		//      .then((response)=>{
		//        this.title=response.data.title
		// 	   this.list1=response.data.list
		// 	   console.log(response.data.title)
		//      })
		//      .catch(function (error) {
		//        console.log(error);
		//      })
		//      .then(function () {
		//        // always executed
		//      });  
		//  }
	}
</script>
<style>
	.fix-header{
		width: 100%;
		position:fixed;
		top:0px;
		left:0px;
		z-index:100;
	}
	.title-box{
		width: 100%;
		padding:10px 20px;
		box-sizing: border-box;
		position:relative;
		border-bottom:1px solid #d8d8d8;
		background: white;
	}
	.header-center{
		width:45%;
		margin:0px auto;
	}
	.header-center ul{
		overflow: hidden;
	}
	.header-center ul li{
		float: left;
		width: 48%;
		border:1px solid #585c64;
		text-align: center;
		line-height: 1.304347rem;
		font-size: 14px;
	}
	.header-title1{
		border-top-left-radius:2px;
		border-bottom-left-radius:2px;
		background: #585c64;
		color:white;
	}
	.header-title2{
		border-top-right-radius:2px;
		border-bottom-right-radius:2px;
	}
	.header-title1 a{
		color:white;
	}
	.header-title2 a{
		color:#585c64;
	}
	.left,.house{
		position:absolute;
		top:50%;
		transform: translateY(-50%);
	}
	.left{		
		left:20px;		
	}
	.house{
		right:20px;
		
	}
	.header-img{
		color:#000;
		font-size: 1.111111rem;
		font-style:none;
		font-weight: bold;
	}
	.type-search{
		width: 100%;
		padding:15px 20px;
		background: #f3f4f5;
		box-sizing: border-box;
	}
	.input-type{
		width: 99%;
		border:1px solid #d8d8d8;
		height: 37px;
		font-size: 0.676328rem;
		color:#98989f;
		text-align: center;
		background: white;
	}
	.search{
		font-size: 1.449275rem;
	}
	.type-word{
		position:relative;
		top:-7px;
	}
	.left-fix{
		position: fixed;
		top:114px;
		left:0px;
		width: 24%;
	}
	.leftfixtype{
		width:100%;
		background: #f3f4f5;
		text-align: center;
        position:relative;
	}
	.left-fix-box .leftfixtype1{
		background: white;
		border-left:3px solid #de3d96;
	}
	 .leftfixtype a{
		line-height: 52px;
		color:#6b6f76;
		font-size: 0.676328rem;
	}
	.leftfixtype::after{
		content:"";
		width:70%;
		height: 1px;
		background:#eceeef ;
		position:absolute;
		bottom:0px;
		left:50%;
		transform: translateX(-50%);
	}
	/* .type-content{
		width: 76%;
		margin-top:114px;
		margin-left:24%;
	}
	.content-small{
		position:relative;
	}
	.content-small::after{
		content:"";
		width: calc(100% - 60px);
		height: 1px;
		background: #efefef;
		position:absolute;
		bottom:0px;
		left:20px;
	}
	.content-small ul{
     overflow: hidden;
	 padding-left:13px;
	 padding-right:13px;
	 padding-top:20px;
	 box-sizing: border-box;
	}
	.content-small h5{
		margin-left:17px;
		padding-top:15px;
		font-size: 13px;
		font-weight: bold;
	}
	.content-img{
		float: left;
		width: 33.3333%;
		box-sizing: border-box;
		margin-bottom:20px;
		text-align: center;
	}
	.content-img img{
		display: block;
		width: calc(100% - 34px);
		margin:0px auto;
	}
	.content-word{
		font-size: 0.628019rem;
		padding-top:6px;
		padding-bottom:20px;
	} */
</style>
