<template>
  <div>
    <TopNavBar>L E M A I R E</TopNavBar>
    <LeftNavBar :categories="['a','b']" :categoryList="{'a':[1,1,1],'b':[2,2,2]}"></LeftNavBar>
    <RightNavBar class="right-nav-bar">
      <template v-slot:left>Fr</template>
      <template v-slot:center>
        <div class="center-item">
          <div>0</div>
          <img src="@/assets/img/navbar/cart.svg"/>
        </div>
      </template>
      <template v-slot:right><img src="@/assets/img/navbar/search.svg"/></template>
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
  }
}
</script>

<style>
.right-nav-bar{
  width: 14%;
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