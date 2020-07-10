import React, { useState } from 'react'
import './index.less'

function areEqual(prevProps, nextProps) {
  if (Object.is(prevProps.foodData, nextProps.foodData)) {
    return true
  } else {
    return false
  }
}

export default React.memo(function Food(props) {
  const { foodData, onCountChangeRef } = props
  const [count, setCount] = useState(1)

  function handleAddFood() {
    setCount(count + 1)
    onCountChangeRef.current.onAddFoodCount(foodData)
  }

  function handleReduceFood() {
    if (count > 1) {
      setCount(count - 1)
      onCountChangeRef.current.onReduceFoodCount(foodData)
    } else {
      alert('商品数量不能小于1')
    }
  }

  return (
    <div className='food-item'>
      {console.log('render food item')}
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
}, areEqual)
