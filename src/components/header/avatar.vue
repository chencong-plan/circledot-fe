<template>
  <div class="avatar">
    <button class="button">写文章</button>
    <img src="@/assets/avatar1.jpg" alt="" width=45px height=45px>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.avatar {
  width: 280px;
  height: 60px;
  margin-left: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.avatar .button {
  background: #007fff;
  color: #fff;
  padding: 7px 22px;
  border: none;
  font-size: 14px;
  border-radius: 3px;
  cursor: pointer;
}
.avatar img {
  border-radius: 50%;
  justify-content: flex-end;
  cursor: pointer;
}
</style>
