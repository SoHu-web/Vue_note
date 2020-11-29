<template>
<div>
    <h2>java讲师</h2>
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
             img:'http://www.ujiuye.com/uploadfile/2019/0109/20190109071725808.jpg',
             name:'Java一老师',
             job:'Java院长'
         },
          {
             id:2,
             img:'http://www.ujiuye.com/uploadfile/2019/0423/20190423094745162.jpg',
             name:'Java二老师',
             job:'Java副院长'
         },
          {
             id:3,
             img:'http://www.ujiuye.com/uploadfile/2019/0423/20190423105110779.jpg',
             name:'Java三老师',
             job:'Java高级讲师'
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