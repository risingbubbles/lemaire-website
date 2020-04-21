<template>
  <div class="left-nav-bar">
    <div @mouseleave="mouseLeave(index)"  v-for="(category,index) in categories">
      <label :for="index" @mouseover="mouseOver(index)">{{category}}</label>
      <ul
      :id="index"
      :class="{isShow:index===currentIndex}"
      class="ul">
        <router-link
          tag="li"
          :to="{name:'category',params:{ category: item}}"
          v-for="(item,i) in categoryList[category]">
          <span>{{item}}</span>

        </router-link>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name:'LeftNavBar',
  data(){
    return{
      currentIndex:-1,
    }
  },
  props:{
    categories:{
      type:Array,
      default(){
        return["category1","category2"]
      }
    },
    categoryList:{
      //categoryList:{category1:[],category2:[]}
      type:Object,
      default(){
        return{
          category1:[1,1,1],category2:[2,2,2]
        }
      }
    }
  },
  methods:{
    mouseOver(index){
      this.currentIndex=index
    },
    mouseLeave(index){
      this.currentIndex=-1
      // event.stopPropagation()
    },
    
  },
  computed:{
  }
}
</script>

<style>
.left-nav-bar{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20%;
  margin: 34px;
}
.left-nav-bar>*{
  border: 1px solid red;
  font-size: 13px;
  margin-bottom:10px;
  margin-top: 6px;
  z-index: 9;
}
.left-nav-bar>div>label{
  border: 1px solid forestgreen;
  display: inline-block;
  width: 80px;
}
.ul{
  list-style-type: none;
  display: none
}
.ul>li{
  margin-left: 0px;
}
.isShow{
  display: block;
  border: 1px solid yellow;
}
</style>