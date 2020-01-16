<template>
  <div class="comment">
    <div class="text">评论</div>
    <comment-input :avatar="avatarFlag" @submit="submitComment"></comment-input>
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
      avatarFlag: true,
      commentList: [
        { avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
          username: '千与千寻',
          agree: 1,
          agreeActive: false,
          content: `第一条评论`,
          children: [
            { avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
              fromUser: '千与千寻',
              agree: 12,
              agreeActive: true,
              targetUser: '聪聪不聪聪',
              content: ` ### 比如 
> 引用

\`\`\` js
num = new Number(123)
num.__proto__ === Number.prototype // true
Number.prototype.__proto__ === Object.prototype  // true
Object.prototype.__proto__ === null    // true
`,
              time: '刚刚'
            }
          ],
          time: '刚刚'
        },
        { avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
          username: '千与千寻',
          agree: 0,
          agreeActive: false,
          content: `配合jsdoc的type typedef加上d.ts一样能让你的js代码获得类ts的智能提示体验(只是缺少了编译检查)，可以参考如下concent代码示例
          http://www.baidu.com `,
          children: [],
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
    submitComment (comment) {
      console.log(comment, 'comment')
      this.commentList.unshift({ avatar: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1059855869,2611240339&fm=26&gp=0.jpg',
        username: '千与千寻',
        agree: 0,
        content: comment,
        children: [],
        time: '刚刚'
      })
    }
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
