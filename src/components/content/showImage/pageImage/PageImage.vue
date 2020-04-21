<template>
  <div class="page-image">
    <!-- <img src="@/assets/img/homepage/show_fw2021_1_1944x.webp"/>
    <img src="@/assets/img/homepage/jiao2_1080x.webp"/>
    <img src="@/assets/img/homepage/test3_1944x.webp"/> -->
    <div class="page-image-item">
      <img src="@/assets/img/homepage/show_fw2021_1_1944x.webp"/>
    </div>

    <div class="page-image-item">
    <img src="@/assets/img/homepage/jiao2_1080x.webp"/>
    </div>

    <div class="page-image-item">
    <img src="@/assets/img/homepage/test3_1944x.webp"/>
    </div>
  </div>
</template>

<script>
export default {
  name:"PageImage"
}
</script>

<style scoped>
.page-image{
  height: 100%;
  text-align: center;
}
.page-image-item{
  width: 100%;
}
.page-image-item>img{
  width: 1500px;
  height: 770px;
}
</style>