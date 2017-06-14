<template>
<div class="bread-crumb">
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{cTitle}}</el-breadcrumb-item>
  </el-breadcrumb>
</div>
</template>
<script>
export default {
  props:['cTitle']
}
</script>

<style scoped>
.bread-crumb{
  margin: 10px;
}
</style>


