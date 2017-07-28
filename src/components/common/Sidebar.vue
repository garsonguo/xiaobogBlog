<template>
<div class="sidebar">
  <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
    <el-radio-button :label="false">展开</el-radio-button>
    <el-radio-button :label="true">收起</el-radio-button>
  </el-radio-group> -->
  <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <el-menu-item index="HomePage"><i class="el-icon-menu"></i>主页</el-menu-item>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-star-on"></i>组件</template>
      <el-menu-item index="EditorPage">文本编辑器</el-menu-item>
        <el-menu-item index="MarkdownPage">Markdown编辑器</el-menu-item>
      <el-menu-item index="ModalPage">模态框</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-message"></i>表单</template>
      <el-menu-item index="TypicalForm">典型表单</el-menu-item>
      <el-menu-item index="FormPage">表单</el-menu-item>
      <el-menu-item index="Upload">上传</el-menu-item>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"><i class="el-icon-document"></i>Table</template>
      <el-menu-item index="BasicTable">基础表格</el-menu-item>
      <el-menu-item index="FixedTable">固定表头、列</el-menu-item>
      <el-menu-item index="DynamicTable">动态表格</el-menu-item>
      <el-menu-item index="SortFilter">排序与筛选</el-menu-item>
    </el-submenu>
    <el-submenu index="5">
      <template slot="title"><i class="el-icon-circle-cross"></i>错误页面</template>
      <el-menu-item index="NotFound">404</el-menu-item>
    </el-submenu>
    <el-submenu index="6">
      <template slot="title"><i class="el-icon-date"></i>综合实例</template>
      <el-menu-item index="Comprehensive">增删改查</el-menu-item>
    </el-submenu>
  </el-menu>
</div>
</template>

<script>
export default {
  data(){
    return{
      isCollapse: true
    }
  },
    computed:{
      onRoutes() {
          return this.$route.path.replace('/','');
      }
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
        debugger
        var aa=this.$route.path
      }
  }
  }

</script>

<style lang="less" scoped>
.sidebar{
  display: block;
  position: absolute;
  left: 0;
  top: 50px;
  bottom: 0;
  background-color: #fff;
  width: 200px;
  border-right: 1px solid #ddd;
}
.el-menu{
  background-color: #fff;
}
.el-submenu__title{
  font-weight: bold;
  height: 46px;
  line-height: 46px;
}
.el-menu-item{
  background-color: #fff;
}
.el-menu-item{
  height: 46px;
  line-height: 46px;
}
</style>


