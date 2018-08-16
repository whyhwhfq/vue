<template>
	<div class="head">
		<mt-header fixed :title="topTitle">
            <router-link to="/" slot="left">
                <mt-button @click.native='changett'>
                    <img src="//a.mysteelcdn.com/wap/ydz/images/logo.png" height="34" width="50" slot="icon">
                </mt-button>
            </router-link>
            <mt-button type="danger"  slot="right">登录</mt-button>
            <mt-button type="primary"  slot="right">APP</mt-button>
        </mt-header>
	</div>
</template>

<script>
export default {
	name: 'Head',
	computed:{
		topTitle(){     //计算属性页面显示的函数  
			return this.$store.state.topTitle       //返回数据中心的共享的值
		}
	},
	methods:{
		changett:function(){
			this.$store.commit("changeTopTitle",'我的钢铁网')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.mint-header{
	background: #fff;
	color:#333;
	font-size: 18px;
	line-height: 20px;
	height: 50px;
	padding: 0;
    padding-right: 10px;
	border-bottom: 2px solid #0057A0;
	.mint-header-button.is-left{
		text-align: center;
		border-bottom: 2px solid red;
		height: 53px;
		padding: 8px 0 0;
	}
	.mint-button{
		font-size: 13px;
		padding: 3px 10px;
		height: auto;
	}
	.mint-button--danger{
		background-color: #ef4f4f;
		color:#fff;
		margin-right: 10px;
	}
	.mint-button--primary{
		color: #fff;
    	background-color: #26a2ff;
		font-size: 15px;
	}
	.mint-header-button.is-right{
		margin-right: 10px;
	}
}
.mint-header.is-fixed{
	z-index: 2;
}
</style>
