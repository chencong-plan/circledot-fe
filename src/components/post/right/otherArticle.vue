<template>
  <div class="otherArticle">
    <div class="title">作者其他文章</div>
    <div class="articleList">
      <ul>
        <li v-for="(article,index) in articleList" :key=index @click="jumpPost(article)">
          <div>{{ article.title }}</div>
          <support :article=article></support>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import support from '@/components/common/support'
export default {
  data () {
    return {
      articleList: [
        {
          title: '聊聊Vue.js组件间通信',
          agree: 383,
          comment: 33
        },
        {
          title: 'Vuex源码解析',
          agree: 383,
          comment: 33
        },
        {
          title: '说说VNode节点(Vue.js实现)',
          agree: 383,
          comment: 33
        },
        {
          title: '虚拟DOM',
          agree: 383,
          comment: 33
        }
      ]
    }
  },
  components: {
    support
  },
  methods: {
    jumpPost (article) {
      // console.log(article)
      // this.$router.push({ name: 'post', params: { id: article.id } })

      let routeUrl = this.$router.resolve({
        name: 'post',
        params: { id: article.id }
      })
      window.open(routeUrl.href, '_blank')
    }
  }
}
</script>

<style scoped>
.otherArticle {
  margin-top: 20px;
  background: #fff;
  padding-bottom: 12px;
}
.title {
  padding: 12px 20px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
}
ul li {
  list-style: none;
  padding: 12px 20px 0;
  cursor: pointer;
}
ul li:hover {
  background-color: rgba(0,0,0,.01);
}
</style>
