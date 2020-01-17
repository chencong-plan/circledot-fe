<template>
  <div class="rightContent">
    <about-author></about-author>
    <Content :msg="msg"></Content>
  </div>
</template>

<script>
import aboutAuthor from './aboutAuthor.vue'
import Content from './content.vue'
export default {
  props: ['msg'],
  components: {
    aboutAuthor,
    Content
  }
}
</script>

<style scoped>
.rightContent {
  margin-left: 26px;
  width: 260px;
  text-align: left;
}
</style>
