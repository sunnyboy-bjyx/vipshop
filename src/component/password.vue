<template>
	<main>
		<div class="sign-log">
			<img src="../assets/images/logo.ac5608f4.png">
			<span class="iconfont icon-guanbi sign-close" @click="index1()"></span>
		</div>
		<div class="number">
			<label for="number1">
				登录名
			</label>
			<input type="text" placeholder="请输入手机号或邮箱" id="number1">
		</div>
		<div class="number2">
			<label for="number3">
				密码
			</label>
			<input type="password" id="number3">
			<span class="iconfont icon-yanjing1 typeshow" @click="show()"></span>
			<!-- <span class="typeshow" @click="show()">重新获取</span> -->
		</div>
		<div class="btn-sign">
			<input type="sumbit" value="登录" class="btn">
			<span class="word">忘记密码</span>
		</div>
		<p class="sign-word">或</p>
		<div class="password">
			<router-link to="/sign"><input type="sumbit" value="手机号注册登录"></router-link>			
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				k:0
			}
		},
		methods:{
			show(){
				var pass=document.getElementById("number3")
				this.k++;
				if(this.k>1){
					pass.type="number";
					this.k=0
				}else{
					pass.type="password"
				}
				console.log(this.k)
			},
			index1(){
				this.$router.push('/')
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
	.number label{
		padding:15px;
		font-size: 0.8rem;
		line-height: 52px;
		color:#000;
	}
	.number #number1{
		font-size:0.8rem;
		border-style:none;
		outline: none;
	}
	.number2{
		border-top:1px solid #e7e7e7;
		border-bottom:1px solid #e7e7e7;
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
	}
	.number2 .typeshow{
		font-size: 30px;
		margin-left:45px;
		border-style: none;
	}
	.number2 span{
		display: inline-block;
		padding-left:21px;
		color:#b4b4b9;
		font-size: 0.8rem;
		border-left:1px solid #e7e7e7;
		line-height: 52px;
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
	.btn-sign span{
		color:#3b98ff;
		font-size: 0.7rem;
		float: right;
		padding-top:15px;
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
		width:33%;
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
