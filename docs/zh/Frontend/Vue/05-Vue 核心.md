# Vue 核心

## 初识 Vue

`html`代码如下：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>初识Vue</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器 -->
		<div id="demo">
			<h1>Hello，{{name.toUpperCase()}}，{{address}}</h1>
		</div>

		<script type="text/javascript" >
			Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

			//创建Vue实例
			new Vue({
				el:'#demo', //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串。
				data:{ //data中用于存储数据，数据供el所指定的容器去使用，值我们暂时先写成一个对象。
					name:'atguigu',
					address:'北京'
				}
			})

		</script>
	</body>
</html>
```

在浏览器中的效果如下：

![img](./assets/20211221080453.jpg)



> 初识Vue：
>
> ​        1.想让Vue工作，就必须创建一个Vue实例，且要传入一个配置对象；
>
> ​        2.root容器里的代码依然符合html规范，只不过混入了一些特殊的Vue语法；
>
> ​        3.root容器里的代码被称为【Vue模板】；
>
> ​        4.Vue实例和容器是一一对应的；
>
> ​        5.真实开发中只有一个Vue实例，并且会配合着组件一起使用；
>
> ​        6.{{xxx}}中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性；
>
> ​        7.一旦data中的数据发生改变，那么页面中用到该数据的地方也会自动更新；
>
> 
>
> ​        注意区分：js表达式 和 js代码(语句)
>
> ​            1.表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：
>
> ​                  (1). a
>
> ​                  (2). a+b
>
> ​                  (3). demo(1)
>
> ​                  (4). x === y ? 'a' : 'b'
>
> 
>
> ​            2.js代码(语句)
>
> ​                  (1). if(){}
>
> ​                  (2). for(){}



## 模板语法

Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层组件实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。

在底层的实现上，Vue 将模板编译成虚拟 DOM 渲染函数。结合响应性系统，Vue 能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。

如果你熟悉虚拟 DOM 并且偏爱 JavaScript 的原始力量，你也可以不用模板，[直接写渲染 (render) 函数](https://v3.cn.vuejs.org/guide/render-function.html)，使用可选的 JSX 语法。



Vue模板语法有2大类：     

###  1. 插值语法：

功能：用于解析标签体内容。

写法：{{xxx}}，xxx是js表达式，且可以直接读取到data中的所有属性。          

### 2. 指令语法：

功能：用于解析标签（包括：标签属性、标签体内容、绑定事件.....）。

举例：v-bind:href="xxx" 或  简写为 :href="xxx"，xxx同样要写js表达式，且可以直接读取到data中的所有属性。

备注：Vue中有很多的指令，且形式都是：v-????，此处我们只是拿v-bind举个例子。



```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>模板语法</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>		
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>插值语法</h1>
			<h3>你好，{{name}}</h3>
			<hr/>
			<h1>指令语法</h1>
			<a v-bind:href="school.url.toUpperCase()" x="hello">点我去{{school.name}}学习1</a>
			<a :href="school.url" x="hello">点我去{{school.name}}学习2</a>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'jack',
				school:{
					name:'尚硅谷',
					url:'http://www.atguigu.com',
				}
			}
		})
	</script>
</html>
```

## 数据绑定

### 示例

页面效果：

![数据绑定](./assets/20211222073603.png)

`html`代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>数据绑定</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>		
		<!-- 准备好一个容器-->
		<div id="root">
			<!-- 普通写法 -->
			<!-- 单向数据绑定：<input type="text" v-bind:value="name"><br/>
			双向数据绑定：<input type="text" v-model:value="name"><br/> -->

			<!-- 简写 -->
			单向数据绑定：<input type="text" :value="name"><br/>
			双向数据绑定：<input type="text" v-model="name"><br/>

			<!-- 如下代码是错误的，因为v-model只能应用在表单类元素（输入类元素）上 -->
			<!-- <h2 v-model:x="name">你好啊</h2> -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			}
		})
	</script>
</html>
```



### 单向数据绑定

1. 语法：v-bind:href ="xxx" 或简写为 :href
2. 特点：数据只能从 data 流向页面

###  双向数据绑定

1. 语法：v-mode:value="xxx" 或简写为 v-model="xxx"

2. 特点：数据不仅能从 data 流向页面，还能从页面流向 data

3. 备注：

   ​         1.双向绑定一般都应用在表单类元素上（如：input、select等）

   ​         2.v-model:value 可以简写为 v-model，因为v-model默认收集的就是value值。



### el 与 data 的两种写法

准备`html`文件

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>el与data的两种写法</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>		
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>你好，{{name}}</h1>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。		
	</script>
</html>
```



**el有2种写法：**

第一种写法：new Vue时候配置el属性。

```javascript
const v = new Vue({
    el:'#root', //
    data:{
        name:'尚硅谷'
    }
})
console.log(v)
```

第二种写法：先创建Vue实例，随后再通过vm.$mount('#root')指定 el 的值。

```javascript
const v = new Vue({
    data:{
        name:'尚硅谷'
    }
})
console.log(v)
v.$mount('#root')
```



**data有2种写法**

> 如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

(1).对象式

```javascript
new Vue({
    el:'#root',
    //data的第一种写法：对象式
    data:{
        name:'尚硅谷'
    }   
})
```

(2).函数式
```javascript
new Vue({
    el:'#root',
    //data的第二种写法：函数式
    data(){
        console.log('@@@',this) //此处的this是Vue实例对象
        return{
            name:'尚硅谷'
        }
    }
})
```



**注意：**

> **一个重要的原则：**
>
> 由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。



## MVVM 模型

1. **M**：模型(Model) ：对应 data 中的数据
2. **V**：视图(View) ：模板
3. **VM**：视图模型(ViewModel) ： Vue 实例对象

![MVVM模型](./assets/65dff7b6ba81f8f.png)

`html`示例：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>理解MVVM</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>		
		<!-- 准备好一个容器-->
		<div id="root">
			<h1>学校名称：{{name}}</h1>
			<h1>学校地址：{{address}}</h1>
			<!-- <h1>测试一下1：{{1+1}}</h1>
			<h1>测试一下2：{{$options}}</h1>
			<h1>测试一下3：{{$emit}}</h1>
			<h1>测试一下4：{{_c}}</h1> -->
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'北京',
			}
		})
		console.log(vm)
	</script>
</html>
```

![](./assets/20211222075643.png)

> MVVM模型
> 			1. M：模型(Model) ：data中的数据
> 			2. V：视图(View) ：模板代码
> 			3. VM：视图模型(ViewModel)：Vue实例
> 				观察发现：
> 					1.data中所有的属性，最后都出现在了vm身上。
> 					2.vm身上所有的属性 及 Vue原型上所有属性，在Vue模板中都可以直接使用。

## 数据代理

### 回顾Object.defineproperty方法

Object.defineproperty这个方法，顾名思义，就是给一个对象定义属性用的。



首先我们定义一个person对象，有name和sex属性，现在我想给这个person设置年龄age属性，我们就可以使用Object.defineproperty这个方法来实现：

```javascript
let person = {
    name:'张三',
    sex:'男',
}

Object.defineProperty(person,'age',{
    value:18
})

console.log(person)
```

我们最直接的想法就是，为什么要通过这种方式来添加属性，而不是直接在定义对象时设置属性：

```javascript
let person = {
    name:'张三',
    sex:'男',
    age: 18
}
```

这样不是更方便吗？ 我们之所以不采用这种写法，是因为使用Object.defineproperty这个方式更加的高级，我们可以在定义一个属性时，对其进行很多高级的限制。



下面就通过示例来看看都有哪些可配置项，来对定义的属性进行限制吧。

```javascript
let person = {
    name:'张三',
    sex:'男',
}

Object.defineProperty(person,'age',{
    value:18
})

//打印对象属性的key
console.log(Object.keys(person))
//或者使用下面这种方式打印对象数据
for (let key in person){
    console.log('@'+person[key])
}
```

我们发现打印的结果中没有age属性相关的数据。如果我们想让其能打印出age相关的属性呢？我们只需要加一个`enumerable`配置项就可以了，代码如下：

```javascript
Object.defineProperty(person,'age',{
    value:18,
    enumerable:true
})
```



**基本的配置项**

（1）控制属性是否可以枚举

（2）控制属性是否可以被修改

（3）控制属性是否可以被删除

```javascript
Object.defineProperty(person,'age',{
    value:18,
    enumerable:true, //控制属性是否可以枚举，默认值是false
    writable:true, //控制属性是否可以被修改，默认值是false
    configurable:true //控制属性是否可以被删除，默认值是false
})
```

**高级的配置项（getter和setter）**

```javascript
Object.defineProperty(person,'age',{
    // value:18,
    // enumerable:true, //控制属性是否可以枚举，默认值是false
    // writable:true, //控制属性是否可以被修改，默认值是false
    // configurable:true //控制属性是否可以被删除，默认值是false

    //当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
    get(){
        console.log('有人读取age属性了')
        return number
    },

    //当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
    set(value){
        console.log('有人修改了age属性，且值是',value)
        number = value
    }

})
```



最终的`html`示例代码如下：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>回顾Object.defineproperty方法</title>
	</head>
	<body>
		<script type="text/javascript" >
			let number = 18
			let person = {
				name:'张三',
				sex:'男',
			}

			Object.defineProperty(person,'age',{
				// value:18,
				// enumerable:true, //控制属性是否可以枚举，默认值是false
				// writable:true, //控制属性是否可以被修改，默认值是false
				// configurable:true //控制属性是否可以被删除，默认值是false

				//当有人读取person的age属性时，get函数(getter)就会被调用，且返回值就是age的值
				get(){
					console.log('有人读取age属性了')
					return number
				},

				//当有人修改person的age属性时，set函数(setter)就会被调用，且会收到修改的具体值
				set(value){
					console.log('有人修改了age属性，且值是',value)
					number = value
				}

			})

			// console.log(Object.keys(person))

			console.log(person)
		</script>
	</body>
</html>
```

### 何为数据代理

数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>何为数据代理</title>
	</head>
	<body>
		<!-- 数据代理：通过一个对象代理对另一个对象中属性的操作（读/写）-->
		<script type="text/javascript" >
			let obj = {x:100}
			let obj2 = {y:200}

			Object.defineProperty(obj2,'x',{
				get(){
					return obj.x
				},
				set(value){
					obj.x = value
				}
			})
		</script>
	</body>
</html>
```

> 我们通过修改obj2的x属性值，就可以修改obj的x属性值。我们获取obj2的x属性值，就可以获取到obj的x属性值。这里我们就实现了通过obj2对obj对象中x属性的操作。

### Vue中的数据代理

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>Vue中的数据代理</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>		
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>学校名称：{{name}}</h2>
			<h2>学校地址：{{address}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		
		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
				address:'宏福科技园'
			}
		})
	</script>
</html>
```

效果如图：

![Vue数据代理](./assets/2021-12-23_06-55-20.jpg)



通过下面这张示意图，来了解下Vue完成数据代理的一个简单流程

![Vue数据代理示意图](./assets/2021-12-23_06-45-45.jpg)

**总结：**

> 1.Vue中的数据代理：
> 			             通过vm对象来代理data对象中属性的操作（读/写）
> 2.Vue中数据代理的好处：
> 			             更加方便的操作data中的数据
> 3.基本原理：
> 							通过Object.defineProperty()把data对象中所有属性添加到vm上。
> 							为每一个添加到vm上的属性，都指定一个getter/setter。
> 							在getter/setter内部去操作（读/写）data中对应的属性。



## 事件处理



### 事件的基本使用

我们可以使用 `v-on` 指令 (通常缩写为 `@` 符号) 来监听 DOM 事件，并在触发事件时执行一些 JavaScript。用法为 `v-on:click="methodName"` 或使用快捷方式 `@click="methodName"`

示例代码如下：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件的基本使用</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<!-- <button v-on:click="showInfo">点我提示信息</button> -->
			<button @click="showInfo1">点我提示信息1（不传参）</button>
			<button @click="showInfo2($event,66)">点我提示信息2（传参）</button>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		const vm = new Vue({
			el:'#root',
			data:{
				name:'尚硅谷',
			},
			methods:{
                showInfo(){
                    alert('同学你好！')
                },
				showInfo1(event){
					// console.log(event.target.innerText)
					// console.log(this) //此处的this是vm
					alert('同学你好！')
				},
				showInfo2(event,number){
					console.log(event,number)
					// console.log(event.target.innerText)
					// console.log(this) //此处的this是vm
					alert('同学你好！！')
				}
			}
		})
	</script>
</html>
```

小结：

> **事件的基本使用：**
>
> ​              1.使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名；
>
> ​              2.事件的回调需要配置在methods对象中，最终会在vm上；
>
> ​              3.methods中配置的函数，不要用箭头函数！否则this就不是vm了；
>
> ​              4.methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象；
>
> ​              5.@click="methodName" 和 @click="methodName($event)" 效果一致，但后者可以传参；

### 事件修饰符

在事件处理程序中调用 `event.preventDefault()` 或 `event.stopPropagation()` 是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。

- 为了解决这个问题，Vue.js 为 `v-on` 提供了**事件修饰符**。之前提过，修饰符是由点开头的指令后缀来表示的。

  - `.stop` 阻止事件冒泡（常用）；
  - `.prevent` 阻止默认事件（常用）
  - `.once` 事件只触发一次（常用）；
  - `.capture `使用事件的捕获模式；
  - `.self `  只有event.target是当前操作的元素时才触发事件；
  - `.passive` 事件的默认行为立即执行，无需等待事件回调执行完毕；

  ```html
  <!-- 阻止单击事件继续冒泡 -->
  <a @click.stop="doThis"></a>
  
  <!-- 提交事件不再重载页面 -->
  <form @submit.prevent="onSubmit"></form>
  
  <!-- 修饰符可以串联 -->
  <a @click.stop.prevent="doThat"></a>
  
  <!-- 只有修饰符 -->
  <form @submit.prevent></form>
  
  <!-- 添加事件监听器时使用事件捕获模式 -->
  <!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 -->
  <div @click.capture="doThis">...</div>
  
  <!-- 只当在 event.target 是当前元素自身时触发处理函数 -->
  <!-- 即事件不是从内部元素触发的 -->
  <div @click.self="doThat">...</div>
  ```

  使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 `v-on:click.prevent.self` 会阻止所有的点击，而 `v-on:click.self.prevent` 只会阻止对元素自身的点击。

  ```html
  <!-- 点击事件将只会触发一次 -->
  <a @click.once="doThis"></a>
  ```

  不像其它只能对原生的 DOM 事件起作用的修饰符，`.once` 修饰符还能被用到自定义的[组件事件](https://v3.cn.vuejs.org/guide/component-custom-events.html)上。如果你还没有阅读关于组件的文档，现在大可不必担心。



示例代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件修饰符</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
		<style>
			*{
				margin-top: 20px;
			}
			.demo1{
				height: 50px;
				background-color: skyblue;
			}
			.box1{
				padding: 5px;
				background-color: skyblue;
			}
			.box2{
				padding: 5px;
				background-color: orange;
			}
			.list{
				width: 200px;
				height: 200px;
				background-color: peru;
				overflow: auto;
			}
			li{
				height: 100px;
			}
		</style>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<!-- 阻止默认事件（常用） -->
			<a href="http://www.atguigu.com" @click.prevent="showInfo">点我提示信息</a>

			<!-- 阻止事件冒泡（常用） -->
			<div class="demo1" @click="showInfo">
				<button @click.stop="showInfo">点我提示信息</button>
				<!-- 修饰符可以连续写 -->
				<!-- <a href="http://www.atguigu.com" @click.prevent.stop="showInfo">点我提示信息</a> -->
			</div>

			<!-- 事件只触发一次（常用） -->
			<button @click.once="showInfo">点我提示信息</button>

			<!-- 使用事件的捕获模式 -->
			<div class="box1" @click.capture="showMsg(1)">
				div1
				<div class="box2" @click="showMsg(2)">
					div2
				</div>
			</div>

			<!-- 只有event.target是当前操作的元素时才触发事件； -->
			<div class="demo1" @click.self="showInfo">
				<button @click="showInfo">点我提示信息</button>
			</div>

			<!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； -->
			<ul @wheel.passive="demo" class="list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>

		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods:{
				showInfo(e){
					alert('同学你好！')
					// console.log(e.target)
				},
				showMsg(msg){
					console.log(msg)
				},
				demo(){
					for (let i = 0; i < 100000; i++) {
						console.log('#')
					}
					console.log('累坏了')
				}
			}
		})
	</script>
</html>
```



### 键盘事件

在监听键盘事件时，我们经常需要检查特定的按键。Vue 允许为 `v-on` 或者 `@` 在监听键盘事件时添加按键修饰符。

示例代码：

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>键盘事件</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>		
		<!-- 准备好一个容器-->
		<div id="root">
			<h2>欢迎来到{{name}}学习</h2>
			<input type="text" placeholder="按下回车提示输入" @keydown.huiche="showInfo">
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		Vue.config.keyCodes.huiche = 13 //定义了一个别名按键

		new Vue({
			el:'#root',
			data:{
				name:'尚硅谷'
			},
			methods: {
				showInfo(e){
					// console.log(e.key,e.keyCode)
					console.log(e.target.value)
				}
			},
		})
	</script>
</html>
```

小结：

> 1. Vue中常用的按键别名：
>
> ​              回车 => enter
>
> ​              删除 => delete (捕获“删除”和“退格”键)
>
> ​              退出 => esc
>
> ​              空格 => space
>
> ​              换行 => tab (特殊，必须配合keydown去使用)
>
> ​              上 => up
>
> ​              下 => down
>
> ​              左 => left
>
> ​              右 => right
>
> 
>
> 2. Vue未提供别名的按键，可以使用按键原始的key值去绑定，但注意要转为kebab-case（短横线命名）
>
> 
>
> 3. 系统修饰键（用法特殊）：ctrl、alt、shift、meta
>
> ​              (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
>
> ​              (2).配合keydown使用：正常触发事件。
>
> 
>
> 4. 也可以使用keyCode去指定具体的按键（不推荐，[因为已经从 Web 标准中删除了](https://developer.mozilla.org/zh-CN/docs/Web/API/KeyboardEvent/keyCode)）
>
> 
>
> 5. Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名



## 计算属性与监视

## Class 与 Style 绑定

## 条件渲染

## 列表渲染

## 收集表单数据

## 过滤器

## 内置指令与自定义指令

## Vue实例生命周期