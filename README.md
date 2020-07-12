imporve 分支
React.memo + useRef + useEffect 优化重复渲染

imporve2 分支
1、使用 useReducer 替换 useRef ，优化子组件使用陈旧值问题
2、自定义 Hook：

- useCountChanger,抽离商品数量变化的逻辑
- useChecked,抽离商品是否勾选的逻辑
- useSelectedFoodList，抽离已选择的商品列表状态的逻辑

注意：
如果 Reducer Hook 的返回值与当前 state 相同，React 将跳过子组件的渲染及副作用的执行。（React 使用 Object.is 比较算法 来比较 state。）
针对这一问题，本 Demo 在 React.memo 的第二个 areEqual 参数和 useReducer 的 reducer 中均使用了 JSON.parse(JSON.stringify(state))的方式来比较前后值的变化
