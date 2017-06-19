<template>
<div class="sidebar">
  <el-menu default-active="Hell0" class="el-menu-vertical-demo" unique-opened router theme="dark">
        <el-menu-item index="HomePage"><i class="el-icon-menu"></i>主页</el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-message"></i>组件</template>
          <el-menu-item-group title="编辑器">
            <template slot="title">编辑器</template>
            <el-menu-item index="EditorPage">文本编辑器</el-menu-item>
            <el-menu-item index="MarkdownPage">Markdown编辑器</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="表格">
            <template slot="title">表格</template>
            <el-menu-item index="BasicTable">表格</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>导航三</template>
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
  background-color: #2b3643;
  width: 200px;
}
</style>


