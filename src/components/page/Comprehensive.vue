<template>
  <div class="container">
    <v-crumbs cTitle="增删改查"></v-crumbs>
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item>
        <el-input type="text" placeholder="标题"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="text" placeholder="作者"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="value" placeholder="类型">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form-item>

      <el-button type="primary" icon="search">搜索</el-button>
      <el-button type="primary" icon="plus">添加</el-button>
      <el-button type="primary" icon="document">导出</el-button>
    </el-form>
    <el-table :data="dataTable">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="date" label="时间"></el-table-column>
      <el-table-column prop="readNum" label="阅读数"></el-table-column>
      <el-table-column prop="state" label="状态"></el-table-column>
      <el-table-column prop="reward" label="酬劳"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button v-if="scope.row.status!='published'" size="small" type="success" @click="handleModifyStatus(scope.row,'published')">发布
          </el-button>
          <el-button v-if="scope.row.status!='edite'" size="small" @click="handleModifyStatus(scope.row,'edite')">编辑
          </el-button>
          <el-button v-if="scope.row.status!='deleted'" size="small" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import vCrumbs from '../common/Crumbs.vue'

export default {
  components:{
    vCrumbs
  },
  data(){
    return{
      dataTable:[],
      options: [{
          value: '人民币',
          label: '人民币'
        }, {
          value: '美元',
          label: '美元'
        }, {
          value: '日元',
          label: '日元'
        }, {
          value: '欧元',
          label: '欧元'
        }],
        value: ''
    }
  }
}
</script>

<style lang="less" scoped>

</style>


