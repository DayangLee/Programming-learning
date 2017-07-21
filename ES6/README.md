# ES6

> Babel 将 ES5 转换为 ES6
 * npm install -g babel-cli ---- 全局安装 Babel
 * npm install --save-dev babel-cli ---- 本地安装 babel-cli
 * npm install --save-dev babel-preset-es2015 ---- 本地安装 babel-preset-es2015

 > 配置 .babelrc 文件
```
{
  "presets": [
    "es2015"
  ],
  "plugins": []
}
```

 > Babel 转换 
 * babel src/index.js -o dist/index.js  
    * src/index.js 为原始 ES6 文件
    * dist/index.js 为转换后的 ES5 文件

> 命令简化
  * package.json 中 scripts 对象中添加 "change": "babel src/index.js -o dist/index.js"
  * 添加完成后， 命令 "npm run change' 等同于 'babel src/index.js -o dist/index.js'