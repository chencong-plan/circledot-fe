<template>
  <div class="write">
    <div class="container">
      <mavon-editor :toolbars="markdownOption" v-model="handbook"/>
    </div>
  </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'
export default {
  components: {
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
