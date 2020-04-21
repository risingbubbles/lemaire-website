<template>
  <div>
    <Scroll class="scroll" @scroll="scroll">
      <PageImage></PageImage>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/common/scroll/Scroll.vue'
import PageImage from '@/components/content/showImage/pageImage/PageImage.vue'

export default {
  name:"Home",
  components:{
    Scroll,
    PageImage
  },
  methods:{
    scroll(position){
      console.log("正在拖动"+position)
      
    }
  }
}
</script>

<style scoped>
.scroll{
  height: 752px;
}
</style>