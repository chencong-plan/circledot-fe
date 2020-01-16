<template>
  <div class="main">
    <Content :msg="msg"></Content>
    <Comment></Comment>
    <Related></Related>
    <support></support>
  </div>
</template>

<script>
import Content from './content.vue'
import Comment from './comment/comment.vue'
import Related from './related.vue'
import Support from './support.vue'
export default {
  props: ['msg'],
  data () {
    return {}
  },
  components: {
    Content,
    Comment,
    Related,
    Support
  }
}
</script>

<style scoped>
.main {
  width: 940px;
  margin-bottom: 30px;
  position: relative;
}
.wrap {
  background: #fff;
  padding: 20px 26px 50px;
}
</style>
