<template>
  <div @click="close">close</div>
</template>

<script>
export default {
  name:"Close",
  methods:{
    close(){
      this.$close.$emit("close")
      console.log(123);
      
    }
  }
}
</script>

<style scoped>

</style>