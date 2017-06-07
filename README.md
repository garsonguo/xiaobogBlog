# xiaobogBlog
* 全栈开发之博客：前端Vue2全家桶+饿了么elementUI；后台node.js+mongodb；
* Markdown语法介绍参照：http://www.appinn.com/markdown/

## 任务
* 本系统将详细讲解各种实现过程
* 脚手架工具详解
* 引入elementUI

### 前端脚手架工具
<ol>
<li>vue脚手架工具安装参照：http://cn.vuejs.org/v2/guide/installation.html
<pre><code>npm install --global vue-cli
vue init webpack my-project
cd my-project
npm install
npm run dev
</code></pre>
</li>
<li>脚手架工具webpack解析之（build/dev-server.js）主要完成以下几件事情</br>
* 检查node和npm的版本</br>
*  引入相关插件和配置</br>
*  创建express服务器和webpack编译器</br>
* 配置开发中间件（webpack-dev-middleware）和热重载中间件</br>（webpack-hot-middleware）
* 挂载代理服务和中间件</br>
* 配置静态资源</br>
* 启动服务器监听特定端口（8080）</br>
* 自动打开浏览器并打开特定网址（localhost:8080）</br>
注：前端开发过程中需要使用到后台的API的话，可以通过配置proxyTable来将相应的后台请求代理到专用的API服务器。
</li>
<li>脚手架工具webpack解析之（webpack.base.conf.js）主要完成以下几件事情</br>
* 配置webpack编译入口</br>
* 配置webpack输出路径和命名规则</br>
* 配置模块resolve规则</br>
* 配置不同类型模块的处理规则</br>
</li>
<li>脚手架工具webpack解析之（build/webpack.dev.conf.js）主要完成以下几件事情</br>
* 将hot-reload相关的代码添加到entry chunks</br>
* 合并基础的webpack配置</br>
* 使用styleLoaders</br>
* 配置Source Maps</br>
* 配置webpack插件</br>
</li>
<li>脚手架工具webpack解析之（build/utils.js和vue-loader.conf.js）主要完成以下几件事情</br>
* 配置静态资源路径</br>
* 生成cssLoaders用于加载.vue文件中的样式</br>
* 生成styleLoaders用于加载不在.vue文件中的单独存在的样式文件</br>
注：vue-loader.conf则只配置了css加载器以及编译css之后自动添加前缀</br>
</li>
<li>脚手架工具webpack解析之（build/build.js）主要完成以下几件事情</br>
* loading动画</br>
* 删除创建目标文件夹</br>
* webpack编译</br>
* 输出信息</br>
注：webpack编译之后会输出到配置里面指定的目标文件夹；删除目标文件夹之后再创建是为了去除旧的内容，以免产生不可预测的影响。
</li>
<li>脚手架工具webpack解析之（build/webpack.prod.conf.js）主要完成以下几件事情</br>
* 合并基础的webpack配置</br>
* 使用styleLoaders</br>
* 配置webpack的输出</br>
* 配置webpack插件</br>
* gzip模式下的webpack插件配置</br>
* webpack-bundle分析</br>
注：webpack插件里面多了丑化压缩代码以及抽离css文件等插件。
</li>
<li>脚手架工具webpack解析之（build/check-versions.js和build/dev-client.js）主要完成以下几件事情</br>
* 对node和npm的版本检测
</li>
<li>脚手架工具webpack解析之（build/index.js）主要完成以下几件事情</br>
* 描述了开发和构建两种环境下的配置</br>
</li>
</ol>

### 引入ElementUI
安装element-ui
<pre><code>npm i element-ui -S
</code></pre>
修改src/main.js，引入ElementUI
