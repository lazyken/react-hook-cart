import { useReducer } from 'react'

export default function useFoodStatusMap(initFoodMap = {}) {
  const [foodMap, foodStatusDispatch] = useReducer(foodStateChangeReducer, initFoodMap)

  function foodStateChangeReducer(state, action) {
    const {
      type,
      payload: { food, checked, deleteIds, checkAll, setFoodMapData },
    } = action
    if (!type) {
      throw new Error(`type should not be${typeof type}`)
    }
    const newState = JSON.parse(JSON.stringify(state))
    switch (type) {
      case 'add':
        if (newState[food.spuId]) {
          newState[food.spuId].count++
        } else {
          newState[food.spuId] = Object.assign(food, { count: 1, checked: false })
        }
        return newState
      case 'reduce':
        if (newState[food.spuId]) {
          newState[food.spuId].count--
        }
        return newState
      case 'check':
        if (newState[food.spuId]) {
          newState[food.spuId].checked = checked
        }
        return newState
      case 'checkAll':
        for (let i in newState) {
          newState[i].checked = checkAll
        }
        return newState
      case 'deleteFoods':
        if (deleteIds) {
          deleteIds.forEach((id) => {
            delete newState[id]
          })
        }
        return newState
      case 'setFoodMap':
        return JSON.parse(JSON.stringify(setFoodMapData))
      default:
        throw new Error('Unexpected type:' + type)
    }
  }

  return {
    foodMap,
    foodStatusDispatch,
  }
}
