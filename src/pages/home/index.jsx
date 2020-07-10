import React, { useState, useEffect, useRef } from 'react'
import FoodItem from '../../components/foodItem'
import CartControl from '../../components/cart'
import foodData from '../../dataConfig.js'
import './index.less'
// 自定义的类似useRef逻辑，但是当Home组件复用时，_onCountChangeRef还是唯一的会存在bug
// const _onCountChangeRef = {}

export default function Home() {
  const [selectedFoodList, setSelecteFoodList] = useState([])

  const onCountChangeRef = useRef({
    onAddFoodCount: handleAddFood,
    onReduceFoodCount: handleReduceFood,
  })

  function handleAddFood(food) {
    const newFoodList = [...selectedFoodList]
    newFoodList.push(food)
    setSelecteFoodList(newFoodList)
  }

  function handleReduceFood(food) {
    let fillterFoods = [...selectedFoodList]
    const firstTargetIndex = fillterFoods.findIndex((item) => {
      return item.spuId === food.spuId
    })
    if (firstTargetIndex > -1) {
      fillterFoods.splice(firstTargetIndex, 1)
      setSelecteFoodList(fillterFoods)
    }
  }

  // useEffect(() => {
  //   _onCountChangeRef.onAddFoodCount = handleAddFood
  //   _onCountChangeRef.onReduceFoodCount = handleReduceFood
  // })

  useEffect(() => {
    onCountChangeRef.current = {
      onAddFoodCount: handleAddFood,
      onReduceFoodCount: handleReduceFood,
    }
  })

  return (
    <div className='home-page'>
      <div className='food-list'>
        {foodData.map((food, index) => {
          return <FoodItem className='food-item' foodData={food} key={index} onCountChangeRef={onCountChangeRef}></FoodItem>
        })}
      </div>
      <CartControl selectedFoodList={selectedFoodList}></CartControl>
    </div>
  )
}
