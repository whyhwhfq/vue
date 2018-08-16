<template>
  <div id="app">
    <top></top>
    <router-view/>
	<bottom></bottom>
  </div>
  
</template>

<script>
import bottom from './components/baseCompts/Bottom'
import top from './components/baseCompts/Head'
export default {
	name: 'App',
	components:{
		bottom,
		top
	},
	methods:{
		printPage:function (){
			document.getElementById("app").ExecWB(6,1);
		}
	}
}
</script>

<style lang='scss'>
#app {
  font-family: 'Microsoft Yahei', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 50px;
  background: #f4f4f4;
}

</style>



