<template>
  <div class="home">
    <Tag></Tag>
  </div>
</template>

<script>
// @ is an alias to /src
import Tag from '@/components/tag/index.vue'

export default {
  components: {
    Tag
  }
}
</script>

<style scoped>
.home {
  background: inherit;
}
.container {
  justify-content:center;
}
</style>
