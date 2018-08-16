<template>
	<div class="list">
        <mt-cell :title="slists.title" to="/" :value="slists.time"></mt-cell>
	</div>
</template>

<script>
export default {
	name: 'List',
	props:['slists']  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.list{
	text-align: left;
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


</style>
