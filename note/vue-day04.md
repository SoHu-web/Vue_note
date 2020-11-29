## vue-day04

1.组件

特点：一组可复用的vue实例

组件化和模块化的区别？

组件化：组件化是指解耦复杂系统时将多个功能模块拆分、重组的过程，有多种属性、状态反映其内部特性

模块化：侧重的功能的封装，主要是针对Javascript代码，隔离、组织复制的javascript代码，将它封装成一个个具有特定功能的的模块。

2.命名规则

- 不能以标签起名，包含大写
- 建议用驼峰起名
- 首字母大写，后面直接写名字。如果后面有大写需要转换为驼峰

3.template模板

~~~html
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
</head>
<body>
    <div id='app'>
        <v-one></v-one>
        <v-two></v-two>
        <v-three></v-three>
    </div>
</body>
<!-- 开发环境 -->
<script src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>
<script>
    // 组件：一组可复用的vue实例
    // 用法：全局定义,局部定义
    // Vue.component('组件名',模板对象)
    // components:{组件名:{模板对象}}
//必须要写在实例对象之前
Vue.component('vOne',{
    // template:要往页面上渲染的模板
    template:'<div>我是第一个组件</div>'
})
    let vm = new Vue({
        el: '#app',
        data: {},
        methods: {
        },
        components:{
          vTwo:{
              template:'<div>我是第二个模板对象<div>abc</div></div>'
          },
          vThree:{
              template:`<div>我是第二个模板对象
                <h2>我是标题2</h2>
              </div>`
          }   
        }
    })
    // 特点：template 有且只能有一个根元素 通常是div
</script>
</html>

~~~



4.data使用

- 重点：组件中定义data为函数，原因是：为了共享数据但是又互相不干扰.

  ~~~js
   <div id='app'>
          <div>{{msg}}</div>
          <p>{{msg}}</p>
          <button @click = 'change'>点击修改msg</button>
          <hr>
  
          <v-one></v-one>
          <v-one></v-one>
      </div>
      <template id="temp1">
          <div>
              <p>{{content}}</p>
              <button @click='changeOne'>修改内容</button>
          </div>
      </template>
  
  ~~~

  ~~~js
  let vm = new Vue({
          el: '#app',
          data: {
              msg:'abc'
          },
          methods: {
              change(){
                  this.msg='123'
              }
          },
          components:{
              vOne:{
                  template:'#temp1',
                  data(){
                      return {
                          content:'我要被修改了'
                      }
                  },
                  methods: {
                      changeOne(){
                          this.content = '我被修改了'
                      }
                  },
              }
          }
      })
  
  ~~~

  总结:data定义为函数的原因:由于需要共享数据，但是又要互不干扰，所以定义为函数。

5.组件嵌套

注意：子组件只能在父组件中使用 子组件中的数据目前仅能供自己使用

~~~js
<div id='app'>
        {{msg}}
        <v-one></v-one>
    </div>
    <template id="temp1">
        <div>
            <h2>我是模板一</h2>
            {{name}}
            <!-- {{msg}} -->
            <!-- <v-inner></v-inner> -->
        </div>
    </template>
    <template id="temp2">
        <div>
            <h2>我是模板二</h2>  
        </div>
    </template>

~~~

~~~js
let vm = new Vue({
        el: '#app',
        data: {
            msg:'hello '
        },
        methods: {
        },
        components:{
            vOne:{
                template:'#temp1',
                components:{
                    vInner:{
                        template:'<div>我是里层嵌套的模板<v-three></v-three></div>',
                        components:{
                            vThree:{
                                template:'#temp2'
                            }
                        }
                    },
                    vOuter:{
                    }
                },
                data(){
                    return {
                        name:'张三'
                    }
                }
            }
        }
    })

~~~

总结：

- 组件中关系：只有父子和非父子关系
- 嵌套:子组件只能在父组件中使用
- 组件中的data ：定义为方法，必须有返回值，同时返回值的类型为对象

data 中的数据只能供自己使用 如果其他组件需要使用需要传值 比如：data,methods,filter,cmpputed,watch…

6.后台管理页面实现

注意：1.外层嵌套大盒子（container）； 2.划分布局 3.书写组件 4.组件嵌套 5.添加样式

7.生命周期

- 8个钩子函数中 mounted 是最常用的

- v-if 会引起生命周期的改变；v-show 不会

  ~~~js
  <div id='app'>
          <div v-html='msg' v-if='isShow'></div>
          <button @click='change'>点击</button>
          <hr>
          <v-one v-show='isShow'></v-one>
      </div>
      <template id="temp1">
          <div>
              <div v-if='show'>{{con}}</div>
              <button @click='changeC'>点击切换内容</button>
          </div>
      </template>
  
  ~~~

  ~~~js
  let vm = new Vue({
          el: '#app',
          data: {
              msg: 'hello world！',
              isShow: true
          },
          methods: {
              change() {
                  this.isShow = !this.isShow
              }
          },
          components: {
              vOne: {
                  template: '#temp1',
                  data() {
                      return {
                          con: '我是组件模板',
                          show: true
                      }
                  },
                  methods: {
                      changeC() {
                         this.con = '我被修改了!!!!!!!'
                      }
                  },
                  mounted() {
                      console.log('组件内容挂载完成')
                  },
                  destroyed() {
                      console.log('销毁执行了')
                  },
              }
          },
          mounted() {
              console.log('vm内容挂载完成')
          },
          destroyed() {
              console.log('vm销毁执行了')
          },
      })
  
  ~~~

  上述案例生命周期的执行过程为：

  - 首先是vm实例的生命周期执行beforeCreate，created，beforeMount，之后是到组件走生命周期beforeCreate，created，beforeMount，mounted，最后是走vm的mounted。

  8.生命周期销毁

  ~~~js
  <body>
      <div id='app'>
          <div v-html='msg' v-if='isShow'></div>
          <button @click='change'>点击</button>
          <hr>
          <v-one v-show='isShow'></v-one>
          <!-- 生命周期  --8个钩子函数  mounted 是最常用的
           v-if 会引起生命周期的改变
            v-show  不会引起 -->
      </div>
      <template id="temp1">
          <div>
              <div v-if='show'>{{con}}</div>
              <button @click='changeC'>点击切换内容</button>
          </div>
      </template>
  </body>
  <script src='https://cdn.jsdelivr.net/npm/vue/dist/vue.js'></script>
  <script>
      let vm = new Vue({
          el: '#app',
          data: {
              msg: 'hello world！',
              isShow: true
          },
          methods: {
              change() {
                  this.isShow = !this.isShow
              }
          },
          components: {
              vOne: {
                  template: '#temp1',
                  data() {
                      return {
                          con: '我是组件模板',
                          show: true
                      }
                  },
                  methods: {
                      changeC() {
                         this.con = '我被修改了!!!!!!!'
                      }
                  },
                  mounted() {
                      console.log('组件内容挂载完成')
                  },
                  destroyed() {
                      console.log('销毁执行了')
                  },
              }
          },
          mounted() {
              console.log('vm内容挂载完成')
          },
          destroyed() {
              console.log('vm销毁执行了')
          },
      })
  </script>
  
  ~~~

  9.脚手架

  步骤：

  - 全局安装webpack ： npm i webpack -g
  - 查看版本 ：webpack -v
  - 全局安装vue脚手架 2.x ：npm i vue-cli -g
  - 查看版本：vue -V

  以上操作只需要操作一次

  - 创建项目 ：vue init webpack demo

  - 进入项目 ：cd demo

  - 启动 ：npm run dev //http://localhost:8080

  - 注意：

    - 安装cnpm方法 淘宝镜像

    npm i -g cnpm --registry=https://registry.npm.taobao.org

    - 名字：不能带大写；
    - 全选n；
    - 在当前文件夹中不能有vue.js这个文件

  文件夹：

  - index.html ->页面的入口文件

  - main.js->程序的入口文件

  - App.vue ->组件–>类似上午的containter

  - build文件夹里放的所有的命令都是放的用来打包用的

  - config文件夹放的是配置文件,里的index.js是

  - src文件夹所有要用的文件都放在里面，src里的assets放的是静态资源：图片；components放的是组件

  - .babelrc将es6转为es5

  - README是说明

  - npm run build

    打包后的文件，生成dist文件夹交给后台的就是这个文件夹

  **总结:**

  后台项目：

  - 划分组件

  App.vue->container 整个容器

  header,footer，main，left，right 都是单独的组件 需要用谁直接 import导入就行

  //点击弹框

  局部定义弹框 首先要有弹框组件 alertbtn.vue 哪用在哪里引入

    ~~~vue
  
    ~~~
<template>
  <div class="left">
      left
      <v-alert></v-alert>
  </div>
</template>
<script>
import vAlert from './aletrBtn'
export default {
  components: {
      vAlert
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
<style>
.left{
    width: 200px;
    background: orange;
}
</style>

    ~~~

//全局引入弹框 需要在main.js中定义

~~~js
// 引入弹框的组件
import vAlert from './components/aletrBtn.vue'
Vue.component('vAlert',vAlert)

~~~

在其他页面只需要调用组件名即可 （v-alert）

~~~vue
<template>
    <div class="header">
        header
        <v-alert></v-alert>
    </div>
</template>
<script>
export default {    
}
</script>
<style>
    .header{
        width: 100vw;
        height: 100px;
        background: red;
    }
</style>

~~~

