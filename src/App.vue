<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/header/index.vue'
import Main from './components/main/index.vue'
@Component({
  components: {
    Header,
    Main
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background: #f4f5f5;
  padding-top: 20px;
  height: 100vh;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 1250px;
  display: flex;
  margin: 0 auto;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
