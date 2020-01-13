<template>
  <div class="home">
    <Navigation></Navigation>
    <div class="container">
      <Main></Main>
      <Right></Right>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/home/Navigation'
import Main from '@/components/home/main/index.vue'
import Right from '@/components/home/right/index.vue'

export default {
  data () {
    return { }
  },
  components: {
    Navigation,
    Main,
    Right
  }
}
</script>

<style scoped>
.home {
  background: inherit;
  border-top: 1px solid transparent;
}
.container {
  justify-content:center;
  margin-top: 130px;
}
</style>
