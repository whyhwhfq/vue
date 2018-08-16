<template>
  	<div class="home">
	  	<div class="banner">
			<mt-swipe :auto="0" :show-indicators="false">
				<mt-swipe-item>
					<img src="//a.mysteelcdn.com/wap/ydz/banner/18year.jpg" width="100%" height="100%" alt="">
				</mt-swipe-item>
			</mt-swipe>
		</div>
		<!-- search -->
		<searchinp></searchinp>
		<!-- swipe -->
		<div class="swipeArea">
			<div>
				<mt-swipe :auto="2000" :show-indicators="false">
					<mt-swipe-item>
						<a href="//m.steelphone.com/app/map/index.html?Source=wap#hqzs">
							<h3>钢材综合</h3>
							<div class="c1 blue">4394.38</div>
							<div class="c2">
								<span class="red">23.79</span>
								<span class="red">+0.54%</span>
							</div>
                      	</a>
					</mt-swipe-item>
					<mt-swipe-item>
						<a href="//m.steelphone.com/app/map/index.html?Source=wap#hqzs">
							<h3>62%进口矿指数</h3>
							<div class="c1 blue">66.95</div>
							<div class="c2">
								<span class="red">+1.29</span>
								<span class="red">+1.98%</span>
							</div>
						</a>
					</mt-swipe-item>
				</mt-swipe>
			</div>
			<div>
				<a href="//m.steelphone.com/app/map/index.html?Source=wap">
                  	<img src="//a.mysteelcdn.com/wap/ydz/images/map.jpg" alt="行情地图">
                </a>
			</div>
			<div>
				<mt-swipe :auto="2000" :show-indicators="false">
					<mt-swipe-item>
						<a href="https://zhushou.banksteel.com/a/#/data/mysteel">
							<h3>今日成交量(吨)</h3>
							<div class="c1 blue">103757</div>
							<div class="c3">详情→</div>
						</a>
					</mt-swipe-item>
					<mt-swipe-item>
						<a href="https://zhushou.banksteel.com/a/#/data/mysteel">
							<h3>今日成交量(吨)</h3>
							<div class="c1 blue">103757</div>
							<div class="c3">详情→</div>
						</a>
					</mt-swipe-item>
				</mt-swipe>
			</div>
		</div>
		<!-- navlist -->
		<div class="box">
			<stitle>行情频道</stitle>
			<div class="nav">
				<mt-navbar v-model="selected1">
					<h4>品种：</h4>
					<template v-for="(item,index) in pinz">
						<mt-tab-item :id="item.pz" :key="index">{{item.pz}}</mt-tab-item>
					</template>
				</mt-navbar>
				<mt-tab-container v-model="selected1">
					<template v-for="(item,index) in pinz">
						<mt-tab-container-item :id="item.pz" :key="index">
							<router-link to="/" v-for="(subitem,index) in item.pzlist" :key="index">
								<span>{{subitem}}</span>
							</router-link>
						</mt-tab-container-item>
					</template>
				</mt-tab-container>
				<mt-navbar v-model="selected1">
					<h4>城市：</h4>
					<template v-for="(item,index) in cityname">
						<mt-tab-item :id="item.city" :key="index">{{item.city}}</mt-tab-item>
					</template>
				</mt-navbar>
				<mt-tab-container v-model="selected1">
					<template v-for="(item,index) in cityname">
						<mt-tab-container-item :id="item.city" :key="index">
							<router-link to="/" v-for="(subitem,index) in item.citylist" :key="index">
								<span>{{subitem}}</span>
							</router-link>
						</mt-tab-container-item>
					</template>
				</mt-tab-container>
				<div class="listBox">
					<slist :slists='item' v-for='(item,index) in hqslists' :key="index"></slist>
				</div>
				<div class="watchmore">
					<router-link to="/"><span>查看更多信息</span> </router-link>
				</div>
			</div>
		</div>
		<div class="box">
			<stitle>资讯频道</stitle>
			<div class="nav">
				<div class="links">
					<router-link to="/">行业聚焦</router-link>
					<router-link to="/nav">快讯</router-link>
					<router-link to="/sd">视频</router-link>
					<router-link to="/asd">头条</router-link>
				</div>
				<div class="listBox">
					<slist :slists='item' v-for='(item,index) in zxslists' :key="index"></slist>
				</div>
				<div class="watchmore">
					<router-link to="/"><span>查看更多信息</span> </router-link>
				</div>
			</div>
		</div>
  	</div>
</template>

<script>
import stitle from './baseCompts/Title'
import slist from './baseCompts/List'
import searchinp from './baseCompts/Searchinp'
export default {
	name: 'Home',
	components:{
		stitle,
		slist,
		searchinp
	},
	data () {
		return {
			selected:'行情',  //搜索下拉框
			selected1:'',  
			selected2:'',  
			selectShown:false,
			hqslists:[],
			zxslists:[],
			pinz:[{pz:'普钢',pzlist:['建筑钢材','中板','热轧','冷轧','涂镀板卷','硅钢','型钢','带钢','钢管']},{pz:'特钢',pzlist:['中板','中板','热轧','冷轧','涂镀板卷','硅钢','型钢','带钢','钢管']},{pz:'炉料',pzlist:['涂镀板卷','中板','热轧','冷轧','涂镀板卷','硅钢','型钢','带钢','钢管']},{pz:'有色',pzlist:['钢管','中板','热轧','冷轧','涂镀板卷','硅钢','型钢','带钢','钢管']},{pz:'煤炭',pzlist:['硅钢','中板','热轧','冷轧','涂镀板卷','硅钢','型钢','带钢','钢管']},{pz:'煤化工',pzlist:['冷轧','中板','热轧','冷轧','涂镀板卷','硅钢','型钢','带钢','钢管']},{pz:'农产品',pzlist:['带钢','中板','热轧','冷轧','涂镀板卷','硅钢','型钢','带钢','钢管']}],
			cityname:[{city:'华东',citylist:['上海','山东','江苏','浙江','福建','江西','安徽']},{city:'华北',citylist:['北京','天津','河北','山西','内蒙古']},{city:'华南',citylist:['广东','广西','海南']},{city:'华中',citylist:['河南','湖北','湖南']},{city:'东北',citylist:['辽宁','吉林','黑龙江']},{city:'西南',citylist:['重庆','四川','贵州','云南','西藏']},{city:'西北',citylist:['陕西','甘肃','青海','宁夏','新疆']}]
		}
	},
	mounted(){
		this.getAjax();
	},
	methods:{
		shownfun:function(){    //控制
			return this.selectShown=!this.selectShown;
		},
		// url:'https://index.mysteel.com/newxpic/getZSPS.ms',
		getAjax:function () {
			var that=this;
			this.$jsonp('https://index.mysteel.com/newxpic/getZSPS.ms',{})
						.then(function(res){
							that.hqslists=res.slice(0,6);
                        },function(res){
                            console.log(res);
                        });
			this.$jsonp('https://index.mysteel.com/newxpic/getYJBG.ms',{})
						.then(function(res){
							that.zxslists=res.slice(0,6);
                        },function(res){
                            console.log(res);
                        });
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	.banner{
		.mint-swipe{
			height: 120px;
			text-align: center;
		}
	}
	.swipeArea{
		display: flex;
		background: #fff;
		&>div{
			flex:4;
			height: 70px;
			.mint-swipe{
				height: 100%;
				.mint-swipe-item{
					a{
						padding: 6px 0;
						h3{
						    font-weight: normal;
    						font-size: 12px;	
						}
						.c1{
							font-weight: 500;
							font-size: 18px;
							line-height: 28px;
							color: #666;
						}
						.c2{
							span{
								margin:0 2px;
							}
						}
						.c3{
							font-weight: normal;
							font-size: 10px;
							color: #4F97EF;
							text-align: center;
						}
					}
				}
			}
			&:nth-child(2){
				flex:5;
				border-left:1px solid #e5e5e5;
				border-right:1px solid #e5e5e5;
				img{
					height: 70px !important;
					display: block;
					margin: 0 auto;
				}
			}
		}
	}
	.box{
		background: #fff;
		.nav{
			.mint-navbar{
				background-color: transparent;
				background: #4F97EF;
				padding: 5px 9px;
				h4{
					margin-right: 2px;
					font-size: 14px;
					font-weight: bolder;
					color: #FFEB61;
					display: inline-block;
					vertical-align: middle;
				}
				.mint-tab-item{
					color:#fff;
					padding: 5px 0;
					font-size: 14px;
					&.is-selected{
						background: #FFF;
						color:#4F97EF;
						border-radius: 11px;
					}
				}
			}
			.mint-tab-container{
				font-size: 14px;
				max-height: 68px;
				overflow: hidden;
				// padding:6px 5px;
				.mint-tab-container-item{
					text-align: left;
					
					a{
						width: auto;
						margin:5px;
						border-right:1px solid #4F97EF;
						color: #4F97EF;
						padding:0 10px 0 0;
					}
				}
			}
			.listBox{
				padding-left: 10px;
				.list /deep/{
					.mint-cell{
						min-height: 38px;
						border-bottom: 1px solid #efefef;
						.mint-cell-value{
							span{
								font-size: 12px;
							}
						}
						&:first-child{
							border-top: 1px solid #efefef;
						}
					}
				}	
			}
			.watchmore{
				padding: 10px 0;
				font-size: 16px;
				span{
					margin:10px auto;
					padding-right:20px;
					background: url(//a.mysteelcdn.com/wap/ydz/images/blue_arrow.png) right center no-repeat;
					background-size:16px 16px;
					color:#4F97EF;
				}
			}
		}
		.links{
			display: flex;
			background: #EBF4FF;
    		border-radius: 100px;
			height: 34px;
			margin:0 20px;
			align-content:space-between;
			a{
				flex: 1;
				height: 100%;
				line-height: 34px;
				&.router-link-exact-active{
					background: #4F97EF;
					color: #fff;
					border-radius: 100px;

				}
			}
		}
	}
	.listBox /deep/{
		.mint-cell-title {
			overflow: hidden;
			width: 100%;
			text-overflow: ellipsis;
			white-space: nowrap;
			margin-right: 10px;
		}
	}
</style>
