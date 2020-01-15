<template>
  <div class="articleContent" ref="articleContent">
    <Title></Title>
  </div>
</template>

<script>
import marked from 'marked'
import Prism from 'prismjs'
import Title from './title'
// import '@/assets/css/typo.css'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return require('highlight.js').highlightAuto(code).value
  }
})
export default {
  props: ['msg'],
  data () {
    return {
      markedMsg: ''
    }
  },
  components: {
    Title
  },
  methods: { },
  mounted () {
    this.markedMsg = marked(this.msg)
    this.$refs.articleContent.innerHTML += this.markedMsg
    Prism.highlightAll()
  }
}
</script>

<style>
.articleContent {
  margin-top: 5px;
  background: #fff;
  padding: 26px;
}
.articleContent h4,.articleContent h3,.articleContent h2 {
  margin: 20px 0;
}

blockquote {
  border-left: 5px solid #ddd;
  color: #666;
  padding: 0 15px;
  font-size: 16px;
  background: #f8f8f8;
}
blockquote p {
  padding: 5px 0;
}
pre {
  background: #f8f8f8;
  padding: 18px 15px 12px;
  border: none !important;
  box-shadow: 0 0 0 0 !important;
}
.articleContent ul li {
  list-style-type: disc;
  margin-left: 18px;
}
.articleContent div > p {
  margin: 20px 0;
  font-size: 17px;
  color: #666;
}
p {
  line-height: 26px;
  padding-top: 3px;
}
code {
   color: #e07676;
   font-size: 16px;
   font-family: Menlo,Monaco,Consolas,Courier New,monospace;
}
::selection {
  background: #007fff !important;
  color: #fff;
}
</style>
