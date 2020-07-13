import { useReducer } from 'react'
import { FoodMap, CheckedMap } from '../types'

type reducerAction =
  | { type: 'check'; payload: { id: string; checked: boolean } }
  | { type: 'checkAll'; payload: { checkAll: boolean } }
  | { type: 'delete'; payload: { deleteIds: string[] } }
  | { type: 'setCheckedMap'; payload: { setCheckedMapData: CheckedMap } }

export default function useChecked(initCheckedMap: FoodMap): any {
  const [checkedMap, checkedDispatch] = useReducer(checkedReducer, initCheckedMap)

  function checkedReducer(state: any, action: reducerAction) {
    switch (action.type) {
      case 'check':
        state[action.payload.id].checked = action.payload.checked
        return state
      case 'checkAll':
        for (let i in state) {
          state[i].checked = action.payload.checkAll
        }
        return state
      case 'delete':
        if (action.payload.deleteIds) {
          action.payload.deleteIds.forEach((Id: string) => {
            delete state[Id]
          })
        }
        return state
      case 'setCheckedMap':
        return action.payload.setCheckedMapData
      default:
        throw new Error()
    }
  }

  return {
    checkedMap,
    checkedDispatch,
  }
}
