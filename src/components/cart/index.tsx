import React from 'react'
import './index.less'
import { FoodMap } from '../../types'

const cartLight = 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/03098cb323a0263fdbbb102c696433c5.png'
const cartDark = 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/c6896f9806bdcb2399cb680fb5dec8c0.png'

type CartControlProps = {
  foodMap: FoodMap
}
function areEqual(prevProps: CartControlProps, nextProps: CartControlProps) {
  return JSON.stringify(prevProps.foodMap) === JSON.stringify(nextProps.foodMap)
}

export default React.memo(function CartControl(props: CartControlProps) {
  const { foodMap = {} } = props

  const foodIds = Object.keys(foodMap)
  let foodNums: number = 0
  const totalPrice = foodIds.reduce((prevSum, next) => {
    const nextFood = foodMap[next]
    if (nextFood.checked) {
      foodNums += Number(nextFood.count)
      return parseFloat((prevSum + Number(nextFood.currentPrice) * Number(nextFood.count)).toFixed(10))
    } else {
      return parseFloat((prevSum + 0).toFixed(10))
    }
  }, 0)
  return (
    <div className='cart-control'>
      <div className='cart'>
        {foodNums > 0 ? <span className='cart-food-count'>{foodNums}</span> : null}
        <img className='icon-cart' src={totalPrice > 0 ? cartLight : cartDark} alt='' />
      </div>
      <span className='total-price'>¥{totalPrice}</span>
      <span className='order'>下单</span>
    </div>
  )
}, areEqual)
