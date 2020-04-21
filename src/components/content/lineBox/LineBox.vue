<template>
  <div class="main-line-box">
      <router-link  tag="div" to="/products" class="line-box border"
      v-for="(item,index) in lineGoods" :key="index">
        <LineBoxItem class="line-box-item" v-for="goods in item" :goods="goods"></LineBoxItem>
      </router-link>
  </div>
</template>
 
<script>

import LineBoxItem from '@/components/content/lineBox/childCompos/LineBoxItem'

export default {
  name:"LineBox",
  components:{
    LineBoxItem
  },
  data(){
    return{
      // 当前line的goods
      lineGoods:[],
      // line数
      lineNum:0,
      //每行默认3个
      defaultLineItemNum:3,
      //最后一行有几个
      lastLineItemNum:0
    }
  },
  props:{
    multiGoods:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  created(){
    //获取line数
    this.lineNum=this.getLineNum
    //获取当前line的goods
    this.lineGoods=this.getLineGoods()
  },
  methods:{
    //获取当前line的goods
    getLineGoods(){
      
      let lineItemNum=0
      let lineGoods=[]
      console.log(this.multiGoods);
      
      if(this.multiGoods.length==this.lastLineItemNum){
        //如果是最后一行 直接将lineItemNum赋值为lastLineItemNum
        lineItemNum=this.lastLineItemNum
      }else{
        lineItemNum=this.defaultLineItemNum
      }

      for(let line=0;line<this.lineNum;line++){
        let temp=[]
        for(let i=0;i<lineItemNum;i++){
          if(this.multiGoods.length!=0){
            temp.push(this.multiGoods.shift())
          }
        }
        lineGoods.push(temp)
      }
      
      return lineGoods
    }
  },
  computed:{
    getLineNum(){
      let goodsNum=this.multiGoods.length
      let lineNum=Math.ceil(goodsNum/this.defaultLineItemNum)
      //求得最后一行的item个数
      this.lastLineItemNum=goodsNum%this.defaultLineItemNum
      return lineNum
    },
    
  }
  
}
</script>

<style scoped>
@import '~@/assets/css/base.css';
.main-line-box{
  
}
.line-box{
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.line-box-item{
}
</style>