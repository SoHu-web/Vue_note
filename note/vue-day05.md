## vue-day05

1.组件通信

a.父传子：

```
// 总结：1.父传子：传递的是基础数据类型  给父组件中的子组件绑定属性，此时属性的值在父组件中已经定义，子组件需要通过porps接收,要用数组接收  在子组件中直接渲染接收到的值即可

// 2.父传子:子修改父组件传递的值报错,如果解决，把父组件传递过来的值变为自己的属性，直接修改自己属性即可。后果：父组件修改不会影响自己的数据

// 3.父传子:父变，子变，子变，父变，需要在父组件中定义对象，传递给子组件的就是对象的方式，子组件正常接收即可
```

parent.vue 父组件

```vue
<template>
  <div>
    parent
    <div>这是给儿子的礼物----{{ msg }}</div>
    <input type="text" v-model="msg" />
    <div>{{info}}</div>
    <input type="text" v-model='info.name'>
    <v-child :gift="msg" :money="money" :info='info'></v-child>
  </div>
</template>
<script>
import vChild from "./child";
export default {
  components: {
    vChild,
  },
  data() {
    return {
      msg: "大奔",
      money: 2000,
      info:{
        name:'张三'
      },
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style>
</style>
```

```js
child.vue 子组件
props: ["gift", "money",'info'],

```

parentCase

```vue
case.vue
<template>
<div>
    <v-java></v-java>
    <v-ui></v-ui>
    <v-web></v-web>
</div>
</template>
<script>
import vJava from './java'
import vUi from './ui'
import vWeb from './web'
export default {
components:{
    vJava,
    vUi,
    vWeb
 },
data () {
 return {
 }
},
methods:{
},
mounted(){
}
}
</script>
<style scoped>
</style>
```

```vue
java.vue 
<template>
<div>
    <h2>java讲师</h2>
    //这是循环添加的  key必须要绑定   由于card里面渲染的是具体的数据，所以传递过去对象即可
    <v-card v-for='item in arr' :key='item.id'  :teachers='item'></v-card>
     <!-- <v-card></v-card> -->
</div>
</template>
<script>
import vCard from './card'
export default {
components:{
    vCard
 },
data () {
 return {
     arr:[
         {
             id:1,
             img:'http://www.ujiuye.com/uploadfile/2019/0109/20190109071725808.jpg',
             name:'李老师',
             job:'院长'
         },
          {
             id:2,
             img:'http://www.ujiuye.com/uploadfile/2019/0423/20190423094745162.jpg',
             name:'张老师',
             job:'副院长'
         },
          {
             id:3,
             img:'http://www.ujiuye.com/uploadfile/2019/0423/20190423105110779.jpg',
             name:'伍老师',
             job:'高级讲师'
         },
     ]
 }
},
methods:{
},
mounted(){
}
}
</script>
<style scoped>
</style>
```

```js
card.vue
   props:['teachers']
```

b.子传父：

c.非父子:

2.is

3.slot

4.ref

5.jquery