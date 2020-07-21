### 这是使用 react hooks 开发的一个购物车的 Demo

本 Demo 是在读完 ssh 大佬的专栏后自己仿写的，其中关于性能优化的地方都是参考了文章的知识点。且文章对项目如何开发与优化都做了详细的逐步分析。推荐先阅读原文：
[React Hook + TS 购物车实战（性能优化、闭包陷阱、自定义 hook](https://juejin.im/post/5e5a57b0f265da575b1bc055)

项目有多个分支，分别记录了一些业务逻辑的调整和代码优化：

#### improve 分支

1、使用 React.memo 优化自组件重复渲染  
2、使用 React.Memo+useRef+useEffect 解决陈旧值问题

#### improve2 分支

1、使用 useReducer，通过传递 dispatch 方法解决陈旧值问题  
2、业务调整：增加可勾选业务逻辑；优化调整 FoodItem 和 cart 组件  
3、修改新增自定义 Hook：

- useChecked,抽离商品是否勾选的逻辑
- useSelectedFoodList，抽离已选择的商品列表状态的逻辑

#### master 分支

为最终调整和优化后的项目代码

但是目前还有不足的地方，在 React.memo 和 reducer 函数内部，都使用了`JSON.parse(JSON.stringify())`的方式修改了数据，这样表面上能有效果，但是存在很大隐患，没有理解 react 性能优化的关键点，后续将使用 immutable 数据，进行优化。

#### TS 分支

使用 typescript 重构了项目

#### 预览地址：[https://lazyken.github.io/React-Hook-Cart-Demo/](https://lazyken.github.io/React-Hook-Cart-Demo/)
