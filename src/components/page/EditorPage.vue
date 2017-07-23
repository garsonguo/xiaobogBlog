<template>
  <div class="container">
    <v-crumbs cTitle="文本编辑器"></v-crumbs>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-card style="margin-bottom:20px;" title="文本编辑器——百度Ueditor" type="success" :closable="false">
          百度文本编辑器
        </el-card>
      </el-col>
      <el-col :span="24">
        <div class="editor-container">
          <UE :defaultMsg=defaultMsg :config=config ref="ue"></UE>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import vCrumbs from '../common/Crumbs.vue'
import UE from '../common/UEeditor'

export default {
    data(){
      return{
        defaultMsg: '这里是UE测试',
        config: {
          initialFrameWidth: null,
          initialFrameHeight: 350
        }
      }
    },
    components:{
      vCrumbs,UE
    },
    mounted(){
    },
    methods: {
      getUEContent() {
        let content = this.$refs.ue.getUEContent();
        this.$notify({
          title: '获取成功，可在控制台查看！',
          message: content,
          type: 'success'
        });
        console.log(content)
      }
    }
}
</script>

