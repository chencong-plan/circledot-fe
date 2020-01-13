<template>
  <div class="main">
    <Title></Title>
    <Content :msg="msg"></Content>
    <support></support>
  </div>
</template>

<script>
import Title from './title.vue'
import Content from './content.vue'
import Support from './support.vue'
export default {
  props: ['msg'],
  data () {
    return {}
  },
  components: {
    Title,
    Content,
    Support
  }
}
</script>

<style scoped>
.main {
  background: #fff;
  width: 940px;
  padding: 20px 26px 50px;
  margin-bottom: 30px;
  position: relative;
}
</style>
