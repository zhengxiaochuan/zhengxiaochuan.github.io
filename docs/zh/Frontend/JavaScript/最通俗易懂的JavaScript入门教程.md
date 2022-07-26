# 最通俗易懂的JavaScript入门教程



前言：“成功没有捷径，脚踏实地一步一个脚印，该来的总会来，不好高骛远，不急功近利，付出总会有回报，不管处于哪个阶段，都要一步一个脚印，踏实的走好每一步！”
你好，我是梦阳辰！快和我一起走进JavaScript的世界吧。

最通俗易懂的JavaScript进阶教程

最通俗易懂的JavaScript实用案例
文章目录
01.JavaScript概述
02.HTML中嵌入JavaScript
03.JavaScript标识符和变量
04.函数的定义和使用
05.JS的数据类型
1.number数据类型
2.boolean数据类型
3.String数据类型
4.Object数据类型
06.在JS当中怎么定义类？怎么new对象？
07.null,undefined,NaN的区别


01.JavaScript概述
1.什么是JavaScript?
JavaScript是运行在浏览器上的脚本语言。简称JS。
JavaScript是网景公司（NetScape)的 布兰登·艾奇 开发的，最初叫做LiveScript。LiveScript的出现让浏览器更加生动，使得页面更具有交互性。
JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

JavaScript在1995年由Netscape公司的Brendan Eich，在网景导航者浏览器上首次设计实现而成。因为Netscape与Sun合作，Netscape管理层希望它外观看起来像Java，因此取名为JavaScript。但实际上它的语法风格与Self及Scheme较为接近。

JavaScript和java没有任何关系，只是语法类似。JavaScript运行在浏览器中，代码由浏览器解释后执行。而Java运行在JVM中。

JavaScript的“目标程序”以普通文本形式保存，这种语言都叫做"脚本语言“。

Java的目标程序已.class形式存在，不能使用文本编辑器打开，不是脚本语言。

1998年网景公司由“美国在线”公司收购。

王景公司最著名的就是“领航者浏览器”：Navigator浏览器。
LiveScript的出现，最初的时候是为Navigator浏览器量身定制一门语言，不支持其他浏览器。

微软一看不行，研发了只支持IE浏览器的脚本语言。JScript。
在两者语言共存的时代，程序员需要写两套程序。这时一个叫做ECMA组织（欧洲计算机协会）根据JavaScript制定了ECMA-262标准，叫做ECMA-Script.

JavaScript是一种属于网络的脚本语言,已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。通常JavaScript脚本是通过嵌入在HTML中来实现自身的功能的。
2.区分JSP和JS
JSP：JavaServer Pages（隶属Java）
JS: JavaScript.


02.HTML中嵌入JavaScript
1.HTML嵌入JavaScript的第一种方式
JS是一门事件驱动型的编程语言，依靠时间去驱动，然后执行对应的程序。在JS中有很多事件，其中一个事件叫做：鼠标单击，单词：click。并且任何事件都会对应一个事件句柄叫做：onclick。【注意：事件和事件句柄的区别是：事件句柄是在事件单词前添加一个on】，而事件是以HTML标签的属性存在的。

οnclick="js代码“，执行原理是什么？
页面打开的时候，js代码并不会执行，只是把这段代码注册到按钮的click事件上了。等这个按钮发生click之后，注册在onclick后面的js代码会被浏览器自动调用。

*怎么使用JS代码弹出消息框。
在JS中有一个内置对象叫做window,全部小写，可以直接拿来使用，window代表的是浏览器对象。

*window对象有一个函数叫做：alert，用法是：window.alert("消息”）;这样就可以弹窗了。

*JS的字符串可以使用双引号，也可以使用单引号。

*JS的一条语句结束之后可以使用分号“；”,也可以不使用。

举例：

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML中嵌入JavaScript的第一种方式</title>
</head>
<body>
    <!--点击按钮弹出消息框-->
    <input type="button" value="Hello" onclick="window.alert('Hello JavaScript!')"/>
    <input type="button" value="Hello" onclick="window.alert('Hello XingKong!')"/>
    <input type="button" value="Hello" onclick="window.alert ('Hello MengYangChen');
                                                alert('Hello MengYang')
                                                alert('Hello Meng')"/>
</body>
</html>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
2.HTML嵌入JavaScript的第二种方式
采用脚本块的方式：
暴露在脚本块中的程序，在页面打开的时候执行，并且遵守自上而下的顺序依次逐行执行。（不需要事件）

JavaScript脚本块可以出现在任何位置，并且可以出现多次。
aler函数会阻塞整个HTML页面的加载。

注释语法跟Java一样。

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML嵌入JavaScript的第二种方式</title>
</head>
<body>
    <input type="button" value="我是一个。。"/>
    <script type="text/javascript">
        window.alert("hello world!");
    </script>
    <input type="button" value="我是一个按钮对象"/>
</body>
</html>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
3.HTML嵌入JavaScript的第三种方式（推荐）
引入外部的js文件。

引入js脚本文件的语句：
同一个脚本文件可以引入多次。
脚本文件直接写语句就好了。

<script type="text/javascript" src="路径和文件名“></script>
1
结束的< /script>标签必须有，不能用反斜杠取代，引入文件时，其中间的代码不会执行。

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML中嵌入JavaScript的第三种方式</title>
</head>
<body>
<script type="text/javascript" src="file/JS1.js"></script>
</body>
</html>
1
2
3
4
5
6
7
8
9
10
03.JavaScript标识符和变量
1.标识符的命名规则跟Java相同。

2.变量：
声明变量：
var 变量名；

赋值：
变量名=值
javascript是一种弱类型语言，没有编译阶段，一个变量可以随意给其赋值。什么类型的都可以。

变量没有手动赋值时，默认赋值为：undefined。
未声明变量使用会报错。

2.局部变量和全局变量
类似C语言：

全局变量在函数体之外声明。浏览器关闭的时候才会销毁。

局部变量:在函数体内部声明。在函数体执行完后才销毁。

3.当一个变量声明的时候没有使用var关键字，那么不管这个变量是在哪里声明的，都是全局变量。


04.函数的定义和使用
1.JS中的函数怎么定义呢?
语法格式：
第一种方式：
function 函数名（形式参数列表）{
函数体；
}
第二种方式：
函数名=function(形式参数列表）{
函数体；
}

JS中的函数不需要指定返回值类型，返回什么类型的数据都没问题。

函数的形参也不需要声明。
如：

<script>
function sum (a,b){
alert(a+b);
}
//或者
sum=function(a,b){
alert(a+b);
}
</script>
1
2
3
4
5
6
7
8
9
在调用函数的时候，如果没有传参数的值，或则传了一部分，剩下未传的参数默认赋值undefined。

NaN是一个具体的值，该值表示不是数字。

如果实参的数量大于形式参数的个数，默认只取前面两个数据。即没有数量限制（弱类型语言）。因此可以看出，JS不需要重载。
2.JS的函数不能重载。
如果出现同名函数，后面定义的函数会把前面定义的函数覆盖。
因此JS函数不能重名。分辨函数就是根据函数名来分辨。

05.JS的数据类型
1.JS数据类型有:原始类型，引用类型。
原始类型：Undefined,Number,String,Boolean,Null
引用类型:Object以及子类。

2.在ES6规范后，又基于以上6种类型添加了一种新的类型：Symbol。

3.JS中有一个运算符叫做typeof,这个运算符可以在程序的运行阶段动态地获取变量的数据类型。

typeof运算符的语法格式：
typeof 变量名

typeof运算符的运算结果时以下6个字符串(全小写）结果之一：
“undefined"
“number”
“string”
“boolean”
“object”
“function”

var d=null;
alert(typeof d);//“object”
比较字符串是否相等用双等号。

4.Undefined数据类型只有一个值。这个值就是undefined，当一个变量没有手动赋值，系统默认赋值为undefined，当然也可以手动赋值为undefined。

1.number数据类型
如：NaN，表示Not a Number不是一个数字，但是属于Number类型。

Infinity，表示无穷大。

0,-1,123,…小数，复数，无穷大都是属于number类型。

除数为0时，结果为无穷大。

函数isNaN（数据）：结果为true表示不是一个数字。
parseInt()函数：可以将字符串自动转换成数字。保留Int
parseFloat()函数：将字符串转换成数字。
Math.Ceil()函数：向上取整。2.1会变为3。

2.boolean数据类型
在boolean类型中有一个Boolean（）函数，会将非boolean类型，转换成boolean类型。
当某个地方一定是boolean类型时，会自动转换成boolean类型。例如if后面的括号。
NaN,0,"",null,undefined会自动转换成false.

3.String数据类型
1.在JS当中字符串可以使用单引号和双引号。
2.在JS当中，怎么创建字符串对象
第一种：var s=“sag”;（小String，属于String类型）
第二种：var a2= new String(“ab”);（大String，属于Object类型）
Sting是一个内置的类，可以直接使用。

3.无论是小String还是大Sting字符串的长度相同。其中又一个length属性求长度(x.length)

常用函数：
indexof: 获取指定字符串在当前字符串中第一次出现的索引
lastIndexof
replace
substr
substring
toLowerCase
toUpperCase
spilt 拆分字符串

例如:alert(“fasdf".indexof(“sdf”));

replace只替换最前面一个子字符串
如果想全部替换需要使用正则表达式。

substr和substring的区别。
substr(startIndex length)

substring(startIndex endIndex)左闭右开。

4.Object数据类型
1.首先Object类型是所有类型的超类，自定义的任何类型，默认继承Object。

2.Object的prototype属性
作用：给类动态地扩展属性和函数。

3.Object类的函数：

toString()
valueof()
toLocalString()

4.在JS中定义的类默认继承Object的属性和函数。

06.在JS当中怎么定义类？怎么new对象？
1.定义类的语法：
第一种方式：
function 类名（形参）{
}
第二种方式：
类名 function (形参）{
}

小朋友你是不是有很多问号？这不是函数的定义方式么？

注意：用了new就是把他当作类看，如果没有new则是把它当作普通的函数看待。

创建对象的语法：
new 构造函数名（实参）；//构造函数和类名一致

2.JS中类的定义，同时又是一个构造函数的定义

在JS中类的定义和构造函数的定义是放在一起来完成的。

如：
function User(a,b,c){
this.sno =a;
this.sname=b;
this.sage=c;
}
//a,b,c是形参，属于局部变量
//声明属性（this 表示当前对象）
//User类中有三个属性：sno/sname/sage

3.创建对象：
var u1 = new User(111,“lisi”,30)

4.访问对象的属性：
alert(u1.sno)
alert(u1.sname)
alert(u1.sage)

或者用另一种语法访问属性：
alert(u1[“sno”]);
alert(u1[“sage”]);

定义类的另一种语法：
Emp = function (ename ,sal)
this.ename =ename;
this.sal=sal;
}

5.在类中如何定义函数:

Product = function(pno,pname,price){
//属性
this.pno=pno;
this.pname=pname;
this.price=price;
//函数
this.getPrice =function(){
 return this.price
}
//new对象
var pro = new Product(111,"西瓜",4.0)
//调用函数
var pri = pro.getPrice();
alert(pri);//4.0
1
2
3
4
5
6
7
8
9
10
11
12
13
14
6.通过prototype这个属性来动态扩展属性以及函数
//给Product类扩展函数：
Product.prototype.getPname=function(){
return this.pname;
}

//给String类扩展函数
String.prototype.getPname=function(){
alert(“Hello”);
}

7.JS与Java的对比：


07.null,undefined,NaN的区别
1.数据类型不一致

alert(typeof null);//Object
alert(typeof NaN);//number
alert(typeof undefined);//undefined

1
2
3
4
2.null和undefined可以等同

alert(null=NaN);//false
alert(null=undefined);//true
alert(underfined=NaN);false

1
2
3
4
在JS当中有两个比较特殊的运算符：

1."==" :等同运算符：只判断值是否相等（双等号）
2."= = ="：全等运算符：既判断值是否相等，又判断数据类型是否相等。（三等号）

alert(11 == ture);//true
alert(11=== ture);//false
1
2
对于this等内容学过Java的就应该秒懂，如果你没有学Java，建议看看梦阳辰 写的Java专栏。

梦阳辰的Java专栏

至此JavaScript的入门教程结束：感谢看到这里！别忘了素质三连啊！
————————————————
版权声明：本文为CSDN博主「轻松玩编程」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/jiahuan_/article/details/105895421
