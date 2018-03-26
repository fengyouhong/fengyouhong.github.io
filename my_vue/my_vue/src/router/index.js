import Vue from 'vue'
import Router from 'vue-router'
import router1 from '../components/router1'
import router2 from '../components/router2'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
    	path:'router1',
    	component:router1,
    	
    },
    {
		path:'router2',
		component:router2
	}
  ]
})
