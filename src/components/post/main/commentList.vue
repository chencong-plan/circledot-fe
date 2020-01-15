<template>
  <div class="commentList">
    <ul>
      <li v-for="(comment,index) in commentList" :key=index>
        <div class="user">
          <avatar class="avatar" :src="comment.avatar"></avatar>
          <span>{{ comment.username }}</span>
        </div>
        <div class="content">
           <mavon-editor ref="md" v-model="comment.content"
           :toolbarsFlag=falseFlag
           :subfield=falseFlag defaultOpen="preview"
           previewBackground="#fff" :boxShadow=falseFlag
           ishljs=trueFlag
           />
        </div>
        <div class="operate">
          <div class="operateWrap">
            <div class="agree">
              <svg data-v-a380385a="" aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" class="icon like-icon"><g data-v-a380385a="" fill="none" fill-rule="evenodd"><path data-v-a380385a="" d="M0 0h20v20H0z"></path> <path data-v-a380385a="" stroke="#8A93A0" stroke-linejoin="round" d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z"></path></g></svg>
              <span v-if="comment.agree !== 0 ">{{ comment.agree }}</span>
            </div>
            <div class="replay">
              <svg data-v-a380385a="" aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" class="icon comment-icon"><g data-v-a380385a="" fill="none" fill-rule="evenodd"><path data-v-a380385a="" d="M0 0h20v20H0z"></path> <path data-v-a380385a="" stroke="#8A93A0" stroke-linejoin="round" d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z"></path></g></svg>
              <span>回复</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import avatar from '@/components/common/avatar'
import 'mavon-editor/dist/css/index.css'
export default {
  props: ['commentList'],
  data () {
    return {
      falseFlag: false,
      trueFlag: true
    }
  },
  components: {
    avatar
  }
}
</script>

<style scoped>
.commentList {
  margin-left: 80px;
}
ul li {
  /* border: 1px solid red; */
  margin: 20px 0 25px;
  list-style: none;
}
.user {
  display: flex;
  align-items: center;
}
.user .avatar {
  margin-right: 12px;
}
.content {
  margin-left: 32px;
}
.operate {
  display: flex;
  justify-content: flex-end;
  margin:0 25px 0 25px;
  padding-bottom: 12px;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #f2ecec;
}
.operateWrap {
  width: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.operate span {
  padding-left: 8px;
  line-height: 16px;
}
.operate .agree{
  margin-right: 20px;
}
.operate .agree, .operate .replay {
  display: flex;
  align-items: center;
}
</style>
