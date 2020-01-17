<template>
  <div class="main">
    <Article :msg="msg"></Article>
    <Comment></Comment>
    <Related></Related>
    <support></support>
  </div>
</template>

<script>
import Article from './article.vue'
import Comment from './comment/comment.vue'
import Related from './related.vue'
import Support from './support.vue'
export default {
  props: ['msg'],
  data () {
    return {}
  },
  components: {
    Article,
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
