<template id="typewom">
	<main>
		<section class="type-content" v-for="(v,i) in listall1">
			<img :src="v.titleimg" class="title-img" v-if="v.show=='true'">
			<div class="content-small" v-for="(m,n) in listall1[i].title1">
				<div class="title-box1">
					<h5 class="content-left">{{m.word1}}</h5>
					<h5 class="content-right" v-if="m.show1=='true'">{{m.word2}}</h5>
				</div>
				<ul>
					<li class="content-img" v-for="(k,l) in listall1[i].list[n].type">
						<router-link to=""><img :src="k.img"></router-link>						
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
				listall1:[]
			}
		},
		mounted(){
		   this.$http.get('./data/type.json')
		     .then((response)=>{
		       this.listall1=response.data.listall1
			   console.log(response.data.listall1)
			   console.log(this.listall.title)
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

<style >
	.title-img{
		width: calc(100% - 30px);
		margin-left:15px;
		margin-top: 20px;
	}
	.title-box1{
		width: calc(100% - 23px);
		/* margin-left: 23px; */
		height: 32px;
	}
	.content-left{
		float: left;
		font-weight: bold;
	}
	.title-box1 .content-right{
		float: right;
		font-size: 0.6rem;
		color:#585c64;
	}
</style>
