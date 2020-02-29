<template>
  <div class="top-nav-bar">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:"TopNavBar"
}
</script>

<style>
.top-nav-bar{
  border: 1px solid red;
  margin: 0 auto;
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-nav-bar>div{
  font-size: 30px;
}
</style>