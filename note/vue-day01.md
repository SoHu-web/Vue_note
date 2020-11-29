## VUE-day01

vue介绍

1.官网 ：https://cn.vuejs.org/

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

```vue
  <!-- v-bind简写: -->
  <div :abc='abc'>我是div</div>
```

v-on   绑定方法

```vue
<!-- v-on：的简写方式:@ -->
<button @click='fn'>点击弹出内容</button>
```



v-model:

数据的双向绑定    只能应用于表单元素

```vue
 <div >{{content}}</div>
 <input type="text" v-model='content'>
```



二、绑定样式

:class 方式绑定:

```vue
 <div class="box div3">我是div</div>
 <!-- 通过绑定属性的方式 -->
 <div :class='box'>我是div2</div>
 <!-- 通过三元方式添加样式 -->
 <div :class='[1==2?box:div3]'>我是div3</div>
 <!-- 复合样式-->
 <div :class='box+" div3"'>我是div4</div>
```

:style 方式绑定:

```vue
<div style='width: 100px;height: 100px;background-color: red;'>我是div</div>
<!-- style的行内样式 -->
<div :style='obj'>我是div2222</div>
<div :style='[obj,obj1]'>我是div33333</div>
```

知识点: :key的作用; 绑定一个唯一值，避免勾选不正确的问题  与v-for的固定搭配

```html
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

##### 一、为什么要选vue？与其它框架对比的优势和劣势？

- 易用、灵活、高效
- 渐进式：根据不同的需求加载不同的模块

##### 二、mvvm框架是什么？它和其它框架（jquery）的区别是什么？哪些场景适合？

- 模型（model）控制了视图(view)的展示，视图(view)又可以改变模型(model)的数据， 视图模型（viewModel）是模型和视图之间的桥梁
- MVVM模式的框架适合做数据的增删改查，不适合做动画，操作DOM节点

1. mvvm框架是Model-View-ViewModel的缩写，它是一种基于前端开发的架构模式，其核心是提供对View和ViewModel的双向数据绑定，这使得ViewModel的状态改变可以自动传递给View，即所谓的双向数据绑定。这使得viewmodel的状态改变可以自动传递给view，在MVVM架构下view和model没有直接的联系，而是通过viewmodel进行交互。

2. 区别： jQuery是一个库，功能较为单一，主要是通过操作dom节点进行属性的改变

   MVVM框架不关心DOM的结构，而是关心数据如何存储，通过更新JavaScript对象的状态来实现功能

3. mvvm适用于处理数据交互，页面实时处理

##### 三、vue等单页面应用及其优缺点

**优点：**

1、用户体验好，快，内容的改变不需要重新加载整个页面，对服务器压力较小。2、前后端分离，比如vue项目。3、完全的前端组件化，前端开发不再以页面为单位，更多地采用组件化的思想，代码结构和组织方式更加规范化，便于修改和调整；

**缺点：**

1、首次加载页面的时候需要加载大量的静态资源，这个加载时间相对比较长。 2、不利于 SEO优化，单页页面，数据在前端渲染，就意味着没有 SEO。

- 优点：vue的目标是通过尽可能简单的api实现响应的数据绑定和组合视图的组件，核心是一个响应的数据绑定系统。MVVM，数据驱动，组件化，轻量，简洁，高效，快速，模块友好
- 缺点：不支持低版本浏览器，最低支持待IE9，不利于SEO（如果支持SEO，建议通过服务端进行渲染组件），第一次加载首页耗时相对较长，不可以使用浏览器的导航按钮需要自行实现前进后退

##### 四、说出至少4种vue当中的指令和它的用法？

- v-text/v-html v-if,
- v-show v-if:直接移除元素
- v-show:通过display：none老设置元素 应用场景：如果频繁切换元素需要用v-show
- v-if v-else-if v-else 注意：v-if v-else 中间不允许有内容
- v-bind 绑定属性
- v-on 绑定方法
- v-model: 数据的双向绑定 只能应用于表单元素或删除元素，v-show是通过设置DOMyuan’su

##### 五、v-if 和 v-show 区别

1. var if是动态的向DOM树内添加或删除元素，v-show是通过设置DOM元素的display样式属性控制元素的显示和隐藏。
2. v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换。
3. v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载); v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留。
4. v-if有更高的切换消耗；v-show有更高的初始渲染消耗。

