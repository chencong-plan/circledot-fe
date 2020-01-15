<template>
    <img :src="src" alt="" width=40px height=40px>
</template>

<script>
export default {
  props: ['src']
}
</script>

<style scoped>
img {
  border-radius: 45%;
  justify-content: flex-end;
  cursor: pointer;
}
</style>
