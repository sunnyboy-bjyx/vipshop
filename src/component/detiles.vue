<template>
	<main>
		<div class="title-detiles">
			<swiper :options="swiperOption" class="detiles-title">
		        <swiper-slide><img :src="title[0].img"></swiper-slide>
		        <swiper-slide><img :src="title[1].img"></swiper-slide>
		        <swiper-slide><img :src="title[2].img"></swiper-slide>
		        <swiper-slide><img :src="title[3].img"></swiper-slide>
		        <div class="swiper-pagination circle" slot="pagination"></div>
			</swiper>
			<span class="iconfont icon-xiangzuojiantou detiles-left" @click="back()"></span>
			<div class="detiles-small">
				<span class="iconfont icon-icon-test1 detiles-like"></span>
				<span class="iconfont icon-fenxiang detiles-sqare"></span>
			</div>
		</div>
		<div class="detiles-word" v-for="(v,i) in smallword">
			<span class="detiles-one">{{v.price}}</span>
			<span class="detiles-two">{{v.price1}}</span>
			<span class="detiles-three">{{v.price2}}</span>
			<span class="detiles-four">{{v.price3}}</span>
		</div>
		<div class="detiles-content" v-for="(v,i) in contentword">
			<h4>{{v.title}}</h4>
			<p>{{v.word}}</p>
		</div>
		<section class="content-bng">
			<div class="money">
				<ul>
					<li class="money-one">
						<span class="money1">唯品花</span>
						<span class="money2">开通唯品花0首付分期购物</span>
					</li>
					<li class="money-one">
						<span class="money1">限制</span>
						<span class="money2">唯品快抢商品不支持使用优惠券</span>
					</li>
					<li class="money-one">
						<span class="money1">唯品币</span>
						<span class="money2">购物最多可获得19个唯品币</span>
					</li>
					<router-link to="">
						<li class="money-two">
						立即开通
						</li>
					</router-link>					
				</ul>
			</div>
			<div class="detiles-big">
				<p>规格</p>
				<div>均码</div>
			</div>
			<div class="location1">
				<span class="location">配送至</span>
			</div>
			<div class="gou-title">
				<ul>
					<li class="gou-li">
						<span class="iconfont icon-gou1 gou"></span>
						<span class="gou1">唯品会自营</span>
					</li>
					<li class="gou-li">
						<span class="iconfont icon-gou1 gou"></span>
						<span class="gou1">7天可退</span>
					</li>
					<li class="gou-li">
						<span class="iconfont icon-gou1 gou"></span>
						<span class="gou1">退货返10元唯品币</span>
					</li>
					<li class="gou-li">
						<span class="iconfont icon-gou1 gou"></span>
						<span class="gou1">7天可换</span>
					</li>
					<li class="gou-circle">
						<span class="gou-one"></span>
						<span class="gou-two"></span>
						<span class="gou-three"></span>
					</li>
				</ul>
			</div>
			<div class="pinpai" v-for="(v,i) in pinpai">
				<span class="shoucang">收藏</span>
				<ul>
					<li class="pinpai-img">
						<img :src="v.img" />
					</li>
					<li class="pinpai-word">
						<h5>{{v.pinpai}}</h5>
						<p>{{v.constr}}</p>
					</li>
				</ul>
				<h3>查看品牌</h3>
			</div>
			<div class="detiles-constr">
				<p>商品介绍</p>
				<ul>
					<li class="constr-li" v-for="(v,i) in constr">
						<span class="constr-one">{{v.location}}</span>
						<span class="constr-two">{{v.city}}</span>
					</li>
				</ul>
				<div class="constr-fix">
					<span class="fix-one">展开全部</span>
					<span class="iconfont icon-webicon212 fix-left"></span>
				</div>
			</div>
			<div class="shouhou">
				<div class="title-shouhou">
					<span class="shouhou1">售后与咨询</span>
					<span class="iconfont icon-xiangshang up"></span>
				</div>
				<div class="buy">
					<img src="../assets/images/detils6.png" />
					<span>购买咨询</span>
				</div>
			</div>
			<div class="detiles-content1">
				<p>图文详情</p>
				<img :src="imgone" class="detiles-img">
			</div>
			<div class="detiles-img1" v-for="(v,i) in contentimg">
				<img :src="v.img" class="detiles-big1">
			</div>
			<div class="constrtwo">
				<p>价格说明</p>
				<span>唯品会展示的中间未划横线价格（显示如￥799）为唯品会销售价，该价格是交易成交价，是您最终决定是否购买商品的依据。</span>
				<div class="constr-fix">
					<span class="fix-one">展开全部</span>
					<span class="iconfont icon-webicon212 fix-left"></span>
				</div>
			</div>
			<div class="detiles-bottom">
				<p>—&nbsp;已经到底啦，再往上逛逛吧&nbsp;—</p>
				<div class="bottom-small">
					<span class="left-p">唯品会</span>
					<span class="center-word">唯品会客户端，特卖抢不停</span>
					<span class="right-word">下载</span>
				</div>
			</div>
			<footer class="detiles-footer">
				<ul>
					<li class="footer-left">
						<span>唯品会客户端</span>
						<span>关于我们</span>
					</li>
					<li class="footer-right">
						<span>登录</span>
						<span>注册</span>
					</li>
				</ul>
				<p class="footer-word">Copyright&nbsp;@&nbsp;2008-2019 m.vip.com.All Rights Reserved  ICP备 08114786号</p>
				<p class="footer-word2">
					<img src="../assets/images/icpno.png" />
					粤公网安备&nbsp;440103020000068
				</p>
			</footer>
		</section>
		<footer class="footer-detiles">
			<div class="detiles-car">
				<router-link to="/buycar">
					<div class="car-box">
						<span class="iconfont icon-gouwuchekong small-car" v-if="show1"></span>
						<span class="iconfont icon-gouwuchekong small-car1" v-if="show"></span>
						<div class="car-num" v-if="show">
							<span class="car-num1">{{num}}</span>
						</div>
					</div>
				</router-link>
				<div class="car-time" v-if="show">
					<span>{{settime}}</span>:
					<span>{{second}}</span>
				</div>
			</div>
			<router-link to="" class="input-car">
				<input type="submit" value="加入购物车"  @click="buycar1()"/>
			</router-link>
			<div class="top-footer">
				<span class="iconfont icon-xiangshangjiantou top"></span>
			</div>		
		</footer>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				 swiperOption: {
				 pagination: {
				 el: '.swiper-pagination'
				          },
				loop: true,		  
				        },
				title:[],
				smallword:[],
				contentword:[],
				pinpai:[],
				constr:[],
				imgone:[],
				contentimg:[],
				settime:19,
				second:59,
				show:false,
				show1:true,
				num:0,
				
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			buycar(){				
				if(this.second==0){
					if(this.settime==0){
						return;
					}
					this.settime--;
					this.second=59;
				}else{
					// if(){
					// 	this.second="0"+this.second
					// 	console.log(this.second.length)
					// }else{
					// 	this.second--;
					// }
					this.second--;
				}
			},
			buycar1(){
				var _this=this;
				_this.show=true;
				_this.show1=false;
				_this.num++;
				setInterval(function(){
					_this.buycar()
				},100)
			}
		},
		mounted(){
		   this.$http.get('./data/detiles.json')
		     .then((response)=>{
		       this.title=response.data.titleimg
			   this.smallword=response.data.smallword
			   this.contentword=response.data.contentword
			   this.pinpai=response.data.pinpai
			   this.constr=response.data.constr
			   this.imgone=response.data.imgone
			   this.contentimg=response.data.contentimg
			   
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
	.title-detiles{
		width: 100%;
		position:relative;
	}
	.detiles-title{
		width: 100%;
	}
	.detiles-title img{
		width: 100%;
	}
    .circle .swiper-pagination-bullet-active{
		background: #000000;
	}
	.detiles-left{
		position:absolute;
		font-size: 50px;
		top:10px;
		left:10px;
		z-index: 10;
		color:rgba(0,0,0,.5);
	}
	.detiles-small{
		/* height: 35px; */
		width: 80px;
		background: rgba(0,0,0,.5);
		border-radius:20px;
		position:absolute;
		top:10px;
		right:10px;
		z-index: 10;
		text-align: center;
	}
	.detiles-like,.detiles-sqare{
		font-size: 20px;
		color:white;
		line-height: 35px;
	}
	.detiles-sqare{
		padding-left:5px;
	}
	.detiles-word{
		padding-left:15px;
		box-sizing: border-box;
		width: 100%;
		line-height: 30px;
	}
	.detiles-one{
		font-size: 0.57971rem;
		color:white;
		background: #de3d96;
		padding:3px 4px;
	}
	.detiles-two{
		font-size: 1.15942rem;
	}
	.detiles-three,.detiles-four{
		font-size: 0.772946rem;
		color:#98989f;
	}
	.detiles-content{
		margin-left:15px;
		margin-right:15px;
		width: calc(100% - 30px);
		box-sizing: border-box;
		padding-top:13px;
		padding-bottom:13px;
		border-top:1px solid #f3f3f3;
	}
	.detiles-content h4{
		font-size: 15px;
		color:#222222;
	}
	.detiles-content p{
		font-size: 14px;
		color:#98989f;
	}
	.content-bng{
		width: 100%;
		background: #f3f4f5;
		overflow: hidden;
		padding-bottom:75px;
	}
	.money{
		margin:10px 0px;
		background: white;
		padding-left:15px;
		padding-bottom:15px;
		position:relative;
	}
	.money ul{
		overflow: hidden;
	}
	.money-one{
		margin-top:15px;
	}
	.money1{
		text-align: center;
		display: inline-block;
		font-size: 12px;
		border:1px solid #de3da3;
		color:#de3da3;
		width: 38px;
	}
	.money2{
		padding-left:10px;
		font-size: 13px;
		color:#585c64;
	}
	.money-two{
		color:#4a90e2;
		font-size: 0.57971rem;
		position:absolute;
		top:20px;
		right:15px;
	}
	.detiles-big{
		margin:10px 0px;
		width: 100%;
		background: white;
		padding-bottom:18px;
	}
	.detiles-big p{
		font-size: 14px;
		color:#000000;
		padding-left:15px;
		font-weight:bold;
		padding-top:20px;
		padding-bottom:18px;
	}
	.detiles-big>div{
		margin-left:15px;
		border:1px solid #de3da3;
		line-height: 30px;
		font-size: 14px;
		width: 27%;
		text-align: center;
	}
	.location1{
		background: white;
		font-size: 15px;
		font-weight: bold;
		margin:10px 0px;
		padding-top:18px;
		padding-bottom:18px;
		color:#000000;
	}
	.location{
		padding-left:15px;
	}
	.gou-title{
		margin:10px 0px;
		background: white;
		padding-bottom:15px;
	}
	.gou-title{
		overflow: hidden;
		position:relative;
	}
	.gou-li{
		float: left;
		padding-left:15px;
		padding-top:16px;
	}
	.gou{
		color:#de3d96;
		font-size: 13px;
		font-weight: bold;
	}
	.gou1{
		font-size: 12px;
		color:#585c64;
	}
	.gou-circle{
		position:absolute;
		top:30px;
		right:15px;
	}
	.gou-circle span{
		display: inline-block;
		position:
	}
	.gou-one{
		width:3px;
		height: 3px;
		background: #e7e8e9;
		border-radius: 50%;
	}
	.gou-two{
		width: 4px;
		height: 4px;
		background: #bfc1c4;
		border-radius: 50%;
	}
	.gou-three{
		width: 4px;
		height: 4px;
		background: #cbccce;
		border-radius: 50%;
	}
	.pinpai{
		margin:10px 0px;
		background: white;
		position:relative;
	}
	.shoucang{
		color:#de3d96;
		font-size: 14px;
		border:1px solid #de3d96;
		padding:2px 16px;
		border-radius:2px;
		position:absolute;
		top:33px;
		right:15px;
	}
	.pinpai h3{
		line-height: 52px;
		border:1px solid #f3f4f5;
		font-size: 14px;
		text-align: center;
	}
	.pinpai ul{
		overflow: hidden;
		padding-top:13px;
		padding-left:15px;
		padding-bottom:13px;
	}
	.pinpai-img{
		float: left;
		width: 16%;
		padding:12px 0px;
		border:1px solid #f4f4f4;	}
	.pinpai-img img{
		width: 100%;
	}
	.pinpai-word{
		float: left;
		margin-left:10px;
		padding-top:12px;
	}
	.pinpai-word h5{
		font-size: 14px;
		color:#222222;
	}
	.pinpai-word p{
		font-size: 12px;
		color:#98989f;
	}
	.detiles-constr{
		background: white;
		margin:10px 0px;
		position:relative;
		padding-left:15px;
		padding-bottom:45px;
	}
	.detiles-constr p{
		padding-top:18px;
		font-size: 14px;
		color:#000000;
		font-weight: bold;
	}
	.constr-li{
		padding-top:8px;
	}
	.constr-one{
		display: inline-block;
		font-size: 14px;
		color:#a6a6ac;
		width: 23%;
	}
	.constr-two{
		font-size: 14px;
		color:#585c64;
	}
	.constr-fix{
		position:absolute;
		bottom:17px;
		right:15px;
		font-size: 12px;
		color:#a1a1a7;
	}
	.shouhou{
		background: white;
		margin:10px 0px;
		padding:0px 15px;
		overflow: hidden;
	}
	.title-shouhou{
		overflow: hidden;
		padding-top:18px;
	}
	.shouhou1{
		font-size: 14px;
		color:#000000;
		font-weight: bold;
		float: left;
	}
	.up{
		font-size: 14px;
		float: right;
	}
	.buy{
		width: 75%;
		line-height: 46px;
		border:1px solid #ebebeb;
		color:#707070;
		text-align: center;
		font-size: 14px;
		margin:15px auto;
	}
	.buy img{
		width: 14px;
	}
	.detiles-content1{
		padding:18px 15px;
		background: white;
	}
	.detiles-content1 p{
		font-size: 14px;
		color:#000000;
		font-weight: bold;
		padding-bottom:36px;
	}
	.detiles-content1 .detiles-img{
		padding:0px 5px;
		width: 100%;
		display: block;
		box-sizing: border-box;
	}
	.constrtwo{
		background: white;
		padding-left:15px;
		position: relative;
		padding-bottom:40px;
	}
	.constrtwo p{
		font-size: 14px;
		color:#000000;
		font-weight: bold;
		padding-top:18px;
		padding-bottom:8px;
	}
	.detiles-img1{
		width: 100%;
	}
	.detiles-big1{
		width: 100%;
		display: block;
	}
	.constrtwo>span{
		color:#585c64;
		font-size: 14px;
	}
	.detiles-bottom{
		padding:12px 15px;
		border-bottom:1px solid #dfdfe0;
	}
	.detiles-bottom p{
		font-size: 14px;
		color:#98989f;
		text-align: center;
	}
	.bottom-small{
		position: relative;
		padding-top:15px;
	}
	.left-p{
		display: inline-block;
		width: 13%;
		background: #de007b;
		color:white;
		border-radius: 10px;
		padding:12px 0px;
		font-size: 14px;
		text-align: center;
	}
	.center-word{
		font-size: 14px;
		color:#222222;
		padding-left:10px;
	}
	.right-word{
		display: inline-block;
		width: 20%;
		border:1px solid #de007b;
		font-size: 14px;
		line-height: 30px;
		text-align: center;
		position:absolute;
		bottom:12px;
		right:15px;
		color:#de007b;
	}
	.detiles-footer{
		padding:10px 15px;
	}
	.detiles-footer ul{
		overflow: hidden;
	}
	.footer-left{
		float: left;
		font-size: 14px;
		color:#585c64;
	}
	.footer-left span:nth-child(1){
		padding-right:10px;
	}
	.footer-right{
		float: right;
		font-size: 14px;
		color:#585c64;
	}
	.footer-word{
		margin-top:18px;
		font-size: 12px;
		color:#cccccc;
		text-align: center;
	}
	.footer-word2{
		margin-top:18px;
		font-size: 12px;
		color:#cccccc;
		text-align: center;
	}
	.footer-word2 img{
		width: 20px;
	}
	/* 固定定位 */
	.footer-detiles{
		width: 100%;
		height: 55px;
		position:fixed;
		bottom:0px;
		left:0px;
		background: white;
	}
	.detiles-car{
		line-height: 35px;
		border:1px solid #f4f4f4;
		position:fixed;
		bottom:5px;
		left:13px;
		width: 22.4%;
		text-align: center;
		overflow: hidden;
	}
	.small-car{
		font-size: 24px;
		color:#000000;
		padding-left:25px;
	}
	.small-car1{
		font-size: 24px;
		color:#000000;
	}
	.input-car{
		position:fixed;
		bottom:5px;
		right:13px;
		width: 68%;
	}
	.car-box{
		position: relative;
		overflow: hidden;
		padding:0px 10px;
		float: left;
	}
	.car-num{
		position:absolute;
		width: 17px;
		height: 17px;
		border-radius: 50%;
		background: #de3d96;
		color:white;
		font-size: 12px;
		top:0px;
		right:5px;
	}
	.car-time{
		font-size: 14px;
		color:#585c64;
		float: right;
	}
	.car-num1{
		position:relative;
		top:-6px;
	}
	.input-car input{
		width: 100%;
		line-height: 40px;
		background: #de3d96;
		color:white;
		outline: none;
		border-style: none;
		font-size: 14px;
	}
	.top-footer{
		position:fixed;
		bottom:70px;
		right:15px;
		width: 42px;
		background:rgba(25,29,38,.95);
		border-radius: 50%;
		text-align: center;
		line-height: 40px;
	}
	.top{
		font-size: 26px;
		color:white;
	}
</style>
