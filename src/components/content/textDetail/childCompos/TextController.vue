<template>
  <div class="text-controller margin">
    <div v-for="(item,index) in controllerButtons">
      <span @click="controllerButtonClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TextController',
  data(){
    return{
    }
  },
  props:{
    controllerButtons:{
      type:Array,
      default(){
        return []
      }
    },
    goodsSize:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  methods:{
    controllerButtonClick(index){
      
      this.$emit("controllerButtonClick",index)
    }
  },
  
  
}
</script>

<style scoped>
@import '~@/assets/css/textdetail/textDetail.css';

@media screen and (min-width: 1160px) {
  .text-controller{
    border: 2px solid black;
    height: 200px;
    
  }
  .text-controller>div{
    line-height: 40px;
  }
}
/* 缩放端↓ */
@media screen and (max-width: 1160px) {
  .text-controller{
    padding-top: 0;
    margin-top: 20px;
    padding-right: 0px;
    margin-right: 0px;
    border: 1px solid black;
  }
  .text-controller>div{
    line-height: 40px;
  }
}
</style>