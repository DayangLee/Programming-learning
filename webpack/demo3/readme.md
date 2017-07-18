#webpack loader 加载器
* 加载器(loader)： loader 是对应用程序中资源文件进行转换。它们是（运行在 Node.js 中的）函数，可以将资源文件作为参数的来源，然后返回新的资源文件。

* loader解析： loader的解析类似模块，一个loader模块会导出一个方法并且可被nodejs写为可兼容的JavaScript,通常情况下通过npm来管理loader,但你也可以把loader放在自己的应用里。

* 安装loader： npm install xxx-loader --save-dev