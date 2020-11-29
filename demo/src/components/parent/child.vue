<template>
  <div>
    child
    <div>这是父亲给我的礼物----{{ gift }}</div>
    <div>这是父亲给我的钞票----{{ money }}</div>
    <input type="text" v-model="gift" />
    <input type="text" v-model="myCar" />
    <button @click="change">点击修改mycar</button>
    <div>
      这是父组件传递过来的对象-----{{info}}
    </div>
    <div>info----- <input type="text" v-model='info.name'></div>
  </div>
</template>
<script>
export default {
  props: ["gift", "money",'info'],
  components: {},
  data() {
    return {
      myCar: "",
    };
  },
  methods: {
    change(){
      this.myCar = 'yellow car'
    }
  },
  mounted() {
    // 这是查看一下是否拿到传过来的值
    console.log(this.$props);
    this.myCar = this.$props.gift;
  },
};
</script>
<style scoped>
</style>