<template>
<div class="card">
    <img :src="teachers.img" alt="">
    <div>姓名:{{teachers.name}}</div>
    <div>职位:{{teachers.job}}</div>
</div>
</template>
<script>
// [{},{},{}]
export default {
    props:['teachers'],
components:{
 },
data () {
 return {
 }
},
methods:{
},
mounted(){
    console.log(this.$props.teachers)
}
}
</script>
<style>
.card{
    width: 200px;
    height: 360px;
    border: 1px solid blue;
    display: inline-block;
    margin-right: 10px;
}
.card img{
    width: 200px;
}
.card div{
    text-align: center;
    margin: 10px

}
</style>