<template>
  <div class="container">
    <v-crumbs cTitle="基础表格"></v-crumbs>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-table border :data="dataTable" style="width:100%;">
        <el-table-column prop="date" label="日期" width="200"></el-table-column>
        <el-table-column prop="name" label="姓名" width="200"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="4"
          layout="total, prev, pager, next"
          :total="20">
        </el-pagination>
      </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:20px;">
      <el-col :span="24">
        <el-table :data="dataTable" style="width:100%;" :row-class-name="tableRowClassName">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { fetchList } from 'api/tableAPI';
import vCrumbs from '../common/Crumbs.vue'
export default {
  components:{
    vCrumbs
  },
  data(){
    return{
      currentPage:1,
      listQuery: {
            page: 1,
            limit: 10
          },
      dataTable:[]
    }
  },
  created () {
    this.getList();
  },
  methods:{
    getList(){
      fetchList(this.listQuery).then(response => {
            this.dataTable = response.data.items;
          })
    },
    tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      },
      handleSizeChange(){
        return '';
      },
      handleCurrentChange(){
        return '';
      }
  }
}
</script>
<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>
