本项目是一个用于展示机器人画廊的web页面

练习react开发的demo项目

知识点：

React.FC

FC代表的是Function Component，它是React中定义函数组件的一种方式。



* React 并不强制使用jsx语法，也可以使用普通的javascript函数来定义组件。
* React认为视图的本质是渲染逻辑与UI视图表现的内在统一
* React把HTML与渲染逻辑进行了耦合，形成了JSX    




* 安装 typescript-plugin-css-modules 插件 和 配置 .vscode/settings.json 让vscode支持css modules 

* css in js, 模块化导入css，每个组件都有自己的css文件，不会互相干扰



* state 与 props的区别

* props用于组件之件的数据传递，state用于组件内部的数据传递 


* constructor是唯一能初始化state的地方

* 多个state的修改会在某次nextTick一起更新，不是马上更新，这个过程是异步的


# React组件的生命周期

* mounting 挂载阶段: 创建虚拟DOM，渲染到真实DOM上,渲染UI
* updating 更新阶段: 组件的props或state发生变化时，会触发更新阶段，重新渲染UI
* unmounting 卸载阶段: 组件从DOM中移除时，会触发卸载阶段，清理组件的资源