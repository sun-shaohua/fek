# package

## dependencies和devDependencies的区别

### dependencies
- 字段指定了项目运行所依赖的模块，生产环境使用。
- 安装依赖包用 npm install [依赖包名称] --save ，这个依赖包就会出现在dependencies下面。

### devDependencies
- 指定项目开发所需要的模块，开发和测试环境使用。
- 安装依赖包用 npm install [依赖包名称] --save-dev ，这个依赖包就会出现在devDependencies下面。

