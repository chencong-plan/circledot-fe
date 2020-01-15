<template>
  <div class="comment">
    <div class="text">评论</div>
    <div class="input">
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
    <comment-list :commentList="commentList"></comment-list>
  </div>
</template>

<script>
import { Picker } from 'emoji-mart-vue'
import commentList from './commentList'
import avatar from '@/components/common/avatar'
export default {
  data () {
    return {
      pickerShow: false,
      showSearch: false,
      commentList: [
        { avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
          username: '千与千寻',
          agree: 1,
          content: `前言`,
          childred: [],
          time: '刚刚'
        },
        { avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
          username: '千与千寻',
          agree: 14,
          content: `### 继承二级标题

>该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

比如 
\`\`\` js
num = new Number(123)
num.__proto__ === Number.prototype // true
Number.prototype.__proto__ === Object.prototype  // true
Object.prototype.__proto__ === null    // true
`,
          childred: [],
          time: '刚刚'
        },
        { avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
          username: '千与千寻',
          agree: 0,
          content: `配合jsdoc的type typedef加上d.ts一样能让你的js代码获得类ts的智能提示体验(只是缺少了编译检查)，可以参考如下concent代码示例
          http://www.baidu.com `,
          childred: [],
          time: '刚刚'
        }
      ]
    }
  },
  components: {
    Picker,
    commentList
  },
  methods: {
    showPicker (e) {
      e.stopPropagation()
      this.pickerShow = !this.pickerShow
    },
    addEmoji (emoji, e) {
      this.$refs.ta.innerText += emoji.native
    },
    findEmojiParent (element) {
      if (element.offsetParent === document.body) {
        return false
      } else if (element.offsetParent === document.querySelector('.emoji-mart')) {
        return true
      } else {
        return this.findEmojiParent(element.offsetParent)
      }
    },
    submitComment () {
      console.log(this.$refs.ta.innerText)
      if (!this.$refs.ta.innerText.trim()) {
        this.$message({
          message: '评论内容不可为空哦~',
          type: 'warning'
        })
      } else {
        this.commentList.unshift({ avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
          username: '千与千寻',
          agree: 0,
          content: this.$refs.ta.innerText,
          childred: [],
          time: '刚刚'
        })
        this.$refs.ta.innerText = ''
      }
    }
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
  padding: 24px 28px 15px 20px;
  border-radius: 2px;
}
.input .top {
  display: flex;
}
.input .top img {
  border-radius: 50%;
  justify-content: flex-end;
  cursor: pointer;
  margin-right: 15px;
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
.input .inputText:focus {
  border: 1px solid #007fff;
}
</style>
