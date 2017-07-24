<template>
  <div class="container">
    <v-crumbs cTitle="form表单"></v-crumbs>
    <el-card style="margin-bottom:30px;">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="审批人">
          <el-input v-model="formInline.spr" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="formInline.region" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          Label->左对齐
          <hr class='line'>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="姓名">
               <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
               <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
               <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="活动类型">
               <el-input v-model="formLabelAlign.type1"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          Label->右对齐
          <hr class='line'>
          <el-form label-width="80px" :model="formLabelAlign">
            <el-form-item label="姓名">
               <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
               <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
               <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
            <el-form-item label="活动类型">
               <el-input v-model="formLabelAlign.type1"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          Label->上对齐
          <hr class='line'>
          <el-form :label-position="labelPosition1" label-width="80px" :model="formLabelAlign">
            <el-form-item label="姓名">
               <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
               <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
               <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
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
      labelPosition:'left',
      labelPosition1:'top',
      formInline:{
        spr:'',
        region:''
      },
      formLabelAlign: {
          name: '',
          region: '',
          type: '',
          type1:''
        }
    }
  }
}
</script>

