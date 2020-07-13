import React from 'react'
import FoodItem from '../../components/foodItem'
import CartControl from '../../components/cart'
import foodDataConfig from '../../dataConfig.js'
import useFoodStatusMap from '../../Hooks/useFoodStatusMap.js'
import useChecked from '../../Hooks/useChecked.js'

import './index.less'

function FoodArrayToMap(list) {
  const foodMapData = {}
  list.forEach((food) => {
    foodMapData[food.spuId] = Object.assign({ count: 0, checked: false }, food)
  })
  return foodMapData
}

export default function Home() {
  const { foodMap, foodStatusDispatch } = useFoodStatusMap(FoodArrayToMap(foodDataConfig))
  const { checkedMap, checkedDispatch } = useChecked(FoodArrayToMap(foodDataConfig))

  function handleDelete() {
    const foodIds = Object.keys(foodMap)
    const filterFoods = []
    const deleteIds = []
    foodIds.forEach((id) => {
      if (foodMap[id].checked) {
        deleteIds.push(id)
      } else {
        filterFoods.push(foodMap[id])
      }
    })
    if (deleteIds.length) {
      foodStatusDispatch({ type: 'deleteFoods', payload: { deleteIds } })
      checkedDispatch({ type: 'delete', payload: { deleteIds } })
    }
  }
  function handleReset() {
    foodStatusDispatch({ type: 'setFoodMap', payload: { setFoodMapData: FoodArrayToMap(foodDataConfig) } })
    checkedDispatch({ type: 'setCheckedMap', payload: { setCheckedMapData: FoodArrayToMap(foodDataConfig) } })
  }

  function handleChecked(food, checked) {
    foodStatusDispatch({ type: 'check', payload: { food, checked } })
    checkedDispatch({ type: 'check', payload: { id: food.spuId, checked } })
  }

  function handleCheckedAll(checkAll) {
    foodStatusDispatch({ type: 'checkAll', payload: { checkAll } })
    checkedDispatch({ type: 'checkAll', payload: { checkAll } })
  }

  let isCheckAll = Object.keys(checkedMap).length > 0
  for (let i in checkedMap) {
    if (!checkedMap[i].checked) {
      isCheckAll = false
    }
  }

  return (
    <div className='home-page'>
      {Object.keys(foodMap).length !== foodDataConfig.length && (
        <span className='init-cart' onClick={handleReset}>
          重置购物车
        </span>
      )}
      <div className='food-list'>
        {Object.keys(foodMap).map((foodId, index) => {
          const food = foodMap[foodId]
          return (
            <div className='foodItem-with-check' key={foodId}>
              <div className='food-check-input-wrap'>
                <input
                  type='checkbox'
                  className='food-check-input'
                  checked={!!(checkedMap[food.spuId] && checkedMap[food.spuId].checked)}
                  onChange={(e) => {
                    handleChecked(food, e.target.checked)
                  }}
                />
              </div>
              <FoodItem className='food-item' foodData={food} foodStatusDispatch={foodStatusDispatch}></FoodItem>
            </div>
          )
        })}
        <div className='check-all'>
          <input
            type='checkbox'
            className='check-all-input'
            id='check-all'
            checked={isCheckAll}
            onChange={(e) => {
              handleCheckedAll(e.target.checked)
            }}
          />
          <label htmlFor='check-all'>全选</label>
          <span className='delete' onClick={handleDelete}>
            删除
          </span>
        </div>
      </div>

      <CartControl foodMap={foodMap}></CartControl>
    </div>
  )
}
