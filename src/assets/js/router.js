import VueRouter from 'vue-router'
import index from '../../component/index.vue'
import home from '../../component/home.vue'
import type from '../../component/type.vue'
// import typeconstr from '../../component/typeconstr.vue'
import sign from '../../component/sign.vue'
import password from '../../component/password.vue'
import constr from '../../component/constr.vue'
import detiles from '../../component/detiles.vue'
import buycar from '../../component/buycar.vue'
import fqbuy from '../../component/fqbuy.vue'
export default new VueRouter({
	routes:[
		{
			path:'/',component:index,
			children:[
				{
					path:"/home",component:home
				}
			],
			redirect:"/home"
		},
		{
			path:'/type',component:type
		},
		{
			path:'/sign',component:sign
		},
		{
			path:'/password',component:password
		},
		{
			path:'/constr',component:constr
		},
		{
			path:'/detiles',component:detiles
		},
		{
			path:'/buycar',component:buycar
		},
		{
			path:'/fqbuy',component:fqbuy
		},
		{
			path:'/*',component:index
		}
	]
})