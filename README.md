#covu

## 推入

如何使用【pull request](https://github.com/koringz/covu/blob/master/pull%20request.md)


## 目录结构 (测试111111111111122222222222222111)

**covu**

```
  |--/build
  |--/config
  |-- /src/
  |		|-- /assets/
  |		|-- /component/
  |			  |-- index.js
  |			  |-- template.vue
  |			  |-- /other component files
  |			  		|-- example.vue
  |			  			  |-- 注：使用covu-component-name定义vue组件
  |			  			  |-- 注：使用covu-[component-name]定义组件class类名
  |			  			  |-- 注：使用covu-style-[other-name]定义其他class类名
  |		|-- /pages/
  |			  |-- /componentname
  |			  		|-- componentname.vue
  |		|-- /router 路由组件
  |			  |-- index.js # 路由入口
  |--/static
  |		|-- loading.js
  |--package.json
  |--index.html
  |--.gitignore
  |--.babelrc
  |--README.md

```		