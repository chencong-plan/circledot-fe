<template>
  <div class="commentInput" @click.stop=clickComentInput>
    <img v-if="avatar" src="@/assets/avatar1.jpg" alt width="45px" height="45px" />
    <div class="input">
      <div class="top">
        <div contenteditable="true" placeholder="输入评论..." class="inputText" ref="ta" type="text"></div>
      </div>
      <div class="bottom">
        <div class="left">
          <svg @click=showPicker xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
            <g fill="none" fill-rule="evenodd">
              <path d="M1 1h20v20H1z" />
              <path
                fill="#027FFF"
                fill-rule="nonzero"
                d="M11 18.438a7.438 7.438 0 1 0 0-14.876 7.438 7.438 0 0 0 0 14.876zm0 1.062a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17zM7.812 9.937a1.062 1.062 0 1 0 0-2.124 1.062 1.062 0 0 0 0 2.125zm6.375 0a1.063 1.063 0 1 0 0-2.125 1.063 1.063 0 0 0 0 2.125zM11 16.232a3.27 3.27 0 0 0 3.27-3.27H7.73a3.27 3.27 0 0 0 3.27 3.27z"
              />
            </g>
          </svg>
          <span @click=showPicker>表情</span>
          <Picker ref='picker' v-show="pickerShow" :showSearch="showSearch" @select="addEmoji"/>
        </div>
        <div class="right">
          <span>支持MarkDown语法</span>
          <el-button type="primary" size="medium" @click="submitComment">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Picker } from 'emoji-mart-vue'
export default {
  props: ['avatar'],
  data () {
    return {
      pickerShow: false,
      showSearch: false
    }
  },
  components: {
    Picker
  },
  methods: {
    showPicker (e) {
      e.stopPropagation()
      this.pickerShow = !this.pickerShow
    },
    addEmoji (emoji, e) {
      console.log(this.$refs.ta.innerText)
      this.$refs.ta.innerText += emoji.native
    },
    submitComment () {
      console.log(this.$refs.ta.innerText)
      if (!this.$refs.ta.innerText.trim()) {
        this.$message({
          message: '评论内容不可为空哦~',
          type: 'warning'
        })
      } else {
        this.$emit('submit', this.$refs.ta.innerText)
        this.$refs.ta.innerText = ''
      }
    },
    clickComentInput (e) {
      if (this.pickerShow) {
        this.pickerShow = false
      }
    }
  },
  mounted () {
    // 点击页面其他地方,表情包隐藏
    document.addEventListener('click', (e) => {
      if (this.pickerShow) {
        this.pickerShow = false
      }
    })

    // 点击表情包,表情包不隐藏
    let emojiMart = document.getElementsByClassName('emoji-mart')
    for (let emoji of emojiMart) {
      emoji.addEventListener('click', (e) => {
        console.log('bbbbbbbbbbbb')
        e.stopPropagation()
      })
    }
  }
}
</script>

<style scoped>
.commentInput {
  background: #fafbfc;
  display: flex;
  padding: 24px 20px 15px;
  border-radius: 2px;
  margin-top: 15px;
}
.commentInput .input{
  flex-grow: 1;
}
.commentInput .top {
  display: flex;
}
.commentInput img {
  border-radius: 50%;
  justify-content: flex-end;
  cursor: pointer;
  margin-right: 15px;
}

.commentInput .bottom {
  margin-top: 10px;
}
.commentInput .bottom .left {
  display: flex;
  align-items: center;
  float: left;
  position: relative;
  cursor: pointer;
}
.commentInput .bottom .right {
  float: right;
}
.commentInput .bottom span {
  color: #6190e8;
  padding: 0 15px 0 4px;
}
.inputText {
  padding: 12px 12px 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid #dedede;
  border-radius: 3px;
  flex-grow: 1;
  border-radius: 3px;
  overflow-y: hidden;
  min-height: 40px;
  font-family: sans-serif;
  background: #fff;
}
.commentInput .inputText:focus {
  border: 1px solid #007fff;
}
</style>
