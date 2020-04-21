<template>
  <div>
    <TopNavBar>L E M A I R E</TopNavBar>
    <LeftNavBar :categories="categories" :categoryList="categoryList"></LeftNavBar>
    <RightNavBar class="right-nav-bar">

      <template v-slot:left>
        <router-link to="/sign" tag="div">{{uName}}</router-link>
      </template>

      <template v-slot:center>
        <div class="center-item">
          <div>10</div>
          <img src="@/assets/img/navbar/cart.svg"/>
          
        </div>
      </template>

      <template v-slot:right>
        <img src="@/assets/img/navbar/search.svg"/>
      </template>
      
    </RightNavBar>
  </div>
</template>

<script>


import TopNavBar from './childCompos/TopNavBar'
import LeftNavBar from './childCompos/LeftNavBar'
import RightNavBar from './childCompos/RightNavBar'


export default {
  name:"NavBar",
  components:{
    TopNavBar,
    LeftNavBar,
    RightNavBar
  },
  data(){
    return{
      categories:[],
      categoryList:{},
      uName:"Sign UP/Sign In"
    }
  },
  props:{
    categoriesAndChildList:{
      type:Object,
      default(){
        return{}
      }
    },
  },
  mounted(){
    this.categories=this.categoriesAndChildList.categories
    this.categoryList=this.categoriesAndChildList.categoryList
    // this.uName=this.$store.state.user.uName

  },

}
</script>

<style>
.right-nav-bar{
  width: 16%;
  border: 1px solid red;
}
.right-nav-bar img{
  width: 25px;
  height: 30px;
}
.center-item{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left:18px;
  margin-right:18px;
}
</style>