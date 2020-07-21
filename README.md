### 这是使用 react hooks 开发的一个购物车的 Demo

1、使用 React.memo 优化自组件重复渲染
2、使用 useReducer 处理因为使用 React.memo 带来的陈旧值问题
3、自定义 Hook：

- useCountChanger,抽离商品数量变化的逻辑
- useChecked,抽离商品勾选、全选的逻辑
- useSelectedFoodList，抽离商品列表状态处理的逻辑
