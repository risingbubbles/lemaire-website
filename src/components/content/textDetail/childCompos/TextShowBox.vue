<template>
  <div>
    <div v-show="!transparent" class="text-show-box margin margin-top-140">
      <GoodsHead :goodsHead="goods.goodsHead">
        <!-- <template #quantity>
          <span>-</span>
          <span>1</span>
          <span>+</span>
        </template> -->
      </GoodsHead>
      <div class="goods-size">
        <ul>
          <li>Size</li>
          <li v-for="(item,index)  in goods.goodsSize" :key="index">{{item}}</li>
        </ul>
        <div class="toRight">Guide</div>
      </div>

      <div class="clear">
        <span>Add to Bag</span>
      </div>

      <div>
        <span>{{goods.goodsInfo}}</span>
      </div>
    </div>
    <div v-show="transparent" class="text-show-box margin margin-top-140">
      <!-- <div @click="close" class="close">close</div> -->
      <Close class="close"></Close>
      <TextShowBoxContent>
         <template v-slot:ReadMore>{{replaceContent[controller]}}</template>
      </TextShowBoxContent>
    </div>
  </div>
</template>

<script>
import TextShowBoxContent from './TextShowBoxContent'
import GoodsHead from './childCompos/GoodsHead'
import Close from './childCompos/Close'

export default {
  name:'TextShowBox',
  components:{
    TextShowBoxContent,
    GoodsHead,
    Close
  },
  data(){
    return{

    }
  },
  props:{
    transparent:{
      type:Boolean,
      default:false
    },
    replaceContent:{
      type:Object,
      default(){}
    },
    controller:String,
    goods:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
@import '~@/assets/css/textdetail/textDetail.css';
@import '~@/assets/css/base.css';

@media screen and (min-width: 1160px) {
  .text-show-box{
    height: 305px;
    border: 2px dashed black;
  }
  .text-show-box>*{
    border:1px solid black;
  }

  .goods-size>ul{
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-block;
  }
  .goods-size>ul>li{
    display: inline-flex;
    border:1px solid black;
    align-items: center;
    width:40px;
    height: 40px;
  }
  .goods-size>div{
    display: inline-block;
    height: 70px;
    line-height: 35px;
    border:1px solid black;
  }
  
}
/* 缩放端↓ */
@media screen and (max-width: 1160px) {
  .text-show-box{
    padding: 50px;
    padding-right: 0px;
    margin-right: 0px; 
    padding-bottom: 0;
    margin-bottom: 0;
  }
  .text-show-box>*{
    border:1px solid black;
  }
  .goods-size>ul{
    padding: 0;
    margin: 0;
    list-style: none;
    display: inline-block;
  }
  .goods-size>ul>li{
    display: inline-flex;
    border:1px solid black;
    align-items: center;
    width:35px;
    height: 35px;
  }
  .goods-size>div{
    display: inline-block;
    height: 50px;
    line-height: 35px;
    border:1px solid black;
  }
  
  
}
</style>