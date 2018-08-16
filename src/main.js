// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'  // px-rem插件
import axios from 'axios';
import Mint from 'mint-ui'      //引入 Mint-ui矿框架
import VueJsonp from 'vue-jsonp'
import Vuex from 'vuex'
Vue.config.productionTip = false   //设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.prototype.$axios = axios
import 'mint-ui/lib/style.css'
import '../static/css/base.css'
/* eslint-disable no-new */
Vue.use(Mint)
Vue.use(VueJsonp)
Vue.use(Vuex)
let store = new Vuex.Store({
	state:{
		topTitle:'我的钢铁网'     //保存的状态数据，放在state数据中心
	},
	mutations:{        //mutations是数据管理中心的动作
		changeTopTitle(state,title){     //操作状态数据函数，state是数据管理中心。price是参数
			state.topTitle = title
		}
	},
	actions:{      //在mutations之前的动作,只能调用mutations,不能更改state,跟后端的api接口都放到actions中
		increase(context,price){
			context.commit("increment",price)
		}
	}
})
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
