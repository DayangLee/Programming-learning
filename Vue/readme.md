Vue学习：
> * demo1
 动态数据绑定（一）<br>
    代码：  [dome1](https://github.com/DayangLee/Programming-learning/blob/master/Vue/demo1)<br>
    效果展示： [dome1展示](https://dayanglee.github.io/Programming-learning/Vue/demo1/index.html)<br>
 任务目的：<ol><li>了解 getter 和 setter</li>
    <li>了解 new</li></ol>
任务描述：这是“动态数据绑定”系列的第一题。我之前经常使用Vue，后来不满足于仅仅使用它，我想了解其内部实现原理，所以就尝试学习其源码，获益匪浅。所以，如果你跟我一样，希望挑战这高难度的事情，那就开启这一系列吧！我们从最简单的开始。其中，动态数据绑定就是Vue最为基础，最为有用的一个功能。这个系列将分成5部分，一步一步来理解和实现这一功能。ok，我们从最简单的开始。给定任意一个对象，如何监听其属性的读取与变化？也就是说，如何知道程序访问了对象的哪个属性，又改变了哪个属性？ 举个例子。
```let app1 = new Observer({name: 'youngwind',age: 25});
        let app2 = new Observer({university: 'bupt',major: 'computer'});
        // 要实现的结果如下：
        app1.data.name // 你访问了 name
        app.data.age = 100; // 你设置了 age，新的值为100
        app2.data.university // 你访问了 university
        app2.data.major = 'science' // 你设置了 major，新的值为 science```
        请实现这样的一个 Observer，要求如下：<ol><li>传入参数只考虑对象，不考虑数组。</li>
<li>new Observer返回一个对象，其 data 属性要能够访问到传递进去的对象。</li>
<li>通过 data 访问属性和设置属性的时候，均能打印出右侧对应的信息。</li></ol>
任务注意事项：<ol><li>不能使用任何第三方的库</li>
<li>程序执行环境为浏览器</li></ol>