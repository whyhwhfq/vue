<template>
	<div class="searchArea">
        <div class="selectArea">
            <h4 @click="shownfun">{{selected}}</h4>
            <mt-navbar v-model="selected" v-show="selectShown">
                <mt-tab-item @click.native="shownfun" id="行情">行情</mt-tab-item>
                <mt-tab-item @click.native="shownfun" id="文章">文章</mt-tab-item>
            </mt-navbar>
        </div>
        <div class="inpArea">
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="行情">
                    <div class="inpCon">
                        <input type="text" placeholder="输入城市">
                        <input type="text" placeholder="输入品种">
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="文章">
                    <div class="inpCon">
                        <input type="text" placeholder="请输入关键词搜索">
                    </div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div class="btnArea">
			<router-link to="/searchlist" slot="right">
            	<mt-button type="primary" size="small" @click='changeTopTitle'>搜索</mt-button>
			</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Searchinp',
	data(){
		return {
			selected:'行情',  //搜索下拉框
			selectShown:false
		}
	},
	methods:{
		shownfun:function(){    //控制
			return this.selectShown=!this.selectShown;
		},
		changeTopTitle:function(){
			this.$store.commit("changeTopTitle",'我的钢铁')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.searchArea{
		display: flex;
		width: 345px;
		margin: 10px auto;
		-webkit-box-shadow: darkgrey 0px 4px 20px -5px;
		-moz-box-shadow: darkgrey 0px 4px 20px -5px;
		box-shadow: darkgrey 0px 4px 20px -5px;
		border: 1px/* no*/ solid #4F97EF;
		border-radius: 1.2rem;
		background: #fff;
		height: 38px;
	    z-index: 1;
    	position: relative;
		.selectArea{
			flex: 2;
			h4{
				height: 100%;
				line-height: 36px;
				color:#666;
				font-size: 14px;
				font-weight: normal;
				background: url(//a.mysteelcdn.com/wap/ydz/images/gray_arrow.png) right 50% no-repeat;
    			background-size:10px;
			}
			.mint-navbar{
				// display: none;
				width: 100%;
				display: block;
				border: 1px/* no*/ solid #ccc;
				border-radius: 2px;
				margin-top: 5px;
				&:before{
					display: block;
					content: '';
					width: 12px;
					height: 5px;
					margin:0 auto;
					background: url(//a.mysteelcdn.com/wap/ydz/images/search_arrow.png) 50% 0 no-repeat;
					background-size: 12px 5px;
					margin-top: -4px;
				}
				.mint-tab-item{
					display: block;
					text-align: center;
					line-height: 24px;
					color: #999;
					font-size: 14px/* no*/;
					padding:8px 0;
					&.is-selected{
						background: #4F97EF;
						color: #fff;
						border:none;
					}
				}
			}
		}
		.inpArea{
			flex: 6;
			.mint-tab-container-item{
				.inpCon{
					display: flex;
					padding-left: 10px;
					input{
						flex: 1;
						width: 10px;
						height: 20px;
						margin-top: 8px;
						padding-left:10px;
						border: none;
						outline: none;
						border-left:1px/* no*/ solid #E5E5E5;
					}
				}
			}
		}
		.btnArea{
			flex: 2;
			.mint-button{
				border-radius: 16px;
				width: 90%;
				height: 32px;
				margin:2px auto;
				background: #69AAFB;
			}
		}
	}
</style>
