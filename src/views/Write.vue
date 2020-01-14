<template>
  <div class="write">
    <div class="container">
      <mavon-editor ref="md" v-model="handbook"
        @save=saveArticle @imgAdd="imgAdd" />
    </div>
  </div>
</template>

<script>
// import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  data () {
    return {
      handbook: ''
    }
  },
  components: {
    // mavonEditor
  },
  methods: {
    saveArticle (obj, render) {
      console.log(obj, 'articel')
      console.log(render)
    },
    imgAdd (pos, $file) {
      console.log(pos, $file)
      var formdata = new FormData()
      formdata.append('image', $file)
      // 将formdata 上传到服务器
      this.$refs.md.$img2Url(pos, 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1248660256,3129357967&fm=26&gp=0.jpg')
    }
  }
}
</script>

<style scoped>
.write {
  background: inherit;
  border-top: 1px solid transparent;
}
.container {
  justify-content:center;
  margin-top: 80px;
  height: calc(100vh - 120px);
}
.v-note-wrapper.markdown-body.shadow {
  width: 100%;
}
</style>
