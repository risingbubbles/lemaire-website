<template>
  <div :class="{borderTop:haveBorderTop}" class="bottom-nav-bar">
    <BottomNavBarItem class="bottom-nav-bar-item">
      ©thisiscc
    </BottomNavBarItem>
  </div>
</template>

<script>
import BottomNavBarItem from './childCompos/BottomNavBarItem'
export default {
  name:"BottomNavBar",
  data(){
    return{
      
    }
  },
  props:{
    haveBorderTop:{
      type:Boolean,
      default:true
    }
  },
  components:{
    BottomNavBarItem
  }
}
</script>

<style>
.bottom-nav-bar{
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bottom-nav-bar-item{
  border: 1px solid red;
}
.borderTop{
  border-top: 2px solid black;
}
</style>