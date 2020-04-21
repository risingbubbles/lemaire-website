<template>
  <div class="base paddingTop">
    <LineBox :multiGoods="multiGoods"></LineBox>
  </div> 
</template>

<script>
import {getGoodsFromCategory} from '@/network/category.js'

import LineBox from '@/components/content/lineBox/LineBox'

export default {
  name:"Category",
  components:{
    LineBox,
  },
  data(){
    return{
      //获取的所有这个分类的goods
      multiGoods:[],
      
    }
  },
  created(){
    //获取所有这个分类的goods
    this.multiGoods=getGoodsFromCategory()
  },
  
}
</script>

<style scoped>
@import '~@/assets/css/base.css';

</style>