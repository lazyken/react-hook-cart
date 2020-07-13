import React from 'react'
// import useCountChanger from '../../Hooks/useCountChanger.js'
import './index.less'

function areEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps.foodData) === JSON.stringify(nextProps.foodData)
}

export default React.memo(function Food(props) {
  const { foodData, foodStatusDispatch } = props

  if (!foodData) {
    throw new Error('check failed prop:foodData.')
  }

  function handleAddFood() {
    foodStatusDispatch({ type: 'add', payload: { food: foodData } })
  }

  function handleReduceFood() {
    if (foodData.count < 1) {
      alert('商品数量不能小于0')
    } else {
      foodStatusDispatch({ type: 'reduce', payload: { food: foodData } })
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
        {foodData.count >= 0 && (
          <span className='icon-count' onClick={handleReduceFood}>
            -
          </span>
        )}
        {foodData.count >= 0 && <span className='food-count'>{foodData.count}</span>}
        <span className='icon-count' onClick={handleAddFood}>
          +
        </span>
      </div>
    </div>
  )
}, areEqual)
