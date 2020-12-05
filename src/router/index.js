import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../components/Register.vue'
import Seller from '../views/Seller.vue'
import HomeForSeller from '../views/HomeForSellers.vue'
import ProductSeller from '../components/ProductSeller.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	},
	{
		path: '/register',
		name: 'Register',
		component:Register
	},
	{
		path:'/seller',
		name: "Seller",
		component: Seller,
		props:true


	},
	{
		path:'/home-seller',
		name:'HomeSeller',
		component:HomeForSeller,
		props:true
	},
	{
		path:'/home-seller/products',
		name:'ProductSeller',
		component:ProductSeller,
		props:true
	}
	

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
