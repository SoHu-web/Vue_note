<template>
  <div>
    <h2>父组件给的礼物---{{ gift }}</h2>
    <p>父亲给的生活费：{{ money }}</p>
    <button @click="send()">反馈给父组件</button>
  </div>
</template>
<script>
export default {
  props: ["gift", 'money'],
  components: {},
//   data() {
//     return {
//       money: "2万",
//     };
//   },
  methods: {
    send() {
      // $emit 用来触发子传父的方法的
      this.$emit("giveToParent", 20000);
    },
  },
  mounted() {},
};
</script>
<style scoped>
</style>