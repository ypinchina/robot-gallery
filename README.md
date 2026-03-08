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


# React Hooks

Hooks是React 16.8引入的新特性，它允许在函数组件中使用state和其他React特性，而无需编写类组件。
Hooks就是钩子，出现的原因是为了给函数组件添加state和其他React特性。
函数式组件轻量了很多，因为它没有了类组件的this绑定问题，也没有了类组件的生命周期问题。



# 纯函数与副作用  ， 纯函数就是 只要给了一样的参数条件，永远返回相同的结果

但是有副作用的函数不是纯函数，比如生命周期里渲染数据，接口是放在后端服务器上的，每次调用都可能返回不同的结果，所以不是纯函数，所以有副作用


# 高阶组件

高阶组件（HOC）是一种React组件，它接受一个组件作为参数，并返回一个新的组件。
HOC的作用是在不改变原组件的情况下，添加一些新的功能或行为。

```
const EnhancedComponent = withEnhancement(OriginalComponent);
```
HOC自身不是React API的一部分，它是一种设计模式，用于在React中实现代码复用和功能扩展。


# 为什么要使用高阶组件

* 代码复用：HOC可以将一些通用的功能或行为提取出来，封装成一个高阶组件，然后在多个组件中重复使用。
* 条件渲染：HOC可以根据一些条件，动态地选择是否渲染原组件或添加一些新的组件。
* 捕获/劫持被处理组件的生命周期方法，在合适的时机执行一些额外的逻辑。

做项目其实完全可以不使用HOC， 但是为了代码更优雅，更符合React的设计思想，我们可以使用HOC来实现代码复用和功能扩展。

并且第三方库大量使用了HOC来实现代码复用和功能扩展。学习HOC可以帮助我们更好地理解React的设计思想，也可以帮助我们更好地使用第三方库。




# 自定义Hook

* Hook是函数
* 自定义Hook的名称必须以use开头
* 内部可以使用其他的Hook
* 并非React API的一部分，它是一种设计模式，用于在React中实现代码复用和功能扩展。