<template>
<div>
    <h2>ui讲师</h2>
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
             img:'http://www.ujiuye.com/uploadfile/2019/0109/20190109105342884.jpg',
             name:'ui四老师',
             job:'ui院长'
         },
          {
             id:2,
             img:'http://www.ujiuye.com/uploadfile/2019/0109/20190109110959719.jpg',
             name:'ui五老师',
             job:'ui副院长'
         },
          {
             id:3,
             img:'http://www.ujiuye.com/uploadfile/2019/0109/20190109105319126.jpg',
             name:'ui六老师',
             job:'ui高级讲师'
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