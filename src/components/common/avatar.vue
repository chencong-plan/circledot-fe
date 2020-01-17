<template>
    <img :src="src" alt="" :width=size :height=size>
</template>

<script>
export default {
  props: ['src', 'size']
}
</script>

<style scoped>
img {
  border-radius: 50%;
  justify-content: flex-end;
  cursor: pointer;
}
</style>
