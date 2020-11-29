## vue-day04

Q:1.动画的使用方法以及动画库的使用方式

​	2.vue中的指令有哪些？

​	3.vue中生命周期钩子函数有哪些？分别代表什么含义？

​	4.filter的语法是什么？

​	5.computed的特点是什么？

​	6.watch与computed的区别？

​	7.vue中的配置项有哪些？

​	8.页面中新增加属性后页面不渲染问题怎么解决？

​	9.数组中的forEach，some，every是如何使用的？

​	10.格式化时间时的补零操作两种方法？

1.组件

特点：一组可复用的vue实例

组件化和模块化的区别？

组件化：组件化是指解耦复杂系统时将多个功能模块拆分、重组的过程，有多种属性、状态反映其内部特性

模块化：侧重的功能的封装，主要是针对Javascript代码，隔离、组织复制的javascript代码，将它封装成一个个具有特定功能的的模块。

2.命名规则

3.template模板

4.data使用

5.组件嵌套

6.后台管理页面实现

7.脚手架

步骤：

```js
//全局安装webpack
npm i webpack -g

//查看版本
webpack -v

//全局安装vue脚手架
npm i vue-cli -g

//查看版本
vue -V
//创建项目
vue init webpack demo

//进入项目
cd demo 

//启动 
npm run dev //localhost:8080


注意：  安装cnpm方法  淘宝镜像
npm i -g cnpm --registry=https://registry.npm.taobao.org  
```

