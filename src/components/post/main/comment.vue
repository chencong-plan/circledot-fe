<template>
  <div class="comment">
    <div class="text">评论</div>
    <comment-input></comment-input>
    <comment-list :commentList="commentList"></comment-list>
  </div>
</template>

<script>
import commentInput from './commentInput'
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
          agreeActive: false,
          content: `前言`,
          childred: [],
          time: '刚刚'
        },
        { avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
          username: '千与千寻',
          agree: 14,
          agreeActive: true,
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
          agreeActive: false,
          content: `配合jsdoc的type typedef加上d.ts一样能让你的js代码获得类ts的智能提示体验(只是缺少了编译检查)，可以参考如下concent代码示例
          http://www.baidu.com `,
          childred: [],
          time: '刚刚'
        }
      ]
    }
  },
  components: {
    commentInput,
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

</style>
