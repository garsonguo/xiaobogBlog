<template>
  <div class="container">
    <v-crumbs cTitle="表格"></v-crumbs>
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
          <el-button @click="dialogFormVisible = true" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-dialog title="表单模态框" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="日期" :label-width="formLabelWidth">
              <el-date-picker v-model="form.date" type="date" :picker-options="pickerOptions1"></el-date-picker>
            </el-form-item>
            <el-form-item label="省份" :label-width="formLabelWidth">
              <el-select v-model="form.value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="市区" :label-width="formLabelWidth">
              <el-input v-model="form.resource" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="地址" :label-width="formLabelWidth">
              <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="form.desc">
            </el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
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
      options: [{
          value: '选项1',
          label: '山西省'
        }, {
          value: '选项2',
          label: '湖北省'
        }, {
          value: '选项3',
          label: '河北省'
        }, {
          value: '选项4',
          label: '湖南省'
        }, {
          value: '选项5',
          label: '江西省'
        }],
      pickerOptions1: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
      dialogFormVisible:false,
      currentPage1:1,
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
        }],
        form:{
          name: '',
          resource: '',
          desc: '',
          value:''
        },
        formLabelWidth: '120px'
    }
  },
  methods:{
    handleSizeChange(){
      console.log(111);
    },
    handleCurrentChange(){
      console.log(222);
    }
  }
}
</script>

