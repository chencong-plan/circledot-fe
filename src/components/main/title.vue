<template>
  <div class="title">
    <div class="avatar">
      <img src="@/assets/avatar1.jpg" width=45 height=45 alt="">
      <div class="right">
        <span class="authName">千与千寻</span>
        <div class="info">
          <span class="date">2019-12-18 10:32:10</span>
          <span>
            阅读量
            <span>(234)</span>
          </span>
        </div>
      </div>
    </div>
    <h1>如何通过K8S编排应用如何通过K8S编排应用如何通</h1>
  </div>
</template>

<script>
export default {}
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
.authName {
  font-size: 15px;
  font-weight: bold;
}
.date {
  margin-right: 28px;
}
.title h1 {
  margin: 25px 0 32px;
}

</style>
