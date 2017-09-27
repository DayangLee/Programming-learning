const path = require('path')

module.exports = {
  /* 入口 */
  entry: path.join(_dirname, 'src/index.js'),

  /*输出到dist文件夹，输出文件名字为bundle.js*/
  output: {
    path: path.join(_dirname, './dist'),
    filename: 'bundle.js'
  }
}