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