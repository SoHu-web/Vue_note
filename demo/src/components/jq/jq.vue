<template>
<div>
    <div class="box"></div>
    <button @click="getWidth">点击获取</button>
</div>
</template>
<script>
// import $ from 'jquery'
export default {
components:{
 },
data () {
 return {
 }
},
methods:{
    getWidth(){

    }
},
mounted(){
     this.$('button').click(()=>{
         this.$('.box').fadeOut(2000)
     })
}
}
</script>
<style>
.box{
    width: 100px;
    height: 100px;
    background: red;
}
</style>