<template>
	<div class="title">
		<span></span>
		<h4><slot></slot></h4>
		
	</div>
</template>

<script>
export default {
    name: 'Title'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.title{
	text-align: left;
	height: 40px;
	line-height: 40px;
	font-size: 16px/* no*/;
	margin-top: 5px;
	span{
		display: inline-block;
		width: 4px;
		height: 14px;
		background: #4F97EF;
		background: #4F97EF;
		margin-right: 10px;
		vertical-align: middle;
	}
	h4{
		color:#333;
		text-align: left;
		display: inline-block;
		font-weight: normal;
	}
}
</style>
