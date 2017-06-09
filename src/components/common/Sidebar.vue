<template>
<div class="sidebar">
  <el-menu default-active="Hell0" class="el-menu-vertical-demo theme" unique-opened router>
        <el-menu-item index="Hello"><i class="el-icon-menu">Home</i></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message">导航二</i></template>
          <el-menu-item-group title="分组一">
            <template slot="title">分组一</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组二">
            <template slot="title">分组二</template>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message">导航三</i></template>
          <el-menu-item-group title="分组一">
            <template slot="title">分组一</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组二">
            <template slot="title">分组二</template>
            <el-menu-item index="3-3">选项3</el-menu-item>
            <el-menu-item index="3-4">选项4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
</div>
</template>

<script>
export default {
  computed:{
      onRoutes() {
          return this.$route.path.replace('/','');
      }
  }}
</script>

<style lang="less" scoped>
.sidebar{
  display: block;
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 0;
  background-color: #58B7FF;
  width: 200px;
  .theme{
      background-color: #58B7FF;
    }
}
</style>


