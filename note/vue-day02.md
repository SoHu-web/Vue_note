

## vue-day02

### 1.表单

```
姓名 name eg:"张三"
性别 sex  eg:"0"   说明：男-0 女-1 
电话 tel  eg:"15747474747"
密码 pass eg:"123"
爱好 hobby eg:["codding","playing"] 说明：唱歌-sing 跳舞-dancing 打游戏-playing 写代码-codding 
专业 job eg:"web"  说明：java工程师-java web工程师-web php工程师-php 
证书 cert eg:["erji","siji"] eg:计算机二级-erji 英语四级-siji 英语6级-liuji 
备注 des eg:"他是一个党员"
是否同意 isAgree eg:true  同意-true 不同意-false
```

#### 单选框:  

```js
 <!-- 单选框的使用  绑定的属性一定要与value的值保持一致，提交还是会提交value的值-->
 <div>
 性别: <input type="radio" name="sex" value="0" v-model='sex'>男
 <input type="radio" name="sex" value="1" v-model='sex'>女
 </div>
```

#### 多选框：

```js
 <!-- 多选框  1.如果初始值为数组:会把value的值赋值给数组  2.如果初始值是对象，则会把数据类型转为布尔值，那么最终的结果就会以true/false展示-->
 <div>
 <input type="checkbox" checked value="sing" v-model='hobby'>唱歌
 <input type="checkbox" value="dance" v-model='hobby'>跳舞
 <input type="checkbox" value="coding" v-model='hobby'>敲代码
 {{hobby}}
 </div>
 <!-- 初始值为对象 -->
 <div>
 <input type="checkbox" checked value="sing" v-model='hobby2'>唱歌2
 <input type="checkbox" value="dance" v-model='hobby2'>跳舞2
 <input type="checkbox" value="coding" v-model='hobby2'>敲代码2
 {{hobby2}}
 </div>


```

#### 下拉框:

```js

<!-- 下拉框 把初始值需要绑定到select上,还是根据value的值对select进行赋值-->
        <div>
            <select v-model='edu'>
                <option value="小学">小学</option>
                <option value="中学">中学</option>
                <option value="大学">大学</option>
            </select>
        </div>

```

#### 文本域

```js
文本域:
<div>
<textarea  cols="30" rows="10" v-model='text'></textarea>
</div>
```

### PS:VUE单页应用

SPA：signal page application（单页应用）

多页面：1个url->1个html文件  多个url->多个url

单页面:1个url->多个组件  他们之间的切换是通过路由

### 2.修饰符

#### 事件修饰符

stop :阻止事件冒泡

prevent:阻止默认行为

capture:事件捕获   给谁添加谁先出来

once:只执行一次

self:只有自己才可以触发自己

#### 鼠标修饰符

left:左键触发

right:右键触发

middle:中间滚轮

注意：对于修饰符自多只能写两个

#### 键盘修饰符

up,down,left,right,enter 

#### 表单修饰符

lazy:失去焦点后获取最新数据

number:只判断第一个值是否是number类型 是number返回number 不是返回string

trim:去除用户输入内容的首位空格

### 3.vue生命周期

钩子函数：8个

beforeCreate : el  data name 都是undefined

created：el ：undefined data：可以拿到数据

beforeMount：el：有节点了，data：有数据  此时el中的数据没有渲染

mounted:页面渲染完成

beforeUpdate:更新数据

updated：更新完成         注意：更新前后数据是一致的

beforeDestory：销毁之前

destory:销毁完成

### 4.动画

##### 一,基础使用

第一步：给需要添加动画的元素用<transition>包裹起来

第二步：设置6个样式

```
<transition>
<div class="box" v-show='isShow'></div>
</transition>
```

```
 .v-enter{
            opacity: 0;
        }
        .v-enter-to{
            opacity: 1;
        }
        .v-enter-active{
            transition: all 2s;
        }
        .v-leave{
            opacity: 1;
        }
        .v-leave-to{
            opacity: 0;
        }
        .v-leave-active{
            transition: all 2s;
            transform: rotate(360deg);
        }
```

注意:如果需要添加多个动画，只能修改样式中的v  把v换成自己定义的类名即可

```
		.aa-enter{
            opacity: 0;
        }
        .aa-enter-to{
            opacity: 1;
        }
        .aa-enter-active{
            transition: all 2s;
        }
        .aa-leave{
            opacity: 1;
        }
        .aa-leave-to{
            opacity: 0;
        }
        .aa-leave-active{
            transition: all 2s;
        }
```

```
<transition name='aa'>
<div class="box" v-show='isShow'></div>
</transition>
```

##### 二、动画库的使用

引入animate.css这个库

地址;https://animate.style/

```
<transition enter-active-class='animate__animated animate__rubberBand'
            leave-active-class="animate__animated animate__bounceOutUp">
            <div class="box" v-show='isShow'></div>
 </transition>
```

