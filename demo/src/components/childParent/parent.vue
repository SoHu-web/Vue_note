<template>
  <div>
    <!-- parent
    这是儿子给的钱----{{myMoney}}
    <v-child @giveTo='own'>123</v-child> -->
    <h1>这是父组件--{{ car }}</h1>
    <h2>这是子组件反馈的礼物--{{ childGift }}</h2>
    <v-child
      :gift="car"
      money="10000"
      @giveToparent="changeGift($event)"
    ></v-child>
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
      car: "劳斯莱斯",
      childGift: ""
    };
  },
  methods: {
    changeGift(e){
        console.log('父组件的函数被子组件触发----',e);
        this.childGift= e;
    }
  },
  mounted() {},
};
</script>
<style scoped>
</style>