<template>
  <div class="home">
    <div class="container">
      <Main :msg=msg></Main>
      <Right :msg=msg></Right>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Main from '@/components/main/index.vue'
import Right from '@/components/right/index.vue'

export default {
  data () {
    return {
      xxx: '123',
      msg: `

### 前言

> 继承（英语：inheritance）是面向对象软件技术当中的一个概念

> 每个实例对象( object )都有一个私有属性(称之为 \`__proto__\` )指向它的构造函数的原型对象( \`prototype \` )。

## 继承一级标题

继承（英语：inheritance）是面向对象软件技术当中的一个概念

### 继承二级标题

>该原型对象也有一个自己的原型对象( __proto__ ) ，层层向上直到一个对象的原型对象为 null。根据定义，null 没有原型，并作为这个原型链中的最后一个环节。

比如 

\`\`\` js
num = new Number(123)
num.__proto__ === Number.prototype // true
Number.prototype.__proto__ === Object.prototype  // true
Object.prototype.__proto__ === null    // true

num.toString()  // '123'
\`\`\`



### 继承二级标题2


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


## 继承父类
### 继承父类子标题
#### 子子标题测试

比如父类Animal 子类Cat Animal具有方法run Cat具有方法say 我们想让Cat也有run方法通过继承Animal
\`\`\` javascript
var foo = function (bar) {
  return bar++;
};

function sum(){}

console.log(foo(5));
\`\`\`

## 如何继承


这个时候我们看下animal和cat
# 注册

## 注册流程

* 注册时传入用户名,密码,确认密码
* 注册成功将用户名与密码存入数据库
* 密码与确认密码不同，或已经注册的用户，返回400

## 登录流程
    `

    }
  },
  components: {
    Main,
    Right
  }
}
</script>

<style scoped>
.home {
  background: inherit;
}
.container {
  justify-content:center;
}
</style>
