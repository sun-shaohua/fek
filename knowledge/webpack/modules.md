# modules(模块)

在模块化编译过程中，开发者将程序分解为功能离散的chunk，并称指为模块。

每个模块都拥有小于完整程序的体积，使得调试，测试，验证变得简单。精心编写的 模块 提供了可靠的抽象和封装界限，使得应用程序中每个模块都具备了条理清晰的设计和明确的目的。

**Node.js 从一开始就支持模块化编程。 然而，web 的 模块化 正在缓慢支持中。 
在 web 界存在多种支持 JavaScript 模块化的工具，这些工具各有优势和限制。 Webpack 从这些系统中汲取了经验和教训，并将 模块 的概念应用到项目的任何文件中。**

# 何为webpack的模块

与node.js模块相比，webpack能依各种方式来表达它们的依赖，下面是一些示例：
- Es2015 import 语句
- CommonJS require() 语句
- AMD define和require语句
- css/less/sass文件中的@import语句
- stylesheet的url或者Html <img src=""> 文件中的图片链接

# 支持的模块类型
- ECMAScript 模块
- CommonJS 模块
- AMD 模块 //异步模块定义
- Assets
- WebAssembly 模块

通过loader可以使webpack支持多种语言和预处理器语法编写的模块。loader向webpack描述了如何处理非原生模块，并将相关依赖引入到你的bundles，
webpack 社区已经为各种流行的语言和预处理器创建了 loader，其中包括：


