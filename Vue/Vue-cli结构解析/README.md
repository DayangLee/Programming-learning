# vue-cli-demo

> A demo of vue-cli

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 项目结构
```
|-- build                            // 项目构建(webpack)相关代码，一般不需要再进行配置
|   |-- build.js                     // 生产环境构建代码
|   |-- check-version.js             // 检查node、npm等版本
|   |-- dev-client.js                // 热重载相关
|   |-- dev-server.js                // 构建本地服务器
|   |-- utils.js                     // 构建工具相关
|   |-- vue-loader.conf.js           // webpack加载器相关
|   |-- webpack.base.conf.js         // webpack基础配置
|   |-- webpack.dev.conf.js          // webpack开发环境配置
|   |-- webpack.prod.conf.js         // webpack生产环境配置
|-- config                           // 项目开发环境配置
|   |-- dev.env.js                   // 开发环境变量
|   |-- index.js                     // 项目一些配置变量
|   |-- prod.env.js                  // 生产环境变量
|   |-- test.env.js                  // 测试环境变量
|-- node_modules                     // 依赖包
|-- src                              // 源码目录（项目核心文件，所写代码都放在此文件夹内）
|   |-- assets                       // 静态资源（样式文件、外部js文件等）
|   |-- components                   // vue公共组件
|   |-- router                       // vue路由
|   |-- store                        // vuex的状态管理
|   |-- App.vue                      // 根组件
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|-- static                           // 静态文件（图片、json数据等）
|   |-- data                         // 群聊分析得到的数据用于数据可视化
|-- .babelrc                         // babel编译参数（ES6语法编译配置）
|-- .editorconfig                    // 定义代码格式
|-- .gitignore                       // git上传需要忽略的文件格式
|-- .postcssrc.js                    // 转换css的工具
|-- index.html                       // 入口页面
|-- package-lock.json                // 依赖版本信息
|-- package.json                     // 项目基本信息
|-- README.md                        // 项目说明
|-- favicon.ico 
```