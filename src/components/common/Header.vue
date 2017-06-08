<template>
  <div class="header">
    <el-row>
      <el-col :span="8">
        <div class="title">
          <span class="name">Xiaobog</span><span class="s-name">Admin</span>
        </div>
      </el-col>
      <el-col :span="8">
      </el-col>
      <el-col :span="8">
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: 'xiaobog'
      }
    }
  }
</script>

<style lang="less" scoped>
.header{
  font-size: 24px;
  height: 50px;
  background-color: #58B7FF;
  .title{
    line-height: 50px;
    margin-left: 20px;
    .name{
      color:#fff;
    }
    .s-name{
      color:red;
    }
  }
}
</style>


