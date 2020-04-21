<template>
  <div class="line-box-item border">
    <GridImage></GridImage>
    <GoodsHead :goodsHead="goodsHead"></GoodsHead>
  </div>
</template>

<script>
import GridImage from '@/components/content/showImage/gridImage/GridImage'
import GoodsHead from '@/components/content/textDetail/childCompos/childCompos/GoodsHead'
export default {
  name:"LineBoxItem",
  data(){
    return{
      goodsImage:null,
      goodsHead:null
    }
  },
  components:{
    GridImage,
    GoodsHead
  },
  props:{
    goods:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  created(){
    this.wait(200,this.goodsHead=this.goods.goodsHead)
    
    
  },
  methods:{
    wait(time,...fc){
      setTimeout((time,fc)=>{
        fc
      },time)
    }
  }
}
</script>

<style scoped>
@import '~@/assets/css/base.css';
.line-box-item{
    width: 30%;
    display: inline-block;
    
}
</style>