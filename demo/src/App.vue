<template>
  <div>
    <!-- 这是所有知识点的引入 -->
    <!-- 这是复习昨天的 -->
      <!-- <v-banner></v-banner> -->
      <!-- 父子传值 -->
      <!-- <v-parent></v-parent> -->
      <!-- 父传子案例 -->
      <v-case></v-case>
      <!-- is的使用 -->
      <v-is></v-is>
      <!-- jq的使用 -->
      <!-- <v-jq></v-jq> -->
      <!-- 子传父 -->
      <!-- <v-child-parent></v-child-parent> -->
      <!-- slot -->
      <!-- <v-slot></v-slot> -->
      <!-- <v-parent></v-parent>
      <v-child></v-child> -->
  </div>
</template>

<script>
// import vBanner from './components/banner'
// import vParent from './components/parent/parent.vue'
import vCase from './components/parentCase/case'
import vIs from './components/is/is'
// import vJq from './components/jq/jq.vue'
// import vParent from './components/childParent/parent'
// import vChild from './components/childParent/child'
// import vSlot from './components/slot/slot'
export default {
    components:{
      // vBanner,
      // vParent,
      vCase,
      vIs,
      // vJq,
      // vChild,
      // vSlot
    }
}
</script>

<style>

</style>
