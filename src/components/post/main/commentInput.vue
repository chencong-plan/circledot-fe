<template>
  <div class="commentInput">
    <div class="top">
      <img src="@/assets/avatar1.jpg" alt width="45px" height="45px" />
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
</template>

<script>
import { Picker } from 'emoji-mart-vue'
export default {
  computed: {
    Picker
  }
}
</script>

<style scoped>
.commentInput {
  background: #f3f3f36e;
  display: flex;
  flex-direction: column;
  padding: 24px 28px 15px 20px;
  border-radius: 2px;
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
  padding-left: 60px;
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
