<template>
<div>
    slot
    <v-one>
        <div>我就是插入到one组件中的内容1111</div>
        <div>我就是插入到one组件中的内容22222</div>
    </v-one>
    <v-two>
        <div slot="aa">白日依山尽</div>
        <div slot="bb">黄河入海流</div>
        <div slot="cc">欲穷千里目</div>
        <div slot="dd">更上一层楼</div>
        <p>我是新增加的</p>
    </v-two>
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