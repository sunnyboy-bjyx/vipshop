<template>
	<main>
		<header class="fq-title">
			<div class="fq-top" v-for="(v,i) in title">
				<img :src="v.img" />
			</div>
		</header>
		<div :class="{fqfix:true,fixed:show}" >
			<ul>
				<li :class="{fqfixli:true,color1:index1==i}" v-for="(v,i) in word" @click="index2(i)">
					<p>{{v.word}}</p>
				</li>
			</ul>
		</div>
		<component :is="typeindex"></component>
	</main>
</template>

<script>
	import jrfq from './jrfq.vue'
	import lastminute from './lastminute.vue'
	export default{
		components:{
			jrfq,
			lastminute
		},
		data(){
			
			return{
				title:[],
				word:[],
				timetitle:'',
				content:[],
				type:[],
				bottom:[],
				index1:0,
				type1:["jrfq","lastminute"],
				typeindex:"jrfq",
				show:false
			}
		},
		methods:{
			index2(i){
				this.index1=i
				this.typeindex=this.type1[i]
				console.log(i)
			}
		},
		mounted(){
		   this.$http.get('./data/fqbuy.json')
		     .then((response)=>{
		       this.title=response.data.title
			   this.word=response.data.word
			   this.timetitle=response.data.timetitle
			   this.content=response.data.content
			   this.type=response.data.type
			   this.bottom=response.data.bottom
			   console.log(response.data.title)
		     })
		     .catch(function (error) {
		       console.log(error);
		     })
		     .then(function () {
		       // always executed
		     });  
			 var _this=this
			 setTimeout(function(){
				 $(window).scroll(function(event){
					var h=$(".fq-title").offset().top;
					console.log('高度'+h)
					if($(window).scrollTop()>h+500){
						_this.show=true;
					}
					if($(window).scrollTop()<=h+500){
						_this.show=false;
					}
				})
			 },20)
		 }
	}
</script>

<style>
	.fq-title{
		width: 100%;
	}
	.fq-top{
		width: 100%;
	}
	.fq-top img{
		width: 100%;
		display: block;
	}
	.fqfix{
		width: 100%;
		background: white;
		padding:0px 25px;
		box-sizing: border-box;
	}
	.fqfix ul{
		overflow: hidden;
	}
	.fqfixli:nth-child(1){
		float: left;
	}
	.fqfixli:nth-child(2){
		float: right;
	}
	.fqfixli{
		font-size:16px ;
		font-weight: bold;
		color:#222222;
		line-height: 45px;
	}
	.color1{
		border-bottom:2px solid #ef56a1;
		color:#ef56a1;
	}
	.fixed{
		position:fixed;
		top:0px;
		left:0px;
		z-index:100;
	}
</style>
