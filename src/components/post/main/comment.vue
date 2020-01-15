<template>
  <div class="comment">
    <div class="text">评论</div>
    <div class="input">
      <div class="top">
        <img src="@/assets/avatar1.jpg" alt width="45px" height="45px" />
        <textarea v-model="comment" ref="ta" type="text" placeholder="输入评论..."></textarea>
      </div>
      <div class="bottom" >
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
          <el-button type="primary" size="medium">提交</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Picker } from 'emoji-mart-vue'
export default {
  data () {
    return {
      comment: '',
      pickerShow: false,
      showSearch: false
    }
  },
  methods: {
    showPicker (e) {
      e.stopPropagation()
      this.pickerShow = !this.pickerShow
    },
    addEmoji (emoji, e) {
      this.comment += emoji.native
    },
    findEmojiParent (element) {
      if (element.offsetParent === document.body) {
        return false
      } else if (element.offsetParent === document.querySelector('.emoji-mart')) {
        return true
      } else {
        return this.findEmojiParent(element.offsetParent)
      }
    }
  },
  components: {
    Picker
  },
  mounted () {
    // 点击页面其他地方,表情包隐藏
    document.addEventListener('click', (e) => {
      if (this.pickerShow) {
        if (!this.findEmojiParent(e.target)) {
          this.pickerShow = false
        }
      }
    })
  }
}
</script>

<style scoped>
.comment {
  background: #fff;
  padding: 0 26px 26px;
}
.comment .text {
  font-size: 17px;
  padding: 12px;
  color: #8a9aa9;
  text-align: center;
}
.input {
  background: #f3f3f36e;
  display: flex;
  flex-direction: column;
  padding: 24px 28px 18px 20px;
  border-radius: 2px;
}
.input .top {
  display: flex;
  align-items: center;
}
.input img {
  border-radius: 50%;
  justify-content: flex-end;
  cursor: pointer;
  margin-right: 15px;
}
.input textarea {
  padding: 12px 12px 10px;
  font-size: 16px;
  outline: none;
  border: 1px solid #dedede;
  border-radius: 3px;
  flex-grow: 1;
  border-radius: 2px;
  overflow-y: hidden;
  min-height: 60px;
  font-family: sans-serif;
}
.input .bottom {
  margin-top: 10px;
}
.input .bottom .left {
  display: flex;
  align-items: center;
  padding-left: 60px;
  float: left;
  position: relative;
  cursor: pointer;
}
.input .bottom .right {
  float: right;
}
.input .bottom span {
  color: #6190e8;
  padding: 0 15px 0 4px;
}
</style>
