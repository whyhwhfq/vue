<template>
	<div class="searchlist">
		<searchinp></searchinp>
		<mt-button type="primary" @click.native="handleClick">{{choseTim}}</mt-button>
		<mt-popup v-model="popupVisible" position="bottom">
			<ul>
				<li v-for="(item,index) in times" :key='index' @click="chooseTime($event)">{{item}}</li>
			</ul>
		</mt-popup>
		<div class="listBox">
			<slist :slists='item' v-for='(item,index) in searchslists' :key="index"></slist>
		</div>
	</div>
</template>

<script>
import stitle from './baseCompts/Title'
import slist from './baseCompts/List'
import searchinp from './baseCompts/Searchinp'
export default {
	name: 'Searchlist',
	components:{
		stitle,
		slist,
		searchinp
	},
	data () {
		return {
			popupVisible:false,
			times: ['不限时间','2018-08-15','2018-08-14','2018-08-13','2018-08-12','2018-08-11'],
			choseTim:'选择时间',
			searchslists:[]
		}
	},
	mounted(){
		this.getAjax();
	},
	methods:{
		handleClick: function() {
			this.popupVisible = true;
		},
		chooseTime:function(e){
			this.choseTim=e.path[0].innerText;
			this.popupVisible = false;
		},
		getAjax:function () {
			var that=this;
			this.$jsonp('https://index.mysteel.com/newxpic/getZSPS.ms',{})
						.then(function(res){
							that.searchslists=res.slice(0,6);
                        },function(res){
                            console.log(res);
                        });
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.searchlist{
	padding-top:1px;
	.mint-button{
		width: 94%;
		margin:0 auto;
	}
	.mint-popup-bottom{
		padding-left:20px;
		padding-bottom: 10px;
		width: 100%;
		li{
			text-align: left;
			border-bottom: 1px solid #ccc;
			padding:10px 0;
			font-size: 14px;
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
