<template>
  <div class="base">
    <Scroll class="scroll">
      <div class="page1">
        <DisplayImage></DisplayImage>
        <TextDetail :goods="goods"></TextDetail>
      </div>
    </Scroll>
  </div>
</template>

<script>
import {getGoods} from '@/network/products.js'

import DisplayImage from '@/components/content/showImage/displayImage/DisplayImage'
import Scroll from '@/components/common/scroll/Scroll.vue'
import TextDetail from '@/components/content/textDetail/TextDetail'

export default {
  name:"Products",
  components:{
    DisplayImage,
    Scroll,
    TextDetail
  },
  data(){
    return{
      goods:null
    }
  },
  mounted(){
    this.goods=getGoods()
    console.log(this.goods);
    
  }
}
</script>

<style scoped>
@import '~@/assets/css/base.css';

.scroll{
  height: 100vh;
}
.page1{
  display: flex;
}
.page1>*{
  flex: 1;
  flex-wrap: nowrap;
}
</style>