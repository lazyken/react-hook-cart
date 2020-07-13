import { useReducer } from 'react'
import { FoodMap, Food } from '../types'

type reducerAction =
  | { type: 'add'; payload: { food: Food } }
  | { type: 'reduce'; payload: { food: Food } }
  | { type: 'check'; payload: { food: Food; checked: boolean } }
  | { type: 'checkAll'; payload: { checkAll: boolean } }
  | { type: 'deleteFoods'; payload: { deleteIds: string[] } }
  | { type: 'setFoodMap'; payload: { setFoodMapData: FoodMap } }

export default function useFoodStatusMap(initFoodMap: FoodMap): any {
  const [foodMap, foodStatusDispatch] = useReducer(foodStateChangeReducer, initFoodMap)

  function foodStateChangeReducer(state: any, action: reducerAction) {
    switch (action.type) {
      case 'add':
        return {
          ...state,
          [action.payload.food.spuId]: {
            ...state[action.payload.food.spuId],
            count: state[action.payload.food.spuId].count + 1,
          },
        }
      case 'reduce':
        return {
          ...state,
          [action.payload.food.spuId]: {
            ...state[action.payload.food.spuId],
            count: state[action.payload.food.spuId].count - 1,
          },
        }
      case 'check':
        return {
          ...state,
          [action.payload.food.spuId]: {
            ...state[action.payload.food.spuId],
            checked: action.payload.checked,
          },
        }
      case 'checkAll':
        for (let i in state) {
          state[i] = {
            ...state[i],
            checked: action.payload.checkAll,
          }
        }
        return {
          ...state,
        }
      case 'deleteFoods':
        if (action.payload.deleteIds) {
          action.payload.deleteIds.forEach((id) => {
            delete state[id]
          })
        }
        return {
          ...state,
        }
      case 'setFoodMap':
        return action.payload.setFoodMapData
      default:
        throw new Error()
    }
  }

  return {
    foodMap,
    foodStatusDispatch,
  }
}
