<template>
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
</template>

<script>
export default {
  props: ['article']
}
</script>

<style scoped>
.support {
  display: flex;
  margin-top: 6px;
  font-size: 15px;
  color: #b2bac2;
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
  fill: #b2bac2;
  margin-right: 5px;
}

</style>
