<template>
  <div class="container">
    <v-crumbs cTitle="基础表格"></v-crumbs>
    <el-table :data="dataTable" style="width:100%;">
      <el-table-column prop="date" label="日期" width="200"></el-table-column>
      <el-table-column prop="name" label="姓名" width="200"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="4"
        layout="total, prev, pager, next"
        :total="20">
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
      dataTable:[
        {
          date:'2017-06-19',
          name:'叶子',
          address:'武汉市洪山区光谷软件园'
        },
        {
          date:'2017-06-19',
          name:'叶子',
          address:'武汉市洪山区光谷软件园'
        },
        {
          date:'2017-06-19',
          name:'叶子',
          address:'武汉市洪山区光谷软件园'
        },
        {
          date:'2017-06-19',
          name:'叶子',
          address:'武汉市洪山区光谷软件园'
        }
        ]
    }
  }
}
</script>

