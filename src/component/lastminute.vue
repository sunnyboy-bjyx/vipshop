<template>
	<main>
		<section class="lastbox">
			<div class="last-small" v-for="(v,i) in last">
				<img :src="v.img" />
				<span class="center-last">{{v.word}}</span>
				<div class="lasttime">
					<div class="last-time2">
						明日<span class="lasttime1">{{v.word1}}</span>
						:<span class="lasttime2">{{v.word2}}</span>
						开抢
					</div>
					
					<div class="last-time3">
						<span class="lastmin">抢先收藏</span>
						<span class="iconfont icon-xiangzuojiantou last-left"></span>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				last:[]
			}
		},
		mounted(){
		   this.$http.get('./data/fqbuy.json')
		     .then((response)=>{
		       this.last=response.data.last
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
	.lastbox{
		background: #fafafa;
		width: 100%;
		padding:0px 15px;
		box-sizing: border-box;
		overflow: hidden;
	}
	.last-small{
		width: 100%;
		margin-top:10px;
		position:relative;
		border-radius: 5px;
	}
	.last-small img{
		width: 100%;
		border-radius: 5px;
	}
	.center-last{
		font-size: 12px;
		color:white;
		border:1px solid white;
		padding:1px 25px;
		border-radius: 10px;
		position:absolute;
		left:50%;
		transform: translateX(-50%);
		bottom:32%;
	}
	.lasttime{
		font-size: 12px;
		color:white;
		position:absolute;
		left:50%;
		transform: translateX(-50%);
		bottom:12px;
		overflow: hidden;
	}
	.last-time2{
		float: left;
	}
	.lasttime1{
		background: #1d1d1e;
		padding:1px;
	}
	.lasttime2{
		background: #1d1d1e;
		padding:1px;
	}
	.last-time3{
		background: #1d1d1e;
		padding:0px 8px;
		border-radius: 10px;
		float: left;
	}
</style>
