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
  props: ['articleList'],
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
