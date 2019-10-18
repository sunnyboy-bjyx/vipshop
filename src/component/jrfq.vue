<template>
	<main>
		<section class="fq-content">
			<div class="content-title">
				<img :src="timetitle" />
			</div>
				<div class="fqcontent-img" v-for="(v,i) in content">
					<div class="fq-box1" v-for="(a,m) in content[i].content1">
						<img :src="a.img" />
						<span class="xrtj">{{a.word}}</span>
						<div class="img-top">{{a.word1}}</div>
					</div>
					<ul>
						<li class="fqcontent-li" v-for="(k,l) in content[i].content2">
							<img :src="k.img1" />
							<span class="fq-one">{{k.word1}}</span>
							<del class="fq-two">{{k.word2}}</del>
							<span class="fq-three">{{k.word3}}</span>
						</li>
					</ul>
					<div class="word-bottom" v-for="(x,t) in content[i].content3">
						<p>{{x.word}}</p>
					</div>
				</div>
				<div class="alongmy">
					<h3>我的专属推荐</h3>
					<div class="mytype">
						<ul>
							<li class="mytype-li" v-for="(v,i) in type">
								<img :src="v.img" />
								<p>{{v.word}}</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="fqcontent-img" v-for="(v,i) in bottom">
					<div class="fq-box1" v-for="(a,m) in bottom[i].content1">
						<img :src="a.img" />
						<span class="xrtj">{{a.word}}</span>
						<div class="img-top">{{a.word1}}</div>
					</div>
					<ul>
						<li class="fqcontent-li" v-for="(k,l) in bottom[i].content2">
							<img :src="k.img1" />
							<span class="fq-one">{{k.word1}}</span>
							<del class="fq-two">{{k.word2}}</del>
							<span class="fq-three">{{k.word3}}</span>
						</li>
					</ul>
					<div class="word-bottom" v-for="(x,t) in bottom[i].content3">
						<p>{{x.word}}</p>
					</div>
				</div>
		</section>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				title:[],
				word:[],
				timetitle:'',
				content:[],
				type:[],
				bottom:[]
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
		 }
	}
</script>

<style>
	.fq-content{
		width: 100%;
		background: #fafafa;
		padding:0px 15px;
		box-sizing: border-box;
	}
	.content-title{
		width: 100%;
		padding-top:8px;
	}
	.content-title img{
		width: 100%;
	}
	.fqcontent-img{
		width: 100%;
		background: white;
		border-radius: 8px;
		margin-bottom:15px;
	}
	.fq-box1{
		width: 100%;
		position:relative;
	}
	.fq-box1 img{
		width: 100%;
		display: block;
		border-top-left-radius: 8px;
		border-top-right-radius: 8px;
	}
	.img-top{
		font-size: 14px;
		color:white;
		border:1px solid white;
		border-radius: 15px;
		position:absolute;
		bottom:7px;
		left:50%;
		transform: translateX(-50%);
		padding:2px 30px;
	}
	.xrtj{
		position:absolute;
		font-size: 12px;
		background: linear-gradient(270deg,#f02a98,#ff6868 98%);
		top:12px;
		left:12px;
		color:white;
		padding:1px 3px;
		border-radius:2px;
	}
	.fqcontent-img ul{
		overflow: hidden;
		border-bottom:1px solid #e8e8e8;
		margin:0px 7.5px;
	}
	.fqcontent-li{
		float: left;
		width: 33.33%;
		padding:15px 7.5px;
		box-sizing: border-box;
		position:relative;
	}
	.fqcontent-li img{
		width: 100%;
	}
	.fq-one{
		font-size: 12px;
		font-weight: bold;
		color:#e04c9e;
		padding-top:10px;
	}
	.fq-two{
		font-size: 12px;
		color:#ababb0;
		padding-top:10px;
	}
	.fq-three{
		font-size: 12px;
		color:#e04c9e;
		position:absolute;
		left:18px;
		bottom:55px;
		background: white;
		border:1px solid #e04c9e;
		padding:1px 5px;
	}
	.word-bottom{
		font-size: 14px;
		color:#585c64;
		line-height: 50px;
		padding-left:15px;
	}
	.alongmy{
		width: 100%;
		overflow: hidden;
	}
	.alongmy h3{
		font-size: 16px;
		color:#242424;
		font-weight: bold;
	}
	.mytype{
		background: white;
		border-radius: 10px;
		margin-top:10px;
		margin-bottom:15px;
		padding-bottom:10px;
	}
	.mytype ul{
		overflow: hidden;
		padding:0px 10px;
	}
	.mytype-li{
		width: 25%;
		float: left;
		box-sizing: border-box;
		margin-top:20px;
		text-align: center;
	}
	.mytype-li img{
		width: calc(100% - 20px);
		border-radius: 50%;
	}
	.mytype-li p{
		font-size: 14px;
		color:#2c3e50;
		padding-top:5px;
		text-align: center;
	}
</style>
