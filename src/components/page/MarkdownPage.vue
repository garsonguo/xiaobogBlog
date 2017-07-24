<template>
  <div class="container">
    <v-crumbs cTitle="Markdown编辑器"></v-crumbs>

    <el-row :gutter="20">
      <el-col style="margin-bottom:20px;" :span="24">
        <el-card>
          <vue-markdown class="result-html full-height" :watches="['show','html','breaks','linkify','emoji','typographer','toc']"
                    :source="source" :show="show" :html="html" :breaks="breaks" :linkify="linkify"
                    :emoji="emoji" :typographer="typographer" :toc="toc"
                    toc-id="toc"></vue-markdown>
        </el-card>
      </el-col>

      <el-col :span="24">
        <markdown-editor v-model="source" ref="markdownEditor"></markdown-editor>
      </el-col>
      
    </el-row>
  </div>
</template>

<script>
import vCrumbs from '../common/Crumbs.vue'
import VueMarkdown from 'vue-markdown'
import { markdownEditor }  from 'vue-simplemde'
export default {
  components:{
    vCrumbs,VueMarkdown,markdownEditor
  },
  data(){
    return {
      source:"## nihao",
      show: true,
      html: true,
      breaks: true,
      linkify: true,
      emoji: true,
      typographer: true,
      toc: false
    }
  }
}
</script>

