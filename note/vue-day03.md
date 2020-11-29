## vue-day03

### 1.watch

案例：百度搜索框

接口：百度：http://suggestion.baidu.com/su?cb=callback&wd=123

1.深浅监听

```
 watch:{
 //浅监听
  msg(newVal,oldVal){
                console.log(newVal,oldVal)
 },
 //深监听
 json:{
   //这个名字不能更改
     handler(a){
     console.log(a)
     },
     //主要通过deep属性
    deep:true
 },
 注意：不建议使用深监听，通常转换为浅监听方式
 }

```

2.百度案例

a.跨域的解决 jsonp 

b.通过监听用户输入，发送请求，渲染页面

```
<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Document</title>
    <style>
        .select{
            background-color: red;
        }
    </style>
</head>

<body>
    <div id='app'>
        <input type="text" v-model='search'  @keydown.up.prevent='up' @keydown.down = 'down' @keydown.enter = 'enter'>
        <ul>
            <li v-for='(item,index) in arr' :key='item' :class='[index==n?"select":""]'>{{item}}</li>
        </ul>
    </div>
</body>
<script src='./vue.js'></script>
<script>
    let vm = new Vue({
        el: '#app',
        data: {
            search:'',
            arr:[],//请求回来的数据
            n:-1,//自己定义的标识
        },
        methods: {
          down(){
              console.log(111)
              this.n++;
              if(this.n>this.arr.length-1){
                this.n = 0
              }
          },
          up(){
            this.n--;
            if(this.n<0){
                this.n=this.arr.length-1
            }
          },
          enter(){
            // https://www.baidu.com/s?wd=123
            //在下拉列表的范围内点击跳转到对应的搜索页面
            if(this.n>=0&&this.n<=this.arr.length-1){
                window.open('https://www.baidu.com/s?wd='+this.arr[this.n])
            }else{
                window.open('https://www.baidu.com/s?wd='+this.search)
            }
          }
        },
        watch: {
            search(){
                if(this.search==''){
                    return
                }
                // 发送数据请求 jsonp方式
                var os = document.createElement('script');
                os.src = 'http://suggestion.baidu.com/su?cb=aa&wd='+this.search;
                document.body.appendChild(os)
            }
        },
    })

    function aa(res){
        console.log(res)
        // 找到与vm中data的关系，并且赋值
        vm.arr = res.s
    }
</script>

</html>
```



### 2.过滤器

#### 全局： Vue.fliter('过滤器名字',回调函数)  回调函数中做的是业务逻辑

#### 局部：在vue实例中通过filters配置项来配置  filters:{ 过滤器名称(){ 业务逻辑}  }

#### 案例:

1.电话号码过滤

```
<div id='app'>
<!-- | 管道符  -->
{{tel | filterTel}}
</div>
```

```
Vue.filter('filterTel',(tel)=>{
    return tel.slice(0,3)+'****'+tel.slice(7)
})
```

2.过滤价格

```
 <div id='app'>
        <!-- | 管道符  -->
        {{price | filterPrice}}
    </div>
```

```
Vue.filter('filterPrice',(price)=>{
    return price.toFixed(2)
})

```

3.过滤时间

```
<div id='app'>
        <div>当前时间{{ time | filterTime}}</div>
    </div>
```

```
Vue.filter('filterTime',(time)=>{
    // padStart   首位补零方法  padEnd  末尾补零
    let date = new Date(time)
    console.log(date)
    // 年
    let year = date.getFullYear()
    // 月
    let month = ((date.getMonth()+1)+'').padStart(2,'0')
    // 日
    let day = (date.getDate()+'').padStart(2,'0')
    // 时
    let hours = (date.getHours()+'').padStart(2,'0')
    // 分
    let minutes = (date.getMinutes()+'').padStart(2,'0')
    // 秒
    let seconds = (date.getSeconds()+'').padStart(2,'0')
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
})
```



### 3.计算属性

1.通过计算得出来的，所以就没有初始值

computed

### 4.购物车案例

流程：

1.先画静态页面 利用bs

```vue
 <div id='app' class="container">
    <h2>购物车</h2>
    <table class="table table-bordered table-hover">
      <tr>
        <th>
          <input type="checkbox" v-model='allChecked' @change='checkAll'>全选
        </th>
        <th>商品名称</th>
        <th>商品单价</th>
        <th>商品数量</th>
        <th>小计</th>
        <th>操作</th>
      </tr>
      <tr v-for='(item,index) in list' :key='item.id'>
        <td>
          <input type="checkbox" v-model='item.checked' @change='changeOne(index)'>
        </td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
          <button type="button" class="btn btn-primary" @click= 'cut(index)'>-</button>
          <span>{{item.num}}</span>
          <button type="button" class="btn btn-danger" @click= 'add(index)'>+</button>
        </td>
        <td>小计:{{item.price*item.num}}</td>
        <td><button type="button" class="btn btn-primary" @click = 'del(index)'>删除</button></td>
      </tr>
      <tr>
        <td colspan="6">总价:{{total}}</td>
      </tr>
    </table>
  </div>
```

2.实现点击添加，点击减少数量，点击删除功能

```vue
 let vm = new Vue({
       el:'#app',
       data:{
         allChecked:false,
          list:[
            {
              id:1,
              name:'手机',
              price:1999.9,
              num:1,
              checked:false
            },
            {
              id:2,
              name:'电脑',
              price:4999.9,
              num:1,
              checked:true
            },
            {
              id:3,
              name:'平板',
              price:2999.9,
              num:1,
              checked:false
            },
            {
              id:4,
              name:'相机',
              price:999,
              num:1,
              checked:false
            },
          ]
       },
       methods: {
          // 添加
          add(index){
            this.list[index].num++
          },
          cut(index){
            this.list[index].num--
            if( this.list[index].num<0){
              this.list[index].num=0
            }
          },
          del(index){
            this.list.splice(index,1)
          },
          // 全选
          checkAll(){
            this.list.forEach(item=>{
              item.checked = this.allChecked
            })
          },
          //改变一个的状态
          changeOne(index){
                this.allChecked = this.list.every(item=>item.checked)
          }
       },
       })
```

3.判断选中状态完成总价的计算

```js
<tr>
    <td colspan="6">总价:{{total}}</td>
</tr>
      
```

```js
computed: {
          total(){
            var sum=0;
            this.list.forEach(item=>{
              if(item.checked){
                sum+=item.price*item.num
              }
               
            })
            return sum
          }
       },
```

bootstrap 

### 作业：

淘宝搜索：
https://suggest.taobao.com/sug?
code=utf-8
&q=s&
callback=jsonp299