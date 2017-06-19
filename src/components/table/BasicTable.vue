<template>
  <div class="container">
    <v-crumbs cTitle="表格"></v-crumbs>
    <el-alert title="基础表格" type="success" :closable="false"></el-alert>
    <div class="basicTable">
      <el-table border :data="dataTable" style="width:100%;">
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
    <el-alert title="固定表头：增加height" type="success" :closable="false"></el-alert>
    <div class="fixTable">
      <el-table height="150" border :data="dataTable" style="width:100%;">
        <el-table-column prop="date" label="日期" width="200"></el-table-column>
        <el-table-column prop="name" label="姓名" width="200"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
    <el-alert title="固定列：增加fixed" type="success" :closable="false"></el-alert>
    <div class="fixColumTable">
      <el-table :data="tableData" border  style="width: 100%">
        <el-table-column  fixed  prop="date"  label="日期"  width="150">
        </el-table-column>
        <el-table-column  prop="name"  label="姓名"  width="120">
        </el-table-column>
        <el-table-column  prop="province"  label="省份"  width="120">
        </el-table-column>
        <el-table-column  prop="city"  label="市区"  width="120">
        </el-table-column>
        <el-table-column  prop="address"  label="地址"  width="300">
        </el-table-column>
        <el-table-column  prop="zip"  label="邮编"  width="120">
        </el-table-column>
        <el-table-column  fixed="right"  label="操作"  width="100">
          <template scope="scope">
            <el-button @click="handleClick" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
        ],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
    }
  }
}
</script>

