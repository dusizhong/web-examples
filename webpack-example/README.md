# 使用Webpack构建项目
可用于SPA单页、MPA多页面WEB项目打包。

### 新建项目
* mkdir webpack-example
* cd webpack-example
* npm init -y
* npm install --save-dev webpack webpack-cli

### 添加lodash包
* npm install --save-dev lodash

### 添加打包html包，省去打包后手动拷贝html文件到dist目录
* npm install --save-dev html-webpack-plugin

### 添加打包css文件包，默认下css会打包到chunk文件中
* npm install --save-dev style-loader css-loader

### 添加css优化包，将css文件单独打包（可选）
* npm install --save-dev mini-css-extract-plugin


### 打包项目
* npm run build


## 参考资料：
* https://webpack.js.org/guides

* hash、 chunkhash 和 contenthash使用
`
在 webpack 中有三种生成哈希值规则的方式，可以用来区分文件是否修改。
hash 与整个项目有关，项目里有文件修改，所有文件的哈希值都会变化。
chunkhash 与入口有关，同一入口的文件被视为一个整体，当其中一个文件修改时，同入口的所有文件哈希值发生改变。
contenthash 只与文件内容有关，文件内容发生改变，才会更改该文件的哈希值。
善用文件的哈希值，解决浏览器缓存导致的资源未及时更新的问题。
`