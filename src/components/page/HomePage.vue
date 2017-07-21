<template>
<div class="home-page">
  <v-crumbs cTitle="主页"></v-crumbs>
  <div class="fg-line">
    <el-row :gutter="20">
      <el-col :span="4">
        <router-link class="pan-btn blue-btn" to="/HomePage">主页</router-link>
      </el-col>
      <el-col :span="4">
        <router-link class="pan-btn light-blue-btn" to="/HomePage">组件</router-link>
      </el-col>
      <el-col :span="4">
        <router-link class="pan-btn pink-btn" to="/FormPage">表单</router-link>
      </el-col>
      <el-col :span="4">
        <router-link class="pan-btn green-btn" to="/BasicTable">表格</router-link>
      </el-col>
      <el-col :span="4">
        <router-link class="pan-btn tiffany-btn" to="/BasicTable">错误页面</router-link>
      </el-col>
      <el-col :span="4">
        <router-link class="pan-btn yellow-btn" to="/BasicTable">综合实例</router-link>
      </el-col>
    </el-row>
  </div>
  <div class="fg-line">
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card>
          <div class="echarts">
            <barChart></barChart>
          </div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div class="echarts">
            <lineChart></lineChart>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</div>
</template>

<script>
import vCrumbs from '../common/Crumbs.vue'
import barChart from '../chart/bar.vue'
import lineChart from '../chart/line'
export default {
  mounted(){

  },
  components: {
          vCrumbs,barChart,lineChart
        }
  }
</script>

<style lang="less" scoped>
.home-page{
  margin: 20px 50px;
  .fg-line{
    margin-bottom: 20px;
    .home-item{
        height: 100px;
        border-radius: 10px;
        padding: 10px;
      }
      .item1{
        background-color: #20a0ff;
      }
      .item2{
        background-color: #13cc66;
      }
      .item3{
        background-color: #f7ba2a;
      }
      .item4{
        background-color: #ff4949;
      }
      .echarts{
        height: 300px;
        width: 100%;
      }
  }

}

</style>


