import React from 'react'
import './index.less'

export default class Food extends React.Component {
  render() {
    const { foodData } = this.props

    return (
      <div className='food-item'>
        <img className='food-pic' src={foodData.littleImageUrl} alt='' />
        <div className='food-info'>
          <p className='food-spu-dame'>{foodData.spuName}</p>
          <p className='food-spu-desc'>{foodData.spuDesc}</p>
          <p className='food-sale'>{foodData.sale}</p>
          <p className='foood-current-price'>¥ {foodData.currentPrice}</p>
        </div>
      </div>
    )
  }
}
