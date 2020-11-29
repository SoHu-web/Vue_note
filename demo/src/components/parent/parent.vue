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

// 总结：1.父传子：传递的是基础数据类型  给父组件中的子组件绑定属性，此时属性的值在父组件中已经定义，子组件需要通过porps接收,要用数组接收  在子组件中直接渲染接收到的值即可

// 2.父传子:子修改父组件传递的值报错,如果解决，把父组件传递过来的值变为自己的属性，直接修改自己属性即可。后果：父组件修改不会影响自己的数据

// 3.父传子:父变，子变，子变，父变，需要在父组件中定义对象，传递给子组件的就是对象的方式，子组件正常接收即可
</script>
<style>
</style>