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
      <el-col style="margin-top:20px;" :span="6">
        <el-card class="box-card">
          折叠面板
          <hr class='line'>
          <el-collapse accordion>
            <el-collapse-item>
              <template slot="title">
                一致性 Consistency<i class="header-icon el-icon-information"></i>
              </template>
              <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
              <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback">
              <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
              <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>

          </el-collapse>
        </el-card>
      </el-col>
      <el-col style="margin-top:20px;" :span="12">

        <el-card class="box-card">
          基本表格
          <hr class='line'>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column  prop="date"  label="日期"></el-table-column>
            <el-table-column  prop="name"  label="姓名"></el-table-column>
            <el-table-column  prop="address"  label="地址"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col style="margin-top:20px;" :span="6">

        <el-card class="box-card">
          Tab标签页
        <hr class='line'>
          <el-tabs  v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="放假行程" name="first">
              <el-steps :space="100" direction="vertical" :active="1">
                <el-step title="第一天" description='长线游：黄鹤楼+户部巷等'></el-step>
                <el-step title="第二天" description='短线游：汉街逛吃逛吃'></el-step>
                <el-step title="第三天" description='无聊游：随便走走'></el-step>
              </el-steps>
            </el-tab-pane>
            <el-tab-pane label="消息中心" name="second">
              <el-progress style="margin-bottom:10px;" :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
              <el-progress style="margin-bottom:10px;" :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
              <el-progress style="margin-bottom:10px;" :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
              <el-progress style="margin-bottom:10px;" :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
              <el-rate style="margin-bottom:10px;"
                v-model="fs"
                disabled
                show-text
                text-color="#ff9900"
                text-template="{value}">
              </el-rate>
              <el-switch
                v-model="value1"
                on-text=""
                off-text="">
              </el-switch>
              <el-switch
                v-model="value2"
                on-color="#13ce66"
                off-color="#ff4949">
              </el-switch>
            </el-tab-pane>
          </el-tabs>
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
  data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区'
          }],
          activeName: 'first',
          fs:'3.7',
          value1:'true',
          value2:'true'
        }
      },
  mounted(){

  },
  components: {
    vCrumbs,barChart,lineChart
  },
  methods:{
    handleClick(tab, event) {
        console.log(tab, event);
      }
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


