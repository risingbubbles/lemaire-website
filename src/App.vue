<template>
  <div id="app">
    <NavBar class="nav-bar" :categoriesAndChildList="categoriesAndChildList"></NavBar>
    <router-view></router-view>
    <BottomNavBar :haveBorderTop="false"></BottomNavBar>
    
  </div>
</template>
<script>
import {getCategoriesAndChildList} from '@/network/home.js'

import NavBar from "@/components/common/navBar/NavBar.vue"
import BottomNavBar from "@/components/common/bottomNavBar/BottomNavBar.vue"


export default {
  name:"App",
  components:{
    NavBar,
    BottomNavBar,
    
  },
  data(){
    return{
      categoriesAndChildList:{}
    }
  },
  created(){
    //接收左边导航栏的信息
    this.categoriesAndChildList=getCategoriesAndChildList()
    
  },
}
</script>
<style scoped>
@media screen and (min-width: 1160px) {
  .nav-bar{
    position: fixed;
    top:0px;
    left: 0px;
    right: 0px;
    z-index: 9;
  }
  
}
/* 缩放端↓ */
@media screen and (max-width: 1160px) {
  .nav-bar{
    
  }
}
</style>