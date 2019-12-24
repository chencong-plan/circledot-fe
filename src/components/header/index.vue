<template>
  <div class="headerWrap">
    <div class="container">
      <Logo></Logo>
      <List></List>
      <Search></Search>
      <Avatar></Avatar>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/header/logo.vue'
import List from '@/components/header/list.vue'
import Search from '@/components/header/search.vue'
import Avatar from '@/components/header/avatar.vue'

export default {
  components: {
    Logo,
    List,
    Search,
    Avatar
  }
}
</script>

<style scoped>
.headerWrap {
  width: 100%;
  height: 60px;
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  z-index: 10;
}
.container {
  align-items: center;
}
.list {
  display: flex;
}
.list li {
  list-style:none;
  line-height: 60px;
  padding: 0 16px;
  font-size: 17px;
}
.list li.active {
  color: #067ff9;
}
</style>
