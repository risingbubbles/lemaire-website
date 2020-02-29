<template>
  <div class="left-nav-bar">
    <div v-for="(category,index) in categories">
      <span @mouseout="mouseOut(index)" @mouseover="mouseOver(index)">{{category}}</span>
      <ul :class="{isShow:index===currentIndex}" class="ul">
        <li v-for="item in categoryList[category]">{{item}}</li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name:'LeftNavBar',
  data(){
    return{
      currentIndex:-1
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
    mouseOut(index){
      this.currentIndex=-1
    }
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
  margin-bottom: 9px;
}
.left-nav-bar>div>span{
  border: 1px solid forestgreen;

}
.ul{
  list-style-type: none;
  display: none
}
.ul>li{
  margin-left: 0px;
}
.isShow{
  display: block
}
</style>