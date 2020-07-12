import { useReducer } from 'react'

export default function useCountChanger(initCount) {
  if (typeof initCount !== 'number') {
    initCount = 0
  } else if (initCount < 0) {
    initCount = 0
  }

  const [count, countDispatch] = useReducer(countReducer, initCount)

  function countReducer(state, action) {
    switch (action.type) {
      case 'add':
        return handleAddFood(state)
      case 'reduce':
        return handleReduceFood(state)
      default:
        throw new Error()
    }
  }

  function handleAddFood(state) {
    return state + 1
  }

  function handleReduceFood(state) {
    // 默认商品数量不小于0
    if (state > 0) {
      return state - 1
    } else {
      return state
    }
  }

  return {
    count,
    countDispatch,
  }
}
