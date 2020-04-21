<template>
  <div class="display-box">
    <img :src="goodsImage"/>
  <!-- <img src="~@/assets/img/gridimage/W_201_CO243_LF431_916_2_900x.webp"/> -->
  </div>
</template>

<script>
import {getGoods} from '@/network/products.js'

export default {
  nanme:"DisplayImage",
  data(){
    return{
      goodsImage:null,
      goods:null
    }
  },
  mounted(){
    // console.log(getGoods().goods.goodsImage);
    // const url=getGoods().goods.goodsImage
    // this.goodsImage=require(url)
    // console.log(this.goodsImage);
    
    this.goodsImage=require('@/assets/img/gridimage/W_201_CO243_LF431_916_2_900x.webp')
  }
}
</script>

<style scoped>

.display-box{
  
}
.display-box>img{
  width: 545px;
}
</style>