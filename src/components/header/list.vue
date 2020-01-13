<template>
  <div class="list">
    <ul>
      <li v-for="(item,index) in list" :key=index :class="{ active: activeItem == item.name }" @click="changeActive(item.name)">
        <router-link :to=item.path>{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeItem: '首页',
      list: [
        { name: '首页', path: '/' },
        { name: '分类', path: '/category' },
        { name: '标签', path: '/tag' },
        { name: 'CSS动画库', path: '/animation' }
      ]
    }
  },
  components: {},
  methods: {
    changeActive (name) {
      this.activeItem = name
    }
  },
  created () {
    this.activeItem = this.$route.path
  }
}
</script>

<style scoped>
ul {
  display: flex;
}
li {
  list-style: none;
  line-height: 60px;
  padding: 0 16px;
  font-size: 17px;
  cursor: pointer;
}
li.active {
  color: #067ff9;
}
a {
  color: inherit;
}
</style>
