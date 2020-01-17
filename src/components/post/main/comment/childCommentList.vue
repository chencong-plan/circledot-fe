<template>
  <div class="childCommentList">
   <ul>
      <li v-for="(comment,index) in commentList" :key=index>
        <div class="user">
          <avatar class="avatar" :src="comment.avatar" size='45px'></avatar>
          <div>
            <span>{{ comment.fromUser }}</span><br>
            <span>回复 &nbsp;<a>{{ comment.targetUser}}</a>:</span>
          </div>
        </div>
        <div class="content">
           <mavon-editor ref="md" v-model="comment.content"
           :toolbarsFlag=falseFlag
           :subfield=falseFlag defaultOpen="preview"
           previewBackground="#f3f3f36e" :boxShadow=falseFlag
           :ishljs=trueFlag
           />
          <div class="operate">
            <div class="time">
              <span>{{ comment.time }}</span>
            </div>
            <div class="operateWrap">
              <div class="agree" @click="agree(index)">
                <svg v-if="!comment.agreeActive" data-v-a380385a="" aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" class="icon like-icon"><g data-v-a380385a="" fill="none" fill-rule="evenodd"><path data-v-a380385a="" d="M0 0h20v20H0z"></path> <path data-v-a380385a="" stroke="#8A93A0" stroke-linejoin="round" d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z"></path></g></svg>
                <svg v-if="comment.agreeActive" data-v-a380385a="" aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" class="icon like-icon"><g data-v-a380385a="" fill="none" fill-rule="evenodd"><path data-v-a380385a="" d="M0 0h20v20H0z"></path> <path data-v-a380385a="" stroke="#37C700" stroke-linejoin="round" d="M5.344 8.833V17H4.072C3.482 17 3 16.424 3 15.716V10.22c0-.739.502-1.387 1.072-1.387h1.272zM10.6 4.166c.106-.693.692-1.179 1.335-1.166.918.018 1.465.777 1.655 1.153.346.686.356 1.816.118 2.542-.215.657-.713 1.52-.713 1.52h3.732c.395 0 .762.193 1.006.526.248.341.33.784.218 1.187l-1.69 6.08c-.153.584-.662.992-1.236.992H7.219V8.504c1.686-.361 3.191-3.086 3.381-4.338z" fill="#37C700" stroke-width=".964"></path></g></svg>
                <span v-if="comment.agree !== 0 ">{{ comment.agree }}</span>
              </div>
              <div class="replay" @click.stop="replay(index, $event)">
                <svg data-v-a380385a="" aria-hidden="true" width="16" height="16" viewBox="0 0 20 20" class="icon comment-icon"><g data-v-a380385a="" fill="none" fill-rule="evenodd"><path data-v-a380385a="" d="M0 0h20v20H0z"></path> <path data-v-a380385a="" stroke="#8A93A0" stroke-linejoin="round" d="M10 17c-4.142 0-7.5-2.91-7.5-6.5S5.858 4 10 4c4.142 0 7.5 2.91 7.5 6.5 0 1.416-.522 2.726-1.41 3.794-.129.156.41 3.206.41 3.206l-3.265-1.134c-.998.369-2.077.634-3.235.634z"></path></g></svg>
                <span>回复</span>
              </div>
            </div>
          </div>
          <comment-input v-show="commentIndex === index" background="#fff" @submit="submitComment"></comment-input>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import avatar from '@/components/common/avatar'
import commentInput from './commentInput'
export default {
  props: ['commentList'],
  data () {
    return {
      falseFlag: false,
      trueFlag: true,
      commentIndex: ''
    }
  },
  components: {
    avatar,
    commentInput
  },
  methods: {
    agree (index) {
      if (this.commentList[index].agreeActive && this.commentList[index].agree > 0) {
        this.commentList[index].agree -= 1
        this.commentList[index].agreeActive = false
      } else {
        this.commentList[index].agree += 1
        this.commentList[index].agreeActive = true
      }
      // 发送到服务器
    },
    replay (index, e) {
      // 添加commentInput组件
      console.log(index)
      this.commentIndex = index
    },
    submitComment (value) {
      console.log(this.commentIndex, this.commentList)
      this.commentList.push({
        avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
        fromUser: '千与千寻',
        agree: 0,
        agreeActive: false,
        targetUser: '聪聪不聪聪',
        content: value,
        time: '刚刚'
      })
      this.commentIndex = ''

      // 发送到服务器
    }
  },
  mounted () {
    document.addEventListener('click', () => {
      this.commentIndex = ''
    })
  }
}
</script>

<style scoped>
.childCommentList {
  background: #fafbfc;
  margin-top: 15px;
  padding: 0px 20px;
  border-top: 1px solid #Fff;
  border-radius: 2px;
}
ul li {
  /* border: 1px solid red; */
  margin: 12px 0;
  list-style: none;
  border-bottom: 1px solid #f2ecec;
}
ul li:last-child {
  border-bottom: none;
}
.user {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 25px;
}
.user .avatar {
  margin-right: 12px;
}
.content {
  margin-left: 52px;
  padding-bottom: 15px;
}
.operate {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  cursor: pointer;
  padding-bottom:  15px;
  color: #8a93a0;
}
.operateWrap {
  align-self: flex-end;
  width: 116px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.operate span {
  line-height: 16px;
}
.operate .agree{
  margin-right: 20px;
}
.operate .agree, .operate .replay {
  display: flex;
  align-items: center;
}
a {
  color: #6190e8;
  cursor: pointer;
}
</style>
