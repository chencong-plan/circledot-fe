<template>
  <div id="app">
    <Header></Header>
    <div class='routerWrap'>
      <router-view></router-view>
    </div>
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
.routerWrap {
  margin-top: 80px;
  background: inherit;
}
.container {
  width: 1250px;
  display: flex;
  margin: 0 auto;
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
  z-index: 1600;
}
.v-note-wrapper {
  border: none !important;
  min-height: 50px !important;
}
.v-show-content.scroll-style.scroll-style-border-radius {
  padding: 0 0 !important;
}
</style>
