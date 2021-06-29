# native-ssr
原生ssr
express + react 

安装nodemon，监控文件变化


1、服务器书写react组件
2、使用webpack打包服务器代码到dist目录中
3、利用@babel/preset-react解析react代码
4、利用externals配置和webpack-node-externals排除掉node_modules目录
5、重新配置package.json
6、渲染页面组件的内容到div

遇到的问题
1.import没法识别，所以需要@babel/core babel-loader @babel-preset-react
react-dom  把虚拟dom节点变成真实dom节点，可以把虚拟dom节点渲染成字符串（有了字符串就可以实现ssr了）