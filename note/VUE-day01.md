## VUE-day01

vue  8天(基础)+5天(项目)  =13天

react 5天（基础）+1（项目）=6天

前端发展：

app：比如美团    

官网:要求美观 

后台管理系统：主要做数据的增删改查

小程序:

重点：不是问为什么  而是要问怎么做  目的是为了出活

作业： 每天都需要整理笔记

不要请假

不建议问：html+css  js (a is not undefined)   

需要问:es6  比如数组方法 node 

遇到bug不要慌

有了问题：及时问



vue介绍

1.官网 ：https://cn.vuejs.org/

2.api

1.vue特点：

易用，灵活，高效

2.渐进式

根据需求的不同加载不同模块

库和框架的区别：

库：jq   ....js  功能单一

框架:vue   react  angular  

3.vue核心：

数据驱动

组件化

4.vue安装

a.cdn方式  需要引入的开发版本

b.npm install vue 

c.直接下载vue.js

一：指令

v-text/v-html    v-if,v-show v-if:直接移除元素  v-show:通过display：none老设置元素 应用场景：如果频繁切换元素需要用v-show    

v-if/v-show  v-else-if v-else   注意：v-if v-else 中间不允许有内容 

v-bind  绑定属性   

```
  <!-- v-bind简写: -->
  <div :abc='abc'>我是div</div>
```

v-on   绑定方法

```
<!-- v-on：的简写方式:@ -->
<button @click='fn'>点击弹出内容</button>
```



v-model:

数据的双向绑定    只能应用于表单元素

```
 <div >{{content}}</div>
 <input type="text" v-model='content'>
```



二、绑定样式

:class 方式绑定:

```js
 <div class="box div3">我是div</div>
 <!-- 通过绑定属性的方式 -->
 <div :class='box'>我是div2</div>
 <!-- 通过三元方式添加样式 -->
 <div :class='[1==2?box:div3]'>我是div3</div>
 <!-- 复合样式-->
 <div :class='box+" div3"'>我是div4</div>
```

:style 方式绑定:

```js
<div style='width: 100px;height: 100px;background-color: red;'>我是div</div>
<!-- style的行内样式 -->
<div :style='obj'>我是div2222</div>
<div :style='[obj,obj1]'>我是div33333</div>
```

知识点: :key的作用; 绑定一个唯一值，避免勾选不正确的问题  与v-for的固定搭配

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div id="app">
        <div v-for='(item,index) in list' :key='item.id'>
            <input type="checkbox">
           {{index+1}}---- {{item.name}}---{{item.age}}
          
        </div>
        <div>
            姓名: <input type="text" v-model='user.name'>
        </div>
        <div>
            年龄: <input type="text" v-model='user.age'>
        </div>
        <div>
            <button @click = 'add'>添加</button>
            <button @click = 'reset'>重置</button>
        </div>
    </div>

</body>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
    new Vue({
        el: '#app', 
        data: {
            user:{
                name:'张三',
                age:20
            },
            list:[
                {id:1,name:'李四',age:15},
                {id:2,name:'王五',age:25},
                {id:3,name:'赵六',age:35},
            ]
        },
        methods: {
            // 重置数据  this 指的就是vue的实例
            reset(){
               this.user={
                   name:'',
                   age:''
               } 
            },
            // 增加
            add(){
                // this.list.push({id:4,name:'王麻子',age:18})
                let obj = {id:4,name:'王麻子',age:18}
                this.list.splice(2,0,obj)
            }
        },
    })
</script>

</html>
```





## 面试题

1. mvvm框架是什么？它和其它框架（jquery）的区别是什么？哪些场景适合？


2. vue等单页面应用及其优缺点
3. 说出至少4种vue当中的指令和它的用法？
4. v-if 和 v-show 区别