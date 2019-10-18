<template>
	<main>
		<div class="index-con-top">
			<ul class="index-one">
				<li>
					<router-link to="#"><img :src="logn"></router-link>					
				</li>
			</ul>
			<ul class="index-two">
				<li v-for="(v,i) in list">
					<router-link to="#"><img :src="v.img"></router-link>				
				</li>
			</ul>
			<ul class="index-three">
				<li>
					<router-link to="#"><img :src="logn1"></router-link>				
				</li>
			</ul>
		</div>
		<div class="home-type">
			<ul>
				<li class="home-type-li" v-for="(v,i) in type">
					<router-link to="#"><img :src="v.imgtype"></router-link>				
				</li>
			</ul>
		</div>
		<div class="home-type-one">
			<div class="home-type-small">
				<router-link to="#"><img :src="logn2"></router-link>
				<div class="home-type-two" v-for="(v,i) in list2">
					<ul>
						<li class="home-one-img">
							<router-link to="#"><img :src="v.img2"></router-link>						
						</li>
						<li class="home-two-img">
							<router-link to="#"><img :src="v.img3"></router-link>						
						</li>
						<li class="home-three-img">
							<span>{{v.price}}</span>
						</li>
					</ul>					
				</div>
			</div>
		</div>
		<div class="home-two">
			<div class="home-type-two-small">
				<router-link to="#"><img :src="logn2"></router-link>			
				<div class="home-type-box">
					<div class="home-type1" v-for="(v,i) in list3">
						<ul>
							<li class="home-one1-img">
								<router-link to="#"><img :src="v.img3"></router-link>							
							</li>
							<li class="home-two1-img">
								<span class="home-two1">{{v.title}}</span>
								<span class="home-two2">{{v.price}}</span>
							</li>
						</ul>					
					</div>
				</div>
			</div>
		</div>
		<div class="home-content">
			<h3><span class="content-word">{{img3}}</span><span>{{img4}}</span></h3>
			<div class="content-time" v-for="(v,i) in list4">
				{{getDate1(v.time2,i)}}
				<p v-show="1==2">{{m}}</p>
				<ul>
					<li clas="content-one">
						<router-link to="#"><img :src="v.img4"></router-link>
					</li>
					<li class="content-two">
						<span class="content-one-one">{{v.title1}}</span>
						<span class="content-one-two" v-if="a1[i].day>0">剩&nbsp;{{a1[i].day}}&nbsp;天</span>
						<span v-else class="content-time1">
							还剩
							<span class="content-one-three">{{a1[i].hour}}</span>
							:&nbsp;
							<span class="content-one-three">{{a1[i].minutes}}</span>
							:&nbsp;
							<span class="content-one-three">{{a1[i].second}}</span>
						</span>
						
					</li>
					<li class="content-three">
						<span class="content-two-three" v-if="v.show=='true'">{{v.color}}</span>
						<span class="content-two-one">{{v.title2}}</span>
						<span class="content-two-four">{{v.title4}}</span>
						<span class="content-two-two" v-if="v.show1=='true'">{{v.title3}}</span>
					</li>
				</ul>
			</div>
			<div class="you-like">
				<h3>{{img5}}</h3>
				<ul>
					<li class="you-like-li" v-for="(v,i) in list6">
						<router-link to="#"><img :src="v.img"></router-link>
						<p>{{v.word}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="pink-color">
			<router-link to="#"><img :src="img6"></router-link>			
		</div>
		<div class="home-content">
			<div class="content-time" v-for="(v,i) in list7">
				{{getDate2(v.time2,i)}}
				<!-- <h1>{{a[i].second}} </h1> -->
				<p v-show="1==2">{{m}}</p>
				<ul>
					<li clas="content-one">
						<router-link to="#"><img :src="v.img4"></router-link>
					</li>
					<li class="content-two">
						<span class="content-one-one">{{v.title1}}</span>
						<span class="content-one-two" v-if="a2[i].day>0">剩&nbsp;{{a2[i].day}}&nbsp;天</span>
						<span v-else class="content-time1">
							还剩
							<span class="content-one-three">{{a2[i].hour}}</span>
							:&nbsp;
							<span class="content-one-three">{{a2[i].minutes}}</span>
							:&nbsp;
							<span class="content-one-three">{{a2[i].second}}</span>
						</span>
						
					</li>
					<li class="content-three">
						<span class="content-two-three" v-if="v.show=='true'">{{v.color}}</span>
						<span class="content-two-one">{{v.title2}}</span>
						<span class="content-two-four">{{v.title4}}</span>
						<span class="content-two-two" v-if="v.show1=='true'">{{v.title3}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="content-preson">
			<img :src="img7" class="preson-img">
			<ul>
				<li class="content-preson-li" v-for="(v,i) in list8">
					<router-link to="#"><img :src="v.img"></router-link>
				</li>
			</ul>
		</div>
		<div class="home-content">
			<div class="content-time" v-for="(v,i) in pro8">
				
				
				{{getDate(v.time2,i)}}
				<!-- <h1>{{a[i].second}} </h1> -->
				<p v-show="1==2">{{m}}</p>
				<ul>
					<li clas="content-one">
						<router-link to="#"><img :src="v.img4"></router-link>
					</li>
					<li class="content-two">
						<span class="content-one-one">{{v.title1}}</span>
						<span class="content-one-two" v-if="a[i].day>0">剩&nbsp;{{a[i].day}}&nbsp;天</span>
						<span v-else class="content-time1">
							还剩
							<span class="content-one-three">{{a[i].hour}}</span>
							:&nbsp;
							<span class="content-one-three">{{a[i].minutes}}</span>
							:&nbsp;
							<span class="content-one-three">{{a[i].second}}</span>
						</span>
					</li>				
					<li class="content-three">
						<span class="content-two-three" v-if="v.show=='true'">{{v.color}}</span>
						<span class="content-two-one">{{v.title2}}</span>
						<span class="content-two-four">{{v.title4}}</span>
						<span class="content-two-two" v-if="v.show1=='true'">{{v.title3}}</span>
					</li>
				</ul>
				
			</div>
		</div>
			<router-link to="" class="car-circle">
				<div class="car-footer">
					<span class="iconfont icon-gouwuchekong car"></span>
				</div>
			</router-link>
			<div class="top-footer"  @click="top1()" v-if="jiantou">
				<span class="iconfont icon-xiangshangjiantou top"></span>
			</div>		
	</main>
</template>

<script>
	export default{
		data(){
			return{
				msg:'../../data/images/15692265754405.jpg',
				msg1:'../../data/images/15692902915430.jpg',
				msg2:'../../data/images/bng.jpg',
				img3:'今日特卖',
				img4:'10点上新',
				img5:'猜你喜欢',
				list:'',
				img6:'',
				img7:'',
				list2:'',
				list3:'',
				list4:'',
				list5:'',
				list6:'',
				list7:'',
			    list8:'',
				fixtime:'',
		
				pro8:'',
				showday:[],
				showhour:[],
				showmin:[],
				showsecond:[],
				a:[],
				a1:[],
				a2:[],
				a3:[],
				m:0,
				jiantou:false,
				type:[],
				logn:[],
				logn1:[],
				logn2:[]
				
			}
		},
		
		methods:{
			daynum(v,i){
				var _this=this;
				var date=new Date();
				var fixtime=v;
				var data1=new Date(fixtime);
				var data1=data1.getTime();
				var data=date.getTime();
				var diff=parseInt((data1-data)/1000);
				// 计算天数
				 var Day=parseInt(diff/60/60/24)
				 var Hour=parseInt(diff/60/60%24)
				 var Minutes=parseInt(diff/60%60%24)
				 var Second=parseInt(diff%60)
				 // if(Hour<10){
				 // 					 Hour="0"+Hour
				 // }
				 //  if(Minutes<10){
				 // 					 Minutes="0"+Minutes
				 // }
				 //  if(Second<10){
				 // 					 Second="0"+Second
				 // }
				  if(Hour==0 && Minutes==0 && Second==0){
				  		return;
				  }
				  if(Hour<0 || Minutes<0 || Second<0){
					  
				  		Hour=0;
						Minutes=0;
						Second=0
				  }
				 _this.a[i]={
					 day:Day,
					 hour:Hour,
					 minutes:Minutes,
					 second:Second 
				 }
				 _this.m++
			
			},
			daynum1(v,i){
				var _this=this;
				var date=new Date();
				var fixtime=v;
				var data1=new Date(fixtime);
				var data1=data1.getTime();
				var data=date.getTime();
				var diff=parseInt((data1-data)/1000);
				// 计算天数
				 var Day=parseInt(diff/60/60/24)
				 var Hour=parseInt(diff/60/60%24)
				 var Minutes=parseInt(diff/60%60%24)
				 var Second=parseInt(diff%60)
				 // if(Hour<10){
					//  Hour="0"+Hour
				 // }
				 //  if(Minutes<10){
					//  Minutes="0"+Minutes
				 // }
				 //  if(Second<10){
					//  Second="0"+Second
				 // }
				  if(Hour==0 && Minutes==0 && Second==0){
				  		return;
				  }
				  if(Hour<0 || Minutes<0 || Second<0){
					  
				  		Hour=0;
						Minutes=0;
						Second=0
				  }
				 _this.a1[i]={
					 day:Day,
					 hour:Hour,
					 minutes:Minutes,
					 second:Second 
				 }
				 _this.m++
			
			},
			daynum2(v,i){
				var _this=this;
				var date=new Date();
				var fixtime=v;
				var data1=new Date(fixtime);
				var data1=data1.getTime();
				var data=date.getTime();
				var diff=parseInt((data1-data)/1000);
				// 计算天数
				 var Day=parseInt(diff/60/60/24)
				 var Hour=parseInt(diff/60/60%24)
				 var Minutes=parseInt(diff/60%60%24)
				 var Second=parseInt(diff%60)
				 // if(Hour<10){
				 // 					 Hour="0"+Hour
				 // }
				 //  if(Minutes<10){
				 // 					 Minutes="0"+Minutes
				 // }
				 //  if(Second<10){
				 // 					 Second="0"+Second
				 // }
				  if(Hour==0 && Minutes==0 && Second==0){
				  		return;
				  }
				  if(Hour<0 || Minutes<0 || Second<0){
					  
				  		Hour=0;
						Minutes=0;
						Second=0
				  }
				 _this.a2[i]={
					 day:Day,
					 hour:Hour,
					 minutes:Minutes,
					 second:Second 
				 }
				 _this.m++
			
			},
			getDate(v,i){
				var _this=this; 
			   setInterval(function(){
				   _this.daynum(v,i);
			   },1000);
			},
			getDate1(v,i){
				var _this=this; 
			   setInterval(function(){
				   _this.daynum1(v,i);
			   },1000);
			},
			getDate2(v,i){
				var _this=this; 
			   setInterval(function(){
				   _this.daynum2(v,i);
			   },1000);
			},
			top1(){				
				$("body,html").animate({"scrollTop":"0px"},1000)
				// $(window).scrollTop(0)
				console.log(this.$top)
				console.log(123)
			}
		},
		
		mounted(){
			// $(".top-footer").click(function(){
			// 	$("body,html").animate({"scrollTop":"0px"},1000)
			// })
		   this.$http.get('./data/my.json')
		     .then((response)=>{
		       console.log(this)
		       this.list=response.data.pros
			   this.list2=response.data.pros2
			   this.list3=response.data.pros3
			   this.list4=response.data.pros4
			   this.list5=response.data.data
			   this.list6=response.data.pros5
			   this.img6=response.data.img
			   this.img7=response.data.img1
			   this.list7=response.data.pros6
			   this.list8=response.data.pros7
			   // this.list9=response.data.pros8
			   this.time2=response.data.time3;
			   this.pro8=response.data.pros8
			   this.type=response.data.type
			   this.logn=response.data.logn
			   this.logn1=response.data.logn1
			   this.logn2=response.data.logn2
			   // console.log(this.pro8)
			   for (var i in this.pro8){
				   this.a.push({})
			   }
			   for(var i in this.list7){
				   this.a2.push({})
			   }
			   for(var i in this.list4){
				   this.a1.push({})
			   }
		     })
		     .catch(function (error) {
		       console.log(error);
		     })
		     .then(function () {
		       // always executed
		     })
			 var _this=this
			 setTimeout(function(){
				 $(window).scroll(function(event){
					var h=$(".you-like").offset().top;
					if($(document).scrollTop()>h){
						_this.jiantou=true;
						console.log(_this.jiantou)
					}else{
						_this.jiantou=false;
					}
				})
				// $("body,html").animate({scrollTop:0},200)
			 },500)
		},
			beforeRouteLeave(to, form, next) {
			       $(window).unbind('scroll')
			       next()
			      }
	}
</script>

<style scoped>
	*{
		padding:0px;
		margin:0px;
	}
	button{
		position: fixed;
		right:0px;
		bottom:0px;
	}
	.index-con-top{
		margin-top:76px;
		width:100%;
	}
	.index-con-top ul{
		margin-bottom:-5px;
	}
.index-one li{
	width:100%;
}
.index-one li img{
	width:100%;
	display:block;
}
.index-two{
	overflow: hidden;
}
.index-two li{
	width:33.3333%;
	float: left;
}
.index-two li img{
	width:100%;
	/* display:block; */
}
.index-three li{
	width:100%;
}
.index-three li img{
	width:100%;
	/* display:block; */
}
.home-type{
	width:100%;
}
.home-type ul{
	width:100%;
	overflow: hidden;
}
.home-type-li{
	width:20%;
	position:relative;
	float: left;
}
.home-type-li img{
	width:80%;
}
.home-type-li::after{
	content:"";
	width:45px;
	height:45px;
	border-radius:50%;
	background:#f5f9fc;
	position:absolute;
	top:6px;
	left:10px;
	z-index: -1;
}
.home-type-one{
	width:100%;
	/* background:#f3f4f6; */
	position:relative;
}
.home-type-small{
	width:100%;
}
.home-type-small>a img{
	width:100%;
	display: block;
}
.home-type-two{
	position:absolute;
	width:25%;
}
.home-type-two:nth-child(2){
	top:35%;
	left:0px;
}
.home-type-two:nth-child(3){
	top:35%;
	left:25%;
}
.home-type-two:nth-child(4){
	top:35%;
	left:50%;
}
.home-type-two:nth-child(5){
	top:35%;
	left:75%;
}
.home-type-two .home-one-img a img{
	width:90%;
}
.home-one-img{
	text-align: center;
}
.home-two-img{
	display: block;
	text-align: center;
}
.home-type-two .home-two-img img{
	/* width:60%; */
	height:24px;
	text-align: center;
}
.home-type-two .home-three-img{
	display: block;;
	font-size:12px;
	color:#de3d96;
	text-align: center;
}
.home-two{
	width:100%;
	background:white;
	position:relative;
	margin-top:-10px;
	padding-bottom:30px;
}
.home-type-two-small{
	position:relative;
}
.home-type-two-small a img{
	width:100%;
}
.home-type-box{
	width:100%;
	padding:0px 10px;
	box-sizing: border-box;
	position:absolute;
	top:35%;
	left:0px;
	background: white;
	overflow: hidden;
}
.home-type1{
	width:33.3333%;
	/* position:absolute; */
	padding-right:5px;
	box-sizing: border-box;
	float: left;
}
.home-type1 img{
	width:100%;
	text-align: center;
}
.home-one1-img{
	background:white;
}
.home-two1-img{
	text-align: center;
}
.home-two1-img .home-two1{
	background: #de3d96;
	color:white;
	font-size:12px;
}
.home-two2{
	font-size:0.772946rem;
}
.home-type-two-small img{
	display:block;
}
.home-content{
	width:100%;
	background:#f3f4f6;
	padding:0px 15px;
	box-sizing: border-box;
	padding-bottom:15px;
}
.home-content h3{
	text-align: center;
	line-height: 70px;
	font-size: 0.869565rem;
}
.home-content h3 span{
	padding-right:20px;
	position:relative;
}
.home-content h3 .content-word::after{
	content:"";
	width:3px;
	height:3px;
	background:#000;
	border-radius:50%;
	position:absolute;
	top:50%;
	right:8px;
}
.content-time{
	width:100%;
	background:white;
	border-radius:10px;
	margin-bottom:15px;
	padding-bottom:10px;
}
.content-two{
	margin-top:10px;
	padding-right:10px;
	overflow: hidden;
}
.content-time img{
	width:100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
}
.content-one-one{
	padding-left:15px;
	padding-right:15px;
}
.content-one-two{
	color:#585c64;
	font-size: 0.676328rem;
	float:right;
}
.content-two-one{
	color:#d34ba8;
	padding-left:15px;
}
.content-two-four{
	padding-right:15px;
}
.content-one-one{
	color:#222222;
	font-weight: bold;
	font-size:0.724637rem;
}
.content-time1{
	font-size: 0.57971rem;
    color:#585c64;
	float:right;
}
.content-one-three{
	color:white;
	font-size: 0.57971rem;
	background: #585c64;
	padding:1px;
}
.content-three{
	color:#585c64;
	margin-top:5px;
	font-size: 0.724637rem;
}
.content-two-three{
	background: #68cb66;
	color:white;
	font-size: 0.57971rem;
	border-radius: 7px;
	padding:1px 5px;
}
.you-like{
	width:100%;
	background: white;
	border-radius:10px;
	text-align: center;
}
.you-like h3{
	font-size: 0.772946rem;
}
.you-like ul{
	overflow: hidden;
}
.you-like-li{
	float: left;
	width: 33.3333%;
	padding-left:15px;
	box-sizing: border-box;
	font-size: 0.57971rem;
	color:#4e4e4e;
	position:relative;
}
.you-like-li img{
	width:100%;
	border-radius:5px;
	margin-bottom:15px;
}
.you-like-li p{
	position:absolute;
	width: 70%;
	background: #f7f6f4;
	border-radius:10px;
	bottom:25px;
	left:calc(50% + 7.5px);
	transform: translateX(-50%);
}
.pink-color{
	width:100%;
	/* padding-top:15px; */
}
.pink-color a img{
	width: 100%;
	display: block;
}
.content-preson{
	width:100%;
}
.content-preson img{
	display: block;
}
.preson-img{
	width: 100%;
}
.content-preson ul{
	overflow: hidden;
}
.content-preson-li{
	width: 33.3333%;
	float: left;
}
.content-preson-li img{
	width: 100%;
}
.car-circle{
	position:fixed;
	bottom:20px;
	left:15px;
}
.car-footer{
	width: 40px;
	background:rgba(25,29,38,.95);
	border-radius: 50%;
	text-align: center;
}
.car-footer .car{
	color:white;
	font-size: 24px;
	line-height: 40px;
}
.top-footer{
	position:fixed;
	bottom:20px;
	right:15px;
	width: 40px;
	background:rgba(25,29,38,.95);
	border-radius: 50%;
	text-align: center;
}
.top-footer .top{
	color:white;
	font-size: 25px;
	line-height: 40px;
}
</style>
