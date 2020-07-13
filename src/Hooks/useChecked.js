import { useReducer } from 'react'

function init(initCheckedMap) {
  for (let i in initCheckedMap) {
    initCheckedMap[i] = { checked: initCheckedMap[i].checked }
  }
  return initCheckedMap
}

export default function useCountChanger(initCheckedMap) {
  const [checkedMap, checkedDispatch] = useReducer(checkedReducer, initCheckedMap, init)

  function checkedReducer(state, action) {
    const {
      type,
      payload: { id, checked, checkAll, deleteIds, setCheckedMapData },
    } = action
    const newState = JSON.parse(JSON.stringify(state))
    switch (type) {
      case 'check':
        newState[id] = {}
        newState[id].checked = checked
        return newState
      case 'checkAll':
        // newState.checkAll = checkAll
        for (let i in newState) {
          newState[i] = {}
          newState[i].checked = checkAll
        }
        return newState
      case 'delete':
        if (deleteIds) {
          deleteIds.forEach((id) => {
            delete newState[id]
          })
        }
        return newState
      case 'setCheckedMap':
        return setCheckedMapData
      default:
        throw new Error('Unexpected type:' + type)
    }
  }

  return {
    checkedMap,
    checkedDispatch,
  }
}
