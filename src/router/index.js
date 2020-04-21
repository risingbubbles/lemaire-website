import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home =()=> import ('@/views/home/Home.vue')
const Sign =()=> import ('@/views/sign/Sign.vue')
const Profile =()=> import ('@/views/profile/Profile.vue')
const Category =()=> import ('@/views/collections/category/Category.vue')
const Collections =()=> import ('@/views/collections/Collections.vue')
const Products =()=> import ('@/views/collections/category/products/Products.vue')

const routes = [
	{
    path:"",
    component:Home
  },
  {
    path:"/profile",
    component:Profile
  },
  {
    name:"category",
    path:"/collections/:category",
    component:Category,
    // children:[
    //   {
    //     name:"products",
    //     path:"/products",
    //     component:Products
    //   }
    // ]
  },
  {
    path:"/products",
    component:Products
  },
  {
    path:"/sign",
    component:Sign
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
