<template>
  <div class="text-detail">
    <TextShowBox
          :controller="controller" 
          :replaceContent="replaceContent"
          :transparent="transparent"
          :goods="goods">
          
    </TextShowBox>
    <TextController
      :goodsSize="goods.goodsSize"
      :controllerButtons="controllerButtons"
      @controllerButtonClick="cover"></TextController>
  </div>
</template>

<script>
// import {TextShowBox,TextController} from '@/assets/js/components.url.js'

// console.log(typeof(TextController),TextController);
import TextController from './childCompos/TextController'
import TextShowBox from './childCompos/TextShowBox'



export default {
  name:"TextDetail",
  components:{
    TextController,
    TextShowBox
  },
  data(){
    return{
      controllerButtons:[
        'ReadMore',
        'Care Instructions',
        'Free shipping and returns worlwide',
        'Customer Service',
        'Share by email'
      ],
      //控制替换内容的展示
      transparent:false,
      replaceContent:{
        ReadMore:"a",
        CareInstructions:"b",
        FreeShippingAndReturnsWorlwide:"c",
        CustomerService:"d",
        ShareByEmail:"e"
      },
      controller:""
    }
  },
  props:{
    goods:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  methods:{
    cover(index){
      this.transparent=true
      //controller是控制插入TextShowBoxContent的数据的值
      switch(index){
        case 0:
          this.controller="ReadMore"
          break
        case 1:
          this.controller="CareInstructions"
          break
        case 2:
          this.controller="FreeShippingAndReturnsWorlwide"
          break
        case 3:
          this.controller="CustomerService"
          break
        case 4:
          this.controller="ShareByEmail"
          break
      }
    },
  },
  mounted(){
    this.$close.$on("close",()=>{
      this.transparent=false
    })
  }
}
</script>

<style scoped>
.text-detail{
  display: block;
}
</style>