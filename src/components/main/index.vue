<template>
  <div class="main">
    <Title></Title>
    <Content></Content>
  </div>
</template>

<script>
import Title from './title.vue'
import Content from './content.vue'
export default {
  data () {
    return {}
  },
  components: {
    Title,
    Content
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
