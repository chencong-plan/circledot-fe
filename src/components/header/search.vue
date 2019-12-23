<template>
  <div class="search">
    <input type="text" placeholder="搜索关键字" />
    <img src="@/assets/search.svg" alt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.search {
  padding: 7px 10px 7px 12px;
  border: none;
  border-radius: 3px;
  background: #f6f3f38f;
  display: flex;
  align-items: center;
  margin-left: 230px;
}
input {
  border: none;
  font-size: 14px;
  width: 140px;
  outline: none;
  background: transparent;
}
img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
