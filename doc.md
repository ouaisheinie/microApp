# single-spa

1. single-spa本身没有处理样式隔离、js执行隔离。
2. single-spa实现了路由劫持和应用加载。

3. qiankun是基于single-spa的。提供了更加开箱即用的api。(single-spa + sandbox + import-html-entry)，做到了和技术栈无关，并且接入简单。

4. 子应用可以独立构建，运行时动态加载。主应用、子应用完全解耦，和技术栈无关。靠的是协议接入(子应用必须导出bootstrap, mount, unmount方法)。

## iframe问题

子应用切换路由时，用户刷新页面就很尴尬，状态丢失了。路由切换了，刷新刷的是主应用，状态就丢失了，子应用的显示就不会正常了，除非用长期能保存状态的方案。
刷新页面后，iframe内原有的路由状态丢失，会跳转到默认设置的页面。

## 应用通信

1. 基于URL来进行数据传递，效率低。
2. 基于customEvent源生API自定义事件来实现通信，postmessage。
3. 基于props主子应用间通信。
4. 使用全局变量，redux等进行通信。

## 公共依赖

1. cdn - externals
2. webpack5 联邦模块

## 导出子应用

vue应用导出，用single-spa-vue进行导出.
