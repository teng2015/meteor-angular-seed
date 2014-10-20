#meteor-angular-seed

一个集合了meteor/angular/uirouter/bootstrap等模块的种子项目。

##第三方模块

* meteor v0.9.4
* angular v1.3.0-beta.8
* bootstrap v3
* uirouter
* ngMeteor

> 修改了ngMeteor等部分模块，使之更符合个人的使用习惯。

##根目录结构

* client/ 所有的客户端代码
* packages/ 使用的包，可以使用`meteor add [name]`命令加载
* public/ 静态资源
* server/ 所有的服务端代码
* private/ 服务端数据
* tests/ 测试
* config.coffee 项目的配置文件
* mobile-config.js 生成手机app的配置文件
* readme.md
* .gitignore


##client子目录结构

* client/directives/ 自定义的angular derectives
* client/service/ 自定义的angular service
* client/filter/ 自定义的angular filter
* client/lib/ 自定义的js模块
* client/modules/ 所有的页面模块


##项目初始化

在项目的angular module中引入angular-meteor即可使用。

    my = angular.module 'my',['meteor-angular']

##使用angular template

新建template.html:

    <template name="template1.html">
    <div>Hello...[[username]]</div>
    </template>

在引入`meteor-angular`后，`template.html`会被自动注入到angular的`$templateCache`，你可以像使用普通的angular template一样使用它。

> 为避免和meteor自带模板引擎产生冲突，angular的模板引擎识别符修改为`[[`和`]]`，同时meteor自带模板引擎标识符`{{`和`}}`也可以正常使用。

## 文件加载顺序

### 使用Meteor.startup

### packages

### 默认加载顺序

javascript和css文件加载顺序会按照以下规则：

* 先加载最底层目录的文件，最后加载顶层目录文件
* 如果在同一个目录，则按照文件名顺序加载
* lib目录文件会移动到加载列表最前面
* 匹配`main.*`的文件会移动到加载列表最后面