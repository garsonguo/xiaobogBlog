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
          <el-menu-item index="ModalPage">模态框</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-message"></i>表单</template>
          <el-menu-item index="FormPage">表单</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title"><i class="el-icon-message"></i>Table</template>
          <el-menu-item index="BasicTable">基础表格</el-menu-item>
          <el-menu-item index="FixedTable">固定表头、列</el-menu-item>
          <el-menu-item index="DynamicTable">动态表格</el-menu-item>
          <el-menu-item index="BasicTable">排序</el-menu-item>
          <el-menu-item index="BasicTable">筛选</el-menu-item>
          <el-menu-item index="BasicTable">合计</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title"><i class="el-icon-message"></i>错误页面</template>
          <el-menu-item index="">401</el-menu-item>
          <el-menu-item index="">404</el-menu-item>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title"><i class="el-icon-message"></i>综合实例</template>
          <el-menu-item index="">增删改查</el-menu-item>
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


