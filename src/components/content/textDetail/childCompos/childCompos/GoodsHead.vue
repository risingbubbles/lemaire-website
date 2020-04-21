<template>
  <div  class="goods-head">
    <div class="left">
      <div>{{head.goodsName}}</div>
      <div>{{head.goodsMaterial}}</div>
      <div>{{head.goodsColor}}</div>
    </div>
    <div class="right">
      <!-- 数量 -->
      <div class="goods-quantity">
        <slot name="quantity"></slot>
      </div>
      <!-- 价格 -->
      <div class="toRight">{{head.goodsPrice | addEuro}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:"GoodsHead",
  data(){
    return{
      head:"",
      // isShow:false
    }
  },
  props:{
    goodsHead:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  mounted(){
    this.wait(200,this.head=this.goodsHead)
    
  },
  methods:{
    wait(time,fc){
      setTimeout((time,fc)=>{
        fc
      },time)
    }
  },
  filters:{
    addEuro(value){
      return value+"€"
    }
  },
  
}
</script>

<style>
@import '~@/assets/css/base.css';
.goods-head{
  display: flex;
}
.left{
  display: inline-block;
  width: 55%;
}
.right{
  display: inline-flex;
  width: 45%;
  justify-content: space-between;
  align-items: center;
}
.goods-quantity{
  
}
.goods-price{
  
}
  /* color: bisque; */
</style>