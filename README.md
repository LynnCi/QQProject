# qqproject

> A Vue.js project

# 技术栈
vue2 + vuex + vue-router + webpack + ES6/7 + fetch／axios + sass + flex + svg

## 项目结构
├── build                       // 构建相关  
├── config                      // 配置相关
├── dist                        // 打包的部署文件
├── node_modules                // 模块安装的文件夹
├── screenshots                 // 项目截图
├── src                         // 核心代码
│   ├── assets                  // 静态资源
│   ├── components              // 组件
│   ├── page                    // 页面
│   ├── router                  // 路由
│   ├── service                 // 请求服务
│   ├── store                   // 仓库存储
│   ├── style                   // 样式
│   ├── utils                   // 公用方法
│   ├── App.vue                 // 入口页面
│   └── main.js                 // 入口 加载组件 初始化等
├── static                      // 第三方不打包资源
├── .babelrc                    // babel-loader 配置
├── .editorconfig               // 代码编辑 配置项
├── .eslintignore               // eslint 忽略项
├── .eslintrc.js                // eslint 配置项
├── .gitignore                  // git 忽略项
├── favicon.ico                 // favicon图标
├── index.html                  // html模板
├── package-lock.json           // package-lock.json
├── package.json                // package.json
└── README.md                   // 说明文档

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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
