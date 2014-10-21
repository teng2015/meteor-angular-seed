#meteor-angular-seed

一个集合了meteor/angular/uirouter/bootstrap等模块的种子项目。


> 暂时还不能使用，完善中……

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

> 为避免和meteor自带模板引擎产生冲突，angular的模板引擎标识符修改为`[[`和`]]`，同时meteor自带模板引擎标识符`{{`和`}}`也可以正常使用。

## 文件加载顺序

### 使用Meteor.startup

### packages

### 默认加载顺序

javascript和css文件加载顺序会按照以下规则：

* 优先加载子目录的文件
* 同级目录文件按文件名排序先后加载
* 经过上述处理后，优先加载`lib`目录
* 匹配`main.*`的文件最后加载


## 反应式

触发反应式的变量：

* Session 变量
* Collections中的数据库查询
* Meteor.status
* subscription handle中的ready()方法
* Meteor.user
* Meteor.userId
* Meteor.loggingIn

反应式函数：

* Templates
* Tracker.autorun
* Blaze.render && Blaze.renderWithData

以下函数会返回一个对象和stop方法，用于停止

* Tracker.autorun
* Meteor.subscribe
* 游标`sursors`的 `observe()` 和 `observerChanges()` 方法


