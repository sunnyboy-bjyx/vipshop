<template id="typeconstr">
	<main>
		<section class="type-content" v-for="(v,i) in listall">
			<img src="" class="title-img" v-if="v.show=='true'">
			<div class="content-small" v-for="(m,n) in listall[i].title1">
				<div class="title-box1">
					<h5 class="content-left">{{m.word1}}</h5>
					<h5 class="content-right" v-if="m.show=='true'"></h5>
				</div>
				<ul>
					<li class="content-img" v-for="(k,l) in listall[i].list[n].type">
						<router-link :to="'/'+router[l]"><img :src="k.img"></router-link>						
						<span class="content-word">{{k.word}}</span>
					</li>
				</ul>
			</div>
		</section>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				// title:[],
				// list1:[],
				listall:[],
				router:["type","type","type","type","type","type","constr"]
			}
		},
		mounted(){
		   this.$http.get('./data/type.json')
		     .then((response)=>{
		       this.listall=response.data.listall
		     })
		     .catch(function (error) {
		       console.log(error);
		     })
		     .then(function () {
		       // always executed
		     });  
		 },
	}
</script>

<style>
	.type-content{
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
	 /* padding-right:30px; */
	 padding-left:13px;
	 padding-right:13px;
	 padding-top:20px;
	 box-sizing: border-box;
	}
	.content-small h5{
		margin-left:23px;
		padding-top:15px;
		font-size: 13px;
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
	}
</style>
