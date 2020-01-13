<template>
  <div class="main">
    <ul>
      <li class="article" v-for="(article,index) in articleList" :key=index>
        <div class="describe">
          <a class="author text">{{ article.author }}</a>
          <span class="time text">{{ article.time }}</span>
          <a class="tag text">{{ article.tag }}</a>
        </div>
        <a class="title" @click="jumpPost(article)">{{ article.title }}</a>
        <div class="support">
          <div class="agree">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 16 15">
              <path
                fill-rule="evenodd"
                d="M2.874 6.044V15h-1.73C.513 15 0 14.382 0 13.624V7.529c0-.79.535-1.485 1.143-1.485h1.731zM7.607 1.25C7.72.507 8.344-.013 9.03 0c.98.019 1.563.833 1.766 1.235.37.735.38 1.946.126 2.724-.23.704-.761 1.629-.761 1.629h3.982c.42 0 .811.206 1.072.563a1.5 1.5 0 0 1 .232 1.272l-1.801 6.513c-.164.627-.707 1.064-1.32 1.064H4.5V5.898C6.299 5.51 7.404 2.59 7.607 1.249z"
              />
            </svg>
            {{ article.agree }}
          </div>
          <div class="comment">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 14 13">
              <path fill="#B2BAC2" fill-rule="evenodd" d="M14 0v9.23H8.815L3.37 13V9.23H0V0z" />
            </svg>
            {{ article.comment }}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
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

  },
  methods: {
    jumpPost (article) {
      console.log(article)
      this.$router.push({ name: 'post', params: { id: article.id } })
    }
  }
}
</script>

<style scoped>
.main {
  background: #fff;
  width: 940px;
  padding: 20px 26px;
  margin-bottom: 30px;
  position: relative;
}
ul {
  text-align: left;
}
.article {
  margin-bottom: 25px;
  cursor: pointer;
}
.article .describe {
  margin-bottom: 4px;
}
.article .describe .text {
  margin-right: 10px;
  font-size: 14px;
  color: #afaaaa;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
.support {
  display: flex;
  margin-top: 8px;
  font-size: 15px;
}
.support div {
  /* border: 1px solid #dcd8d8; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  margin-right: 20px;
}
.support svg {
  fill: #aaa;
  margin-right: 5px;
}

</style>
