<template>
  <div class="main">
    <article-list :articleList="articleList"></article-list>
  </div>
</template>

<script>
import articleList from '@/components/common/articleList'
export default {
  props: ['msg'],
  data () {
    return {
      articleList: [
        { id: 1, title: '字节跳动面试官: 实现一个大文件上传和断点连续', time: '49分钟前', author: 'chencong', tag: 'javascript', agree: 144, comment: 32 },
        { id: 2, title: '你可能不是那么了解CSS Background', time: '两小时前', author: '千与千寻', tag: 'java', agree: 144, comment: 32 },
        { id: 3, title: '谁告诉你Flutter会干掉原生开发', time: '三小时前', author: 'circledot', tag: 'flutter', agree: 144, comment: 32 },
        { id: 4, title: '字节跳动面试官: 实现一个大文件上传和断点连续', time: '49分钟前', author: 'chencong', tag: 'javascript', agree: 144, comment: 32 },
        { id: 5, title: '你可能不是那么了解CSS Background', time: '两小时前', author: '千与千寻', tag: 'java', agree: 144, comment: 32 },
        { id: 6, title: '谁告诉你Flutter会干掉原生开发', time: '三小时前', author: 'circledot', tag: 'flutter', agree: 144, comment: 32 },
        { id: 7, title: '字节跳动面试官: 实现一个大文件上传和断点连续', time: '49分钟前', author: 'chencong', tag: 'javascript', agree: 144, comment: 32 },
        { id: 8, title: '你可能不是那么了解CSS Background', time: '两小时前', author: '千与千寻', tag: 'java', agree: 144, comment: 32 },
        { id: 9, title: '谁告诉你Flutter会干掉原生开发', time: '三小时前', author: 'circledot', tag: 'flutter', agree: 144, comment: 32 }
      ]
    }
  },
  components: {
    articleList
  }
}
</script>

<style scoped>
.main {
  background: #fff;
  width: 940px;
  margin-bottom: 30px;
  position: relative;
}
</style>
