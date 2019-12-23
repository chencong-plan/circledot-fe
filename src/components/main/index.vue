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
    console.log(Content)
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
  padding: 20px;
}
</style>
