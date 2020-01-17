<template>
  <div class="aboutAuthor">
    <div class="title">关于作者</div>
    <div class="user">
      <avatar :src="avatar" size="50px"></avatar>
      <div class="userInfo">
        <span class="name">{{ username }}</span>
        <span class="tag">{{ tag }}</span>
      </div>
    </div>
    <div class="honor">
      <div class="agree"><svg data-v-77c77154="" data-v-8578ae30="" xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" class="zan"><g data-v-77c77154="" data-v-8578ae30="" fill="none" fill-rule="evenodd" transform="translate(0 .57)"><ellipse data-v-77c77154="" data-v-8578ae30="" cx="12.5" cy="12.57" fill="#E1EFFF" rx="12.5" ry="12.57"></ellipse> <path data-v-77c77154="" data-v-8578ae30="" fill="#7BB9FF" d="M8.596 11.238V19H7.033C6.463 19 6 18.465 6 17.807v-5.282c0-.685.483-1.287 1.033-1.287h1.563zm4.275-4.156A1.284 1.284 0 0 1 14.156 6c.885.016 1.412.722 1.595 1.07.334.638.343 1.687.114 2.361-.207.61-.687 1.412-.687 1.412h3.596c.38 0 .733.178.969.488.239.317.318.728.21 1.102l-1.628 5.645a1.245 1.245 0 0 1-1.192.922h-7.068v-7.889c1.624-.336 2.623-2.866 2.806-4.029z"></path></g></svg>获得点赞 12343</div>
      <div class="read"><svg data-v-77c77154="" data-v-8578ae30="" width="25" height="25" viewBox="0 0 25 25" class="icon stat-view-icon"><g data-v-77c77154="" data-v-8578ae30="" fill="none" fill-rule="evenodd"><circle data-v-77c77154="" data-v-8578ae30="" cx="12.5" cy="12.5" r="12.5" fill="#E1EFFF"></circle> <path data-v-77c77154="" data-v-8578ae30="" fill="#7BB9FF" d="M4 12.5S6.917 7 12.75 7s8.75 5.5 8.75 5.5-2.917 5.5-8.75 5.5S4 12.5 4 12.5zm8.75 2.292c1.208 0 2.188-1.026 2.188-2.292 0-1.266-.98-2.292-2.188-2.292-1.208 0-2.188 1.026-2.188 2.292 0 1.266.98 2.292 2.188 2.292z"></path></g></svg>文章被阅读 1233</div>
    </div>
  </div>
</template>

<script>
import avatar from '@/components/common/avatar'
export default {
  data () {
    return {
      avatar: 'https://mirror-gold-cdn.xitu.io/16e2cf9bc7ea756c250?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
      username: '千与千寻酱',
      tag: '前端工程师@xiaoyu'
    }
  },
  components: {
    avatar
  }
}
</script>

<style scoped>
.aboutAuthor {
  background: #fff;
}
.title {
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
}
.user {
  padding: 15px 15px;
  display: flex;
  align-items: center;
}
.user .userInfo {
  display: flex;
  flex-direction: column;
  font-size: 16px;
  line-height: 30px;
  margin-left: 15px;
}
.user .userInfo .name {
  font-weight: bold;
}
.user .userInfo .tag {
  color: #72777b;
}
.honor {
  padding: 0px 20px 5px;
}
.honor > div {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}
.honor > div svg {
  margin-right: 10px;
}
</style>
