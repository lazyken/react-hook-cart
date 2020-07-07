import React, { useState } from 'react'
import './index.less'

export default function Food(props) {
  const { foodData, onAddFood, onReduceFood } = props
  const [count, setCount] = useState(0)

  function handleAddFood() {
    setCount(count + 1)
    if (typeof onAddFood === 'function') {
      onAddFood()
    }
  }

  function handleReduceFood() {
    if (count > 0) {
      setCount(count - 1)
      if (typeof onReduceFood === 'function') {
        onReduceFood()
      }
    }
  }

  return (
    <div className='food-item'>
      <img className='food-pic' src={foodData.littleImageUrl} alt='' />
      <div className='food-info'>
        <p className='food-spu-dame'>{foodData.spuName}</p>
        <p className='food-spu-desc'>{foodData.spuDesc}</p>
        <p className='food-sale'>月售{foodData.sale}</p>
        <p className='foood-current-price'>¥ {foodData.currentPrice}</p>
      </div>
      <div className='count-control'>
        {count > 0 && (
          <span className='icon-count' onClick={handleReduceFood}>
            -
          </span>
        )}
        {count > 0 && <span className='food-count'>{count}</span>}
        <span className='icon-count' onClick={handleAddFood}>
          +
        </span>
      </div>
    </div>
  )
}
