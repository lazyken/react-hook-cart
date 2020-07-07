import React, { useState } from 'react'
import FoodItem from '../../components/foodItem'
import foodData from '../../dataConfig.js'
import './index.less'

const cartLight = 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/03098cb323a0263fdbbb102c696433c5.png'
const cartDark = 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/c6896f9806bdcb2399cb680fb5dec8c0.png'

export default function Home() {
  const [selectedFoodList, setSelecteFoodList] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  function handleAddFood(food) {
    const newFoodList = [...selectedFoodList]
    newFoodList.push(food)
    setSelecteFoodList(newFoodList)
    setTotalPrice(totalPrice + food.currentPrice)
  }

  function handleReduceFood(food) {
    let fillterFoods = [...selectedFoodList]
    const firstTargetIndex = fillterFoods.findIndex((item) => {
      return item.spuId === food.spuId
    })
    if (firstTargetIndex > -1) {
      fillterFoods.splice(firstTargetIndex, 1)
      setSelecteFoodList(fillterFoods)
      setTotalPrice(totalPrice - food.currentPrice)
    }
  }

  return (
    <div className='home-page'>
      <div className='food-list'>
        {foodData.map((food, index) => {
          return (
            <FoodItem
              className='food-item'
              foodData={food}
              key={index}
              onAddFood={() => {
                handleAddFood(food)
              }}
              onReduceFood={() => {
                handleReduceFood(food)
              }}
            ></FoodItem>
          )
        })}
      </div>
      <div className='cart-control'>
        <div className='cart'>
          {selectedFoodList.length > 0 ? <span className='cart-food-count'>{selectedFoodList.length}</span> : null}
          <img className='icon-cart' src={totalPrice > 0 ? cartLight : cartDark} alt='' />
        </div>
        <span className='total-price'>¥{totalPrice}</span>
        <span className='order'>下单</span>
      </div>
    </div>
  )
}
