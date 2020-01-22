<template>
  <div class="container">
    <div class=title>
      <span>当前一个有{{ tagList.length }}个标签</span>
    </div>
    <ul class=tagList>
      <li v-for="(tag,index) in tagList" :key=index :style="tag.style">{{ tag.name }}
        <span>{{ tag.num }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tagList: [
        {
          name: 'javascript',
          num: 2
        },
        {
          name: 'css',
          num: 2
        },
        {
          name: 'Promise',
          num: 3
        },
        {
          name: 'cookie',
          num: 5
        },
        {
          name: 'http',
          num: 10
        },
        {
          name: 'linux',
          num: 123
        },
        {
          name: 'Vue',
          num: 13
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  background: #fff;
  height: 300px;
  flex-direction: column;
}
ul {
  padding: 15px 15px;
  flex-direction: row;
  flex-wrap: wrap;
}
ul li {
  list-style: none;
  border-radius: 10px;
  float: left;
  margin: 10px 5px;
  padding: 3px 10px;
  color: #1890ff;
  border: 1px solid #007fff;
  position: relative;
}
ul li span {
  position: absolute;
  border: 1px solid red;
  padding: 0px 8px;
  border-radius: 6px;
}
</style>
