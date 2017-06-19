<template>
<div>
<v-crumbs cTitle="文本编辑器"></v-crumbs>

<el-alert title="所有编辑器插件：vue-quill-editor" type="success" :closable="false"></el-alert>

<quill-editor ref="myTextEditor"
              v-model="note.content"
              :config="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)">

</quill-editor>
</div>
</template>

<script>
import vCrumbs from '../common/Crumbs.vue'
// import quillEditor from '../common/vue-quill-editor.vue'

export default {
    components:{
      vCrumbs,
      //quillEditor
    },
    methods: {
      onEditorBlur(editor) {
            console.log('editor blur!', editor)
        },
        onEditorFocus(editor) {
            console.log('editor focus!', editor)
        },
        onEditorReady(editor) {
            console.log('editor ready!', editor)
        }
      },
    }
</script>

