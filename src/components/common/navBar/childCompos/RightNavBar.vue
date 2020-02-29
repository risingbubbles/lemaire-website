<template>
  <div class="right-nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:"RightNavBar",
  data(){
    return{
    }
  },
  props:{
    divNum:{
      type:Number,
      default:0
    },
    fontColor:{
      type:String,
      default:"black"
    }
  }
}
</script>

<style>
.right-nav-bar{
  position: absolute;
  margin: 8px;
  right: 0px;
  top: 0px;
  text-align: right;
  display: flex;
  align-items: center;
}
.right-nav-bar>*{
  border: 1px solid black;
  flex: 1;
  text-align: center
}
.left{
  color: black;
}
.center{
}
.right{
}
</style>