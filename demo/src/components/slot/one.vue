<template>
<div>
    <!-- 无名插槽 -->
    <slot></slot>
     one
    <slot></slot>
</div>
</template>
<script>
import Slot from './slot.vue'
export default {
components:{
Slot
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