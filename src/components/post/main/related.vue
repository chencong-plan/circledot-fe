<template>
  <div class="related" ref="related">
    <div class="title">
      <span>相关推荐</span>
    </div>
    <article-list :articleList="articleList"></article-list>
  </div>
</template>

<script>
import marked from 'marked'
import Prism from 'prismjs'
import articleList from '../../common/articleList'
// import '@/assets/css/typo.css'
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
  },
  methods: { },
  mounted () {
    console.log(this.msg)
    this.markedMsg = marked(this.msg)
    this.$refs.content.innerHTML = this.markedMsg
    Prism.highlightAll()
  }
}
</script>

<style scoped>
.related {
  margin-top: 30px;
  background: #fff;
  border-radius: 2px;
}
.title {
  padding: 10px 26px;
  border-bottom: 1px solid #eee;
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  color: #a9a9a9;
}
</style>
