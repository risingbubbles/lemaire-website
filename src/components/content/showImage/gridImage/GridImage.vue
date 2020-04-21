<template>
  <div class="grid-image">
    <!-- <img :src="@/assets/img/gridimage/W_201_CO243_LF431_916_2_900x.webp"/> -->
    <img :src="truthUrl"/>
  </div>
</template>

<script>

export default {
  name:"GridImage",
  data(){
    return{
      url:"",
      truthUrl:""
    }
  },
  props:{
    goodsImage:{
      type:String,
      default:""
    }
  },
  mounted(){
    this.wait(100)
  },
  methods:{
    wait(time){
      setTimeout((time)=>{
        // this.url=require(this.goodsImage)
        this.url=require("@/assets/img/gridimage/W_201_CO243_LF431_916_2_900x.webp")
        this.truthUrl=this.url
      },time)
    }
  }
}
</script>

<style scoped>

.grid-image{
  
}
.grid-image>img{
  width: 100%;
}
</style>