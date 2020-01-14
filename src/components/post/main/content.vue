<template>
  <div class="content" ref="content">
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
    console.log(this.msg)
    this.markedMsg = marked(this.msg)
    this.$refs.content.innerHTML += this.markedMsg
    Prism.highlightAll()
  }
}
</script>

<style>
.content {
  margin-top: 5px;
  text-align: left;
  background: #fff;
  padding: 26px;
}
.content h4,.content h3,.content h2 {
  margin: 20px 0;
}

blockquote {
  border-left: 4px solid #ddd;
  color: #666;
  padding: 0 15px;
  font-size: 16px;
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
.content ul li {
  list-style-type: disc;
  margin-left: 18px;
}
.content div > p {
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

</style>
