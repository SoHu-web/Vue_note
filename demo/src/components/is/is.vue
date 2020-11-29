<template>
<div>
    <!-- is  1.解决标签的固定搭配  ul>li 
             2.动态组件
     -->
     <hr>
     <!-- one two  动态组件切换-->
     <button @click="name='vOne'">one</button><button @click="name='vTwo'">two</button>
     <div :is='name'></div>
</div>
</template>
<script>
import vOne from './one' 
import vTwo from './two' 
export default {
components:{
    vOne,
    vTwo
 },
data () {
 return {
     name:'vOne'
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