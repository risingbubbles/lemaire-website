<template>
  <div class="sign base paddingTop">
    <el-container>
      <el-header>
        <el-radio-group v-model="labelPosition" size="small">
          <el-radio-button label="left">扫码登录</el-radio-button>
          <el-radio-button label="right">账号密码登录</el-radio-button>
          <el-radio-button label="top">手机登录</el-radio-button>
        </el-radio-group>
      </el-header>

      <form action="get">
        <el-main>
          <el-row :gutter="20">
            <el-col><input class="grid-content" name="a" style="width:280px;" placeholder="账号"/></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col><input class="grid-content" name="b" style="width:280px;" placeholder="密码"/></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col><input type="submit" class="button" value="登录/注册"/></el-col>
          </el-row>
        </el-main>
      </form>

        <el-footer>
          <div>Footer</div>
        </el-footer>

      </el-container>
  </div>
</template>

<script>
export default {
  name:"Sign",
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  }
}
</script>

<style scoped>
@import '~@/assets/css/base.css';
/* 字体 */
@import 'http://fonts.googleapis.com/css?family=Lato:400,700';

.el-container{
  border: 1px solid black;
  /* border-top:7px solid #47cf73; */
  border-top:7px solid #444444;
  width: 600px;
  margin: 0 auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.el-header{
  padding: 0;
  display: flex;
  
  
}
.el-row{
  padding: 10px 0;
  text-align: center;
}
.el-row>*{
}
.el-radio-group{
  justify-self: center;
  flex: 1;
  text-align: center;
}
.el-main{
  font-family: 'Lato'
}
.grid-label{
  display: inline-block;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  border: 1px solid black;
  
}
.el-footer{
  font-family: 'Courier New', Courier, monospace;
  display: inline-flex;
  justify-content: center;
}
.el-footer>div{
  align-self: center;
}
.button{
  width: 280px;
  border-radius: 50px;
  background: rgba(60,0,0,0.19);
  font-family:'黑体';
}
.fail{
  border: 1px solid red;
  box-shadow: 2px 2x 5px #888888 ;
}
</style>