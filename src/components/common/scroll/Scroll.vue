<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import BScroll from '@better-scroll/core'
  import MouseWheel from '@better-scroll/mouse-wheel'
  BScroll.use(MouseWheel)
  
  export default {
    name:"Scroll",
    mounted(){
      this.init()

      this.bs.on('scroll',(position)=>{
        this.$emit("scroll",position)
      })
      // this.bs.on('pullingUp',()=>{
      //   this.$emit("pullingUp")
      //   this.finishPullUp()
      // })
      this.bs.on('refresh', () => {
        console.log('刷新了！')
      })
      
    },
    methods:{
      //better-scroll的配置
      init(){
        this.bs=new BScroll(this.$refs.wrapper,{
          probeType: 3,
          pullUpLoad: true,
          click:true,
          mouseWheel: {
            speed: 2,
            invert: false,
            easeTime: 300,
          }
        })
      },
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo && this.bs.scrollTo(x,y,time)
      },
      finishPullUp(){
        this.bs.finishPullUp() 
      },
      refresh(){
        this.bs && this.bs.refresh()
      }
    }
  }
</script>
<style scoped>
  .wrapper{
    background-color: red;
    overflow: hidden;
    height: 100%;
    width: 100%;
  }
</style>