<template>
	<main>
		<header class="constr-header1">
			<router-link to="#" class="constr-left1">
				<span class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu- constr-left" @click="back()"></span>
			</router-link>
			<h3>为你推荐</h3>
		</header>
		<section class="constr-content-box">
				<div class="constr-content" v-for="(v,i) in list">
					<router-link :to="'/'+router[i]">
						<ul>
							<li class="constrone">
								<img :src="v.img" class="big-img">
								<img :src="v.img1" class="small-img">
								<img :src="v.img2" class="left-img">
							</li>
							<li class="constrtwo">
								<span class="smallone">{{v.word1}}</span>
								<span class="smalltwo">{{v.word2}}</span>
								<del class="smallthree">{{v.word3}}</del>
								<span class="smallfour">{{v.word4}}</span>
							</li>
							<li class="constrthree">
								<p>{{v.word5}}</p>
							</li>
						</ul>
					</router-link>
				</div>
		</section>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
				router:["constr","detiles"]
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
		   this.$http.get('./data/constr.json')
		     .then((response)=>{
		       this.list=response.data.list
			   console.log(response.data.list)
		     })
		     .catch(function (error) {
		       console.log(error);
		     })
		     .then(function () {
		       // always executed
		     });  
		 }
	}
</script>

<style>
	.constr-header1{
		width: 100%;
		padding:10px 20px;
		box-sizing: border-box;
		text-align: center;
	}
	.constr-header1 .constr-left1{
		position:absolute;
		top:10px;
		left:20px;
	}
	.constr-header1 .constr-left{
		font-size: 22px;
		font-weight: bold;
		color:#000;
	}
	.constr-header1 h3{
		font-size: 0.9rem;
	}
	.constr-content-box{
		background: #f3f4f5;
		padding-top:10px;
		padding-left:5px;
		padding-right:5px;
		overflow: hidden;
	}
	.constr-content{
		width: calc(50% - 10px);
		margin:0px 5px 5px 5px;
		background: white;
		border-radius: 10px;
		float: left;
	}
	.constrone{
		position:relative;
	}
	.constrtwo ,.constrthree{
		padding-left:9px;
	}
	.big-img{
		width: 100%;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
	}
	.small-img{
		width: 16%;
		position:absolute;
		top:5px;
		right:5px;
	}
	.left-img{
		position:absolute;
		top:15px;
		left:5px;
		width:16% ;
	}
	.smallone{
		font-size: 0.57971rem;
		color:white;
		background:linear-gradient(90deg,#de3d96,#cb78dc);
		padding:1px 2px;
		border-radius: 7px;
	}
	.smalltwo{
		font-size: 0.8rem;
		font-weight: bold;
	}
	.smallthree,.smallfour{
		font-size: 0.6rem;
		color:#c5c5c9;
	}
	.constrthree p{
		padding-top:13px;
		padding-bottom:36px;
		font-size: 0.6rem;
		color:#888b91;
	}
</style>
