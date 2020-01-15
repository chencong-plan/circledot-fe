<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from './components/header/index.vue'
@Component({
  components: {
    Header
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f4f5f5;
  height: 100vh;
}
body {
  height: 100vh;
  background: #f4f5f5;
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
.emoji-mart .emoji-mart-emoji{
  padding: 4px !important;
}
.emoji-mart {
  position: absolute;
  top: 100%;
  margin-top: 8px;
  left: 60px;
}
</style>
