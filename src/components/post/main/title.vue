<template>
  <div class="title">
    <div class="avatar">
      <img src="@/assets/avatar1.jpg" width=45 height=45 alt="">
      <div class="right">
        <span class="authName">{{ titleData.author }}</span>
        <div class="info">
          <span class="date">{{ titleData.date }}</span>
          <span>
            阅读量
            <span>({{ titleData.read }})</span>
          </span>
        </div>
      </div>
      <div class='follow'>关注</div>
    </div>
    <h1>{{ titleData.title }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleData: {
        author: '千与千寻',
        date: '2019-12-18 10:32:10',
        read: '234',
        title: '如何通过K8S编排应用如何通过K8S编排应用如何通'
      }
    }
  }
}
</script>

<style scoped>
.title {
  text-align: left;
  display: flex;
  text-align: left;
  flex-direction: column;
}
.title .avatar {
  display: flex;
  align-items: center;
  position: relative;
}
.title .right {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 12px;
}
.title .img {
  border-radius: 50%;
}
.info {
  margin-top: 2px;
}
.authName {
  font-size: 15px;
  font-weight: bold;
}
.date {
  margin-right: 28px;
}
.title h1 {
  margin: 25px 0 10px;
}
.follow {
  position: absolute;
  border: 1px solid #6cbd45;
  color: #6cbd45;
  right: 20px;
  font-size: 15px;
  padding: 3px 14px;
  border-radius: 2px;
  cursor: pointer;
}
</style>
