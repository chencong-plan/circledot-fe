<template>
  <div class="rightContent">
    <div class="content" ref="content">
      主页right组件
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data () {
    return {}
  },
  created () {
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style scoped>
.rightContent {
  margin-left: 26px;
  width: 280px;
  padding: 20px;
  text-align: left;
  background: #fff;
}
.rightContent .content {
  font-size: 17px;
}
.rightContent .content > ul {
  margin-top: 10px;
}
.rightContent ul li {
  list-style-type: disc;
  margin-left: 18px;
  font-weight: normal;
  line-height: 1.6;
  font-size: 16px;
}
.rightContent .content > ul > li {
  font-weight: bold;
}
a {
  cursor: pointer;
  color: #000;
}
a.active {
  color: #007fff;
}
</style>
