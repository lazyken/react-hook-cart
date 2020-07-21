1、使用 useReducer，通过传递 dispatch 方法解决陈旧值问题  
2、业务调整：增加可勾选业务逻辑；优化调整 FoodItem 和 cart 组件  
3、修改新增自定义 Hook：

- useChecked,抽离商品是否勾选的逻辑
- useSelectedFoodList，抽离已选择的商品列表状态的逻辑
