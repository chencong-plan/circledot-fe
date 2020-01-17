<template>
  <div>
    <ul>
      <li class="article" v-for="(article,index) in articleList" :key="index" @click="jumpPost(article)">
        <div class="describe">
          <a class="author text">{{ article.author }}</a>
          <span class="time text">{{ article.time }}</span>
          <a class="tag text">{{ article.tag }}</a>
        </div>
        <a class="title">{{ article.title }}</a>
        <support :article=article></support>
      </li>
    </ul>
  </div>
</template>

<script>
import support from './support.vue'
export default {
  props: ['articleList'],
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
ul {
  text-align: left;
}
ul li {
  list-style: none;
}
.article {
  padding: 20px 26px;
  cursor: pointer;
  border-bottom: 1px solid #f3f0f0;
}
.article:hover {
 background-color: rgba(0,0,0,.01);
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
</style>
