<template>
	<main>
		<div class="sign-log">
			<img src="../assets/images/logo.ac5608f4.png">
			<span class="iconfont icon-guanbi sign-close" @click="index1()"></span>
		</div>
		<div class="number">
			<label for="number1">
				手机号
			</label>
			<input type="text" placeholder="请输入手机号" id="number1" v-model="msg">
			<span class="iconfont icon-guanbiicon quxiao" id="quxiao1" @click="remove()" v-if="smallclose"></span>
			<span class="tishi iconfont icon-guanbiicon" id="tishi1" v-if="showtime">手机号码格式错误</span>
			<span class="tishi iconfont icon-guanbiicon" id="tishi2" v-if="showtime2">您必须同意唯品会服务条款后，才能进行下一步</span>
		</div>
		<div class="number2">
			<label for="number3">
				验证码
			</label>
			<input type="text" placeholder="请输入验证码" id="number3" v-model="msg1">
			<span class="iconfont icon-guanbiicon yanzheng" id="yanzheng1" @click="remove1()" v-if="yanzheng1"></span>
			<span @click="show()" id="timeshow" :class="{yz:yzcolor==true}">获取验证码</span>
			<span class="tishione iconfont icon-guanbiicon" id="tishitwo" v-if="showtime1">短信验证码不匹配，请稍后再试</span>
		</div>
		<div class="btn-sign">
			<!-- <router-link to="" @click="btnclick()"> -->
				<input type="sumbit" value="手机号注册登录" :class="{btn:true,btn1:btncolor==true}" id="btn1" @click="btnclick()">
			<!-- </router-link> -->
			
		</div>
		<div class="check-box">
			<input type="checkbox" id="checkbox">
			<span>同意
			<span style="color:#157efa">《唯品会服务条款》、《隐私条款》、《唯品支付用户服务协议》</span>
			</span>
		</div>	
		<p class="sign-word">或</p>
		<div class="password">
			<router-link to="/password"><input type="sumbit" value="密码登录"></router-link>			
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				nums:60,
				msg:"",
				msg1:"",
				showtime:false,
				showtime1:false,
				showtime2:false,
				smallclose:false,
				yzcolor:false,
				btncolor:false,
				yanzheng1:false
			}
		},
		methods:{
			show(){
				var phonenum=document.getElementById("number1");
				var time=document.getElementById("timeshow");
				var tishi1=document.getElementById("tishi1");
				var phoneNum=phonenum.value;
				// this.nums--;
				
				if(this.nums>=0&&phoneNum.length == 11 && /^[1][3,4,5,7,8][0-9]{9}$/.test(phoneNum)){
					// time.style="padding:0px";
					var _this=this;
					var timer
					timer=setInterval(function(){
						_this.nums--;						
						if(_this.nums<0){
							time.innerHTML="重新获取"
							return;
						}else{
							time.innerHTML=_this.nums+"秒后重新获取";
						}
					},1000)
					// time.innerHTML=this.nums+"秒后重新获取";
					console.log(time.innerHTML)
				}else{
					// tishi1.style="display:block";
					this.showtime=true;
				}
			},
			// getDate(){
			// 	var _this=this; 
			// 	_this.show();
			//    // setTimeout(function(){
				   
			//    // },1000);
			// },
			remove(){
				this.msg='';
			},
			
			remove1(){
				this.msg1="";
			},
			
			btnclick(){
				var tishi1two=document.getElementById("tishi1two");
				var tishi1=document.getElementById("tishi1");
				if(this.msg.length==11&&/^[1][3,4,5,7,8][0-9]{9}$/.test(this.msg)&&this.msg1.length==6){
					if(document.getElementById("checkbox").checked){
						this.$router.push("/home")
					}else{
						this.showtime2=true;
					}
					
				}else if(this.msg1.length!=6&&this.msg.length==11&&/^[1][3,4,5,7,8][0-9]{9}$/.test(this.msg)){
					this.showtime1=true;
				}else if(this.msg.length!=11||/^[1][3,4,5,7,8][0-9]{9}$/.test(this.msg)==false&&this.msg1.length==6){
					this.showtime=true;
				}else{
					this.showtime=true;
				}
				console.log("123"+this.showtime1)
			},
			index1(){
				this.$router.push('/')
			}
		},
		watch:{
			msg(){
				this.showtime=false;
			},
			msg1(){
				this.showtime1=false;
			}
		},
		updated(){
			var phonenum=document.getElementById("number1").value;
			var quxiao1=document.getElementById("quxiao1");
			var btn1=document.getElementById("btn1");
			var timeshow=document.getElementById("timeshow");
			if(this.msg!=''){
				this.smallclose=true;
				this.yzcolor=true;
				console.log(this.yzcolor)
	        }else{
				this.smallclose=false;
				// timeshow.style="color:#b4bbd1"
			}
			if(this.msg!=''&&this.msg1!=''){
				this.btncolor=true;
			}else{
				this.btncolor=false;
			}
			if(this.msg1!=""){
				this.yanzheng1=true;
			}else{
				this.yanzheng1=false;
			}
		}
	}
</script>

<style>
	.sign-log{
		width:100%;
		height: 169px;
		background:url('../assets/images/denglulog.jpg');
		background-size: 100%;
		text-align: center;
		position:relative;
	}
	.sign-log img{
		margin-top:58px;
		width: 105px;
	}
	.sign-close{
		position:absolute;
		top:10px;
		right:10px;
	}
	.number{
		position:relative;
	}
	.number label{
		padding:15px;
		font-size: 0.8rem;
		line-height: 52px;
		color:#000;
	}
	 .tishi{
		font-size: 0.6rem;
		color:#ec5648;
		position:absolute;
		top:-20px;
		left:15px;
		/* display: none; */
	}
	.number #number1{
		font-size:0.8rem;
		border-style:none;
		outline: none;
	}
	.quxiao{
		/* display: none; */
		position:absolute;
		top:50%;
		right:10px;
		transform: translateY(-50%);
		font-size: 25px;
		color:#f0f0f0;
		/* background: #f0f0f0;s */
	}
	.number2{
		border-top:1px solid #e7e7e7;
		border-bottom:1px solid #e7e7e7;
		position:relative;
	}
	.number2 label{
		padding:15px;
		font-size: 0.8rem;
		line-height: 52px;
		color:#000;
	}
	.number2 #number3{
		font-size: 0.8rem;
		border-style:none;
		outline: none;
		width: 150px;
	}
	.number2 span{
		display: inline-block;
		padding-left:15px;
		color:#b4b4b9;
		font-size: 0.8rem;
		border-left:1px solid #e7e7e7;
		line-height: 52px;
	}
	.number2 .yanzheng{
		/* display: none; */
		position:absolute;
		top:50%;
		right:45%;
		transform: translateY(-50%);
		font-size: 25px;
		color:#f0f0f0;
		border-style: none;
	}
	#timeshow.yz{
		color:#7a9fe9;
	}
	.number2 .tishione{
		position:absolute;
		top:-94px;
		left:15px;
		color:#ec5648;
		font-size: 0.6rem;
		padding:0px;
		border-style:none;
		/* display: none; */
	}
	.btn-sign{
		margin-top:30px;
		padding:0px 14px;
		width: 100%;
		box-sizing: border-box;
	}
	.btn-sign .btn{
		height: 44px;
		width: 100%;
		background: #caccd2;
		color:white;
		font-size: 0.8rem;
		outline: none;
		border-style: none;
		text-align: center;
		border-radius:20px;
	}
	.btn-sign .btn1{
		background: #de3d96;
	}
	.check-box{
		padding:11px;
		font-size: 0.6rem;
		color:#afafb5;
	}
	.sign-word{
		font-size: 0.7rem;
		color:#e6e6e6;
		text-align: center;
		margin-top:62px;
		position:relative;
	}
	.sign-word::before{
		content:"";
		width: 45%;
		height: 1px;
		background: #e6e6e6;
		display: inline-block;
		position:absolute;
		left:0px;
		top:50%;
		transform: translateY(-50%);
	}
	.sign-word::after{
		content:"";
		width: 45%;
		height: 1px;
		background: #e6e6e6;
		display: inline-block;
		position:absolute;
		right:0px;
		top:50%;
		transform: translateY(-50%);
	}
	.password{
		margin-top:0.75rem;
		text-align: center;
	}
	.password input{
		width:19%;
		height: 36px;
		border-radius:20px;
		color:#e4007f;
		border-style: none;
		outline: none;
		font-size: 0.7rem;
		border:1px solid #e4007f;
		text-align: center;
	}
</style>
