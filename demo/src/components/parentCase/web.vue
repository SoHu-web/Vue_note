<template>
<div>
    <h2>web讲师</h2>
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
             img:'http://www.ujiuye.com/uploadfile/2019/0513/20190513024904755.jpg',
             name:'web七老师',
             job:'web院长'
         },
          {
             id:2,
             img:'http://www.ujiuye.com/uploadfile/2019/0109/20190109035042628.jpg',
             name:'web八老师',
             job:'web副院长'
         },
          {
             id:3,
             img:'http://www.ujiuye.com/uploadfile/2019/0109/20190109045506658.jpg',
             name:'web九老师',
             job:'web高级讲师'
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