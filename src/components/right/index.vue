<template>
  <div class="rightContent">
    <div class="content" ref="content">
      <span>目录</span>
      <ul>
        <li v-for="(level1,index) in treeArr" :key=index>
          <a :class="{active: activeTitle == level1.title}" @click="jumpTitle(level1.title)">{{ level1.title }}</a>
          <ul v-if="level1.children.length !== 0">
            <li v-for="(level2,index) in level1.children" :key=index>
              <a :class="{active: activeTitle == level2.title}" @click="jumpTitle(level2.title)">{{ level2.title }}</a>
              <ul v-if="level1.children.length !== 0">
                <li v-for="(level3,index) in level2.children" :key=index>
                  <a :class="{active: activeTitle == level3.title}" @click="jumpTitle(level3.title)">{{ level3.title }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['msg'],
  data () {
    return {
      allTitle: [],
      level: [4, 3, 2],
      treeArr: [],
      activeTitle: ''
    }
  },
  created () {
    this.getAllTitle()
    this.getTree()
    this.treeArr = this.allTitle.filter(item => item.flag !== true)
  },
  mounted () {
    this.getTitleTop()
    let minIndex = 0
    this.activeTitle = this.allTitle[minIndex].title
    window.onscroll = () => {
      for (var i = 0; i < this.allTitle.length; i++) {
        if (Math.abs(this.allTitle[i].top - window.scrollY) < Math.abs(this.allTitle[minIndex].top - window.scrollY)) {
          minIndex = i
          this.activeTitle = this.allTitle[minIndex].title
        }
      }
    }
  },
  methods: {
    getAllTitle () {
      let index = 0
      this.msg.replace(/(#+)[^#][^\n]*?(?:\n)/g, (match, m1, m2) => {
        let title = match.replace('\n', '')
        let level = m1.length
        this.allTitle.push({
          title: title.replace(/^#+/, '').replace(/\([^)]*?\)/, '').trim(),
          level: level,
          children: [],
          index
        })
        index++
      })
    },
    getTitleTop () {
      this.allTitle.forEach(title => {
        title.top = document.getElementById(title.title).offsetTop
      })
      console.log(this.allTitle)
    },
    getTree () {
      // 根据index将目录转换成树结构
      this.level.forEach(level => {
        for (var item of this.allTitle) {
          if (item.level === level) {
            // 找到它所对应的上级目录
            let lastLevel = this.allTitle.filter(value => value.level === level - 1)
            for (var index = lastLevel.length - 1; index >= 0; index--) {
              if (lastLevel[index].index < item.index) {
                this.allTitle[lastLevel[index].index].children.push(item)
                item.flag = true
                break
              }
            }
          }
        }
      })
    },
    jumpTitle (title) {
      this.activeTitle = title
      window.scroll(0, document.getElementById(title).offsetTop)
    }
  }
}
</script>

<style>
.rightContent {
  margin-left: 26px;
  width: 280px;
  padding: 20px;
  text-align: left;
}
.rightContent .content {
  font-size: 17px;
  position: fixed;
}
.rightContent .content > ul {
  margin-top: 10px;
}
.rightContent ul li {
  list-style-type: disc;
  margin-left: 18px;
  font-weight: normal;
  line-height: 1.6;
  font-size: 16px;
}
.rightContent .content > ul > li {
  font-weight: bold;
}
a {
  cursor: pointer;
  color: #000;
}
a.active {
  color: #007fff;
}
</style>
