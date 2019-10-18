<template>
	<main>
		<header class="buycar-header">
			<span class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu- buycar-left" @click="back()"></span>
			<div class="car-title">
				<span>确认订单</span>
				<span></span>
				<span></span>
			</div>
		</header>
		<div class="buyone">
			<span class="buytwo">你正在安全购物环境中，请放心购买</span>
			<div class="location-buy">
				<p>设置收货地址</p>
				
			</div>
		</div>
		<div class="buycar-type">
			<h4>精选特卖</h4>
			<div class="buy-type" v-for="(v,i) in list">
			
				<ul>
					<p v-if="1==2">{{m}}</p>
					<li class="buythree">
						<img :src="v.img" />
					</li>
					<li class="buy-four">
						<p class="one-word">{{v.title}}</p>
						<p class="two-word">{{v.title1}}</p>
						<p class="three-word">{{v.title2}}</p>
						<p class="four-word">{{v.title3}}</p>
						<!-- <div class="tableone">
							<span class="table-one">+</span>
							<span class="table-two">558</span>
							<span class="table-three">-</span>
						</div> -->
						<table class="tableone">
							<td class="table-one" @click="jian(v)">-</td>
							
							<td class="table-two"><input type="number" v-model="v.num"></td>
							<!-- <td class="table-two">{{v.num}}</td> -->
							<td class="table-three" @click="add(v)">+</td>
						</table>
						<div class="buy-money">
							<p>￥{{v.money}}</p>
							<del>{{v.money1}}</del>
						</div>
						<span class="delet" @click="delet(i)">X</span>
					</li>
				</ul>
				<div class="summoney">
					<span>￥{{v.money*v.num}}</span>
				</div>
			</div>
			
		</div>
		<div class="buy-constr">
			<ul>
				<li class="constrbuy-one">
					<span class="cfx">免邮</span>
				</li>
				<li class="constrbuy-one1">
					<span class="cfx1">唯品自营商品已享受新会员专享订单满38元免运费，限唯品自营商品，部分商品不可用</span>
				</li>
			</ul>
			<ul>
				<li class="constrbuy-one">
					<span class="cfx">限制</span>
				</li>
				<li class="constrbuy-one1">
					<p class="cfx1">唯品会快抢商品仅支持叠加参与买赠、返券、免邮活动，不支持使用优惠卷及满减、折扣、任选活动</p>
				</li>
			</ul>
		</div>
		<section class="buy-content">
			<div class="liquan">
				<p>使用礼券</p>
				<span class="iconfont icon-webicon212 buy-right"></span>
			</div>
			<div class="liquan">
				<p>使用口令</p>
				<span class="iconfont icon-webicon212 buy-right"></span>
			</div>
			<div class="moneytwo">
				<ul>
					<li class="moneytwo1">
						<span class="iconfont icon-guanbiicon changfangx">可用0个唯品币抵扣</span>
						<span class="changfangx1">￥0.0</span>
					</li>
					<li class="moneytwo2">
						<span class="iconfont icon-guanbiicon changfangx">唯品卡(余额￥0.00)</span>
					</li>
				</ul>
			</div>
			<div class="moneythree">
				<span class="iconfont icon-guanbiicon moneythree1">零钱已升级，提交订单后可在支付列表使用</span>
			</div>
			<div class="moneybuy">
				<ul>
					<li class="buy-one1">
						<span class="moneygjf">订单金额</span>
						<span class="moneygjf1">￥63</span>
					</li>
					<li class="buy-two1">
						<span class="moneygjf2">商品总金额</span>
						<span class="moneygjf3">￥63</span>
					</li>
					<li class="buy-two1">
						<p class="moneygjf2">
							<span class="moneygjf4">运费</span>
							<span class="iconfont icon-webicon212 moneydown"></span>
						</p>
						<span class="moneyfour">含运费￥0.00</span>
					</li>
				</ul>
			</div>
			<div class="liquan">
				<p>开具发票</p>
				<div class="buy-right">
					<span class="buy-right1">不开具发票<</span>
					<span class="iconfont icon-webicon212"></span>
				</div>
			</div>
		</section>
		<footer class="buy-footer">
			<ul>
				<li class="buyfooter-one">
					<span class="buyfooter-one1">还需支付</span>
					<span class="buyfooter-one2">{{totalprice}}</span>
				</li>
				<li class="buyfooter-two">
					<p class="buyfooter-two1" @click="calcTotalPrice()">货到付款</p>
					<p class="buyfooter-two2">在线支付</p>
				</li>
			</ul>
		</footer>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				list:[],
				num:'',
				m:0,
				index1:'',
				totalprice:0,
				aa:0,
				singlemoney:0
			}
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			add(v){
				// this.num=this.num++;
				// v++;
				v.num++
				this.calcTotalPrice()
				this.money(v)
				console.log(v)
			},
			jian(v){
				if(v.num==1){
					return;
				}else{
					v.num--;
				}
				this.calcTotalPrice()
				this.money(v)
			},
			delet(m){
				this.index1=m;
				this.list.splice(m,1)
				this.calcTotalPrice()
			},
			money(v){
				this.singlemoney=v.money*v.num
			},
			calcTotalPrice(){
				// var _this=this;
				this.m++
				this.totalprice=0;
				this.list.forEach((element,index)=>{
					this.totalprice+=element.num*element.money
				})
				console.log(this.m)
			}
		},
		// computed:{
		// 	fn(){
		// 		this.list.forEach((element,index)=>{
		// 			// this.m++
		// 			this.totalprice+=element.num*element.money
		// 			})
		// 	}
		// },
		mounted(){
		   this.$http.get('./data/buycar.json')
		     .then((response)=>{
		       this.list=response.data.list
			   console.log(response.data.title)
		     })
		     .catch(function (error) {
		       console.log(error);
		     })
		     .then(function () {
		       // always executed
		     }); 
			setTimeout(()=>{
				// this.money(v)
				this.calcTotalPrice()
			},100)
		 }
	}
</script>

<style>
	.buycar-header{
		background: white;
		width: 100%;
		padding:0px 15px;
		position: relative;
		line-height: 45px;
		box-sizing: border-box;
	}
	.buycar-left{
		font-size: 22px;
		color:#5b5b5b;
		position:absolute;
		top:50%;
		left:15px;
		transform: translateY(-50%);
	}
	.car-title{
		font-size: 18px;
		color:#000000;
		text-align: center;
	}
	.buyone{
		background: #e8eaf4;
		padding-bottom:10px;
	}
	.buycar-type{
		width: 100%;
		padding:0px 15px;
		box-sizing: border-box;
	}
	.buycar-type h4{
		font-size:14px;
		font-weight: bold;
		padding-top:16px;
		box-sizing: border-box;
	}
	.buytwo{
		font-size: 14px;
		color:#76777c;
		padding-left:15px;
		line-height: 34px;
		box-sizing: border-box;
	}
	.location-buy{
		line-height: 40px;
		background: #656c89;
		color:white;
		font-size: 16px;
		padding-left:15px;
		box-sizing: border-box;
	}
	.buy-type{
		width: 100%;
		padding-top:25px;
		position:relative;
	}
	.buy-type ul{
		overflow: hidden;
	}
	.buy-type ul li{
		float: left;
	}
	.buythree{
		width: 20%;
		margin-right:10px;
	}
	.buythree img{
		width: 100%;
	}
	.buy-four{
		width: 55%;
	}
	.one-word{
		font-size: 14px;
		color:#222222;
		margin-bottom:8px;
		/* font-weight: bold; */
	}
	.two-word{
		font-size: 12px;
		color:#999999;
		margin-bottom:8px;
	}
	.three-word{
		font-size: 12px;
		color:#999999;
		margin-bottom:8px;
	}
	.four-word{
		display: inline-block;
		font-size: 12px;
		color:#f377bb;
		border:1px solid #f377bb; 
		margin-bottom:8px;
		display: inline-block;
	}
	.tableone{
		border:1px solid #e7e7e7;
		line-height: 25px;
		line-height: center;
		/* display: inline-block; */
	}
	.table-one{
		color:#d6d6d6;
		font-size: 16px;
		padding:0px 10px;
		box-sizing: border-box;
	}
	.table-two{
		color:#73767d;
		border-left:1px solid #e7e7e7;
		border-right:1px solid #e7e7e7;
		font-size: 15px;
		padding:0px 15px;
		width: 20px;
	}
	.table-two input{
		width: 100%;
		outline: none;
		border-style:none;
	}
	.table-three{
		color:#8d9198;
		font-size: 16px;
		padding:0px 10px;
		box-sizing: border-box;
	}
	.buy-money{
		position:absolute;
		top:25px;
		right:0px;
	}
	.buy-money p{
		font-size: 14px;
		color:#222222;
	}
	.buy-money del{
		font-size: 12px;
		color:#98989f;
	}
	.delet{
		position:absolute;
		bottom:51px;
		right:15px;
		font-size: 16px;
		color:#d4d5d7;
	}
	.summoney{
		overflow: hidden;
		padding-top:28px;
	}
	.summoney span{
		float: right;
		font-size: 16px;
		color:#222222;
	}
	.buy-constr{
		padding-top:7px;
		margin:0px 15px;
	}
	.buy-constr ul{
		overflow: hidden;
		margin-top:10px;
	}
	.buy-constr ul li{
		float: left;
	}
	.constrbuy-one1{
		width: calc(100% - 35px);
		padding-left:8px;
		box-sizing: border-box;
	}
	.cfx{
		font-size: 12px;
		color:#7e93bc;
		border:1px solid #7e93bc;
		padding:1px 3px;
		border-radius: 2px;
	}
	.cfx1{
		font-size: 12px;
		color:#585c64;
	}
	.buy-content{
		background: #f3f4f5;
		overflow: hidden;
		padding-bottom:130px;
	}
	.liquan{
		margin:10px 0px;
		padding:0px 15px;
		background: white;
		overflow: hidden;
		line-height: 50px;
	}
	.liquan p{
		font-size: 16px;
		color:#555555;
		float: left;
	}
	.buy-right{
		font-size: 20px;
		color:#c6c6ca;
		float: right;
		font-weight: bold;
	}
	.moneytwo{
		margin:10px 0px;
		padding:0px 15px;
		background: white;
		color:#dbdbdb;
	}
	.moneytwo1,.moneytwo2{
		overflow: hidden;
		line-height: 48px;
	}
	.changfangx{
		float: left;
		font-size: 18px;
	}
	.changfangx1{
		float: right;
	}
	.moneythree{
		padding-left:15px;
		font-size: 16px;
		color:#85888e;
		line-height: 40px;
	}
	.moneybuy{
		background: white;
		padding:0px 15px;
	}
	.buy-one1{
		line-height: 48px;
		overflow: hidden;
		padding-bottom:15px;
	}
	.moneygjf{
		float: left;
		font-size: 14px;
		font-weight: bold;
		color:#000000;
	}
	.moneygjf1{
		float: right;
		font-size: 14px;
		font-weight: bold;
		color:#ed5aac;
	}
	.buy-two1{
		overflow: hidden;
		padding-bottom:15px;
	}
	.moneygjf2{
		float: left;
		font-size: 14px;
		color:#585c64;
	}
	.moneygjf3{
		float: right;
		font-size: 14px;
		color:#585c64;
	}
	.moneyfour{
		float: right;
		font-size: 14px;
		color:#585c64;
	}
	.buy-right1{
		font-size: 12px;
		color:#9b9b9b;
	}
	/* 固定底部*/
	.buy-footer{
		background: white;
		position:fixed;
		width: 100%;
		height: 70px;
		bottom:0px;
		left:0px;
	}
	.buyfooter-one{
		text-align: center;
		padding-top:10px;
	}
	.buyfooter-one1{
		font-size: 16px;
		color:#414141;
	}
	.buyfooter-one2{
		font-size: 14px;
		color:#e80080;
	}
	.buyfooter-two{
		padding:10px 0px;
		width: 100%;
		overflow: hidden;
		text-align: center;
	}
	.buyfooter-two1{
		width: 38%;
		border:1px solid #d7d8da;
		color:#d7d8da;
		line-height: 40px;
		float: left;
		margin-left:15px;
	}
	.buyfooter-two2{
		width: 38%;
		background: #e80080;
		color:white;
		line-height: 40px;
		float: right;
		margin-right:15px;
	}
</style>
