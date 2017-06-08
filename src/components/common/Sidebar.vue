<template>
<div class="sidebar">
  <el-row class="tac">
    <el-col :span="8">
      <el-menu default-active="1" class="el-menu-vertical-demo" theme="dark">
        <el-menu-item index="1"><i class="el-icon-menu">导航一</i></el-menu-item>
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

<style scoped>

</style>


