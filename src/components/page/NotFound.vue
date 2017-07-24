<template>
  <div class="not-found">
    <el-row :gutter="20">
      <el-col :span="16">
        <img width="100%" height="100%" src="../../../static/img/404.png" alt="404图片">
      </el-col>
      <el-col :span="8">
        <div class="not-main">
          <h1 class="not-title">404</h1>
          <p class="not-content">
            请检查您输入的网址是否正确，请点击以下按钮返回主页或者发送错误报告
          </p>
          <el-button type="primary" @click="Return">返回主页</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    Return(){
      this.$router.push({path:'/HomePage'});
    }
  }
}
</script>
<style lang="less" scoped>
.not-found{
  padding: 50px;
  .not-main{
    padding-top:25%;
    .not-title{
      color:red;
      margin-bottom: 20px;
    }
    .not-content{
      margin-bottom: 20px;
    }
  }
}
</style>

