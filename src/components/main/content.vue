<template>
  <div class="content">
    <vue-markdown>{{msg}}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  data () {
    return {
      msg: `

> 继承（英语：inheritance）是面向对象软件技术当中的一个概念

> 每个实例对象( object )都有一个私有属性(称之为 \`__proto__\` )指向它的构造函数的原型对象( \`prototype \` )。

>该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

比如 

\`\`\` js
num = new Number(123)
num.__proto__ === Number.prototype // true
Number.prototype.__proto__ === Object.prototype  // true
Object.prototype.__proto__ === null    // true

num.toString()  // '123'
\`\`\`

这里的\`num\`为什么会有\`toString\`方法呢,打印一下num看看

区域1是\`Number\`的原型对象\`Number.prototype\`
区域2是\`Object\`的原型对象\`Object.prototype\`

javascript为了节省空间，num在调用toString方法时会先在自身的属性上找，如果没有则继续向\`__proto__\`属性中找，找到的话就调用该属性，如果没找到则继续向下一级\`__proto__\`中找，找到\`Object.prototype\`都还没找到，就返回\`undefined\`。而Object的原型对象有\`toString\`属性,所以num可以调用该方法

那我们说Number继承了Object,所以Number实例对象具有\`Object.prototype\`的各种属性和方法

## 继承属性

比如父类Animal 子类Cat Animal具有方法run Cat具有方法say 我们想让Cat也有run方法通过继承Animal
\`\`\` javascript
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`


这个时候我们看下animal和cat

#### 注册流程

* 注册时传入用户名,密码,确认密码
* 注册成功将用户名与密码存入数据库
* 密码与确认密码不同，或已经注册的用户，返回400
    `
    }
  },
  components: {
    VueMarkdown
  }
}
</script>

<style>
.content {
    margin-top: 5px;
    text-align: left;
}
.content span {
  text-indent: 2em;
}

.content h4 {
  margin: 10px 0;
}

blockquote {
  border-left: 4px solid #ddd;
  color: #666;
  padding: 0 15px;
  font-size: 16px;
}
blockquote p {
  padding: 5px 0;
}
pre {
  background: #f8f8f8;
  padding: 18px 15px 12px;
  border: none !important;
  box-shadow: 0 0 0 0 !important;
}
.content ul li {
  list-style-type:disc;
  margin-left: 18px;
}
.content div > p {
  margin: 20px 0;
  font-size: 17px;
  color: #666;
}
code {
  color: red;
  font-size: 16px;
};
</style>
