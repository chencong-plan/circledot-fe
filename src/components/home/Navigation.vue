<template>
  <div class="nav">
    <ul class="container">
      <li v-for="(item,index) in cateList" :key=index
        :class="{active: item == activeItem}"
        @click="changeCate(item)">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cateList: ['推荐', '后端', '随笔', '安卓', 'IOS', '人工智能'],
      activeItem: '推荐'
    }
  },
  methods: {
    changeCate (item) {
      this.activeItem = item
    }
  }
}
</script>

<style scoped>
.nav {
  background: #fff;
  border-top: 1px solid #e6dfdf;
  height: 50px;
  position: fixed;
  width: 100%;
  top: 60px;
  z-index: 10;
}
.container {
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 5px;
}
ul li {
  margin-right: 30px;
  cursor: pointer;
}
ul li.active {
  color: #007fff;
}
</style>
