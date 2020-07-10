import React from 'react'
import './index.less'

const cartLight = 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/03098cb323a0263fdbbb102c696433c5.png'
const cartDark = 'https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/c6896f9806bdcb2399cb680fb5dec8c0.png'

function areEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps.selectedFoodList) === JSON.stringify(nextProps.selectedFoodList)
}

export default React.memo(function CartControl(props) {
  const { selectedFoodList = [] } = props
  const totalPrice = selectedFoodList.reduce((prevSum, next) => {
    return parseFloat((prevSum + next.currentPrice).toFixed(10))
  }, 0)
  return (
    <div className='cart-control'>
      <div className='cart'>
        {selectedFoodList.length > 0 ? <span className='cart-food-count'>{selectedFoodList.length}</span> : null}
        <img className='icon-cart' src={totalPrice > 0 ? cartLight : cartDark} alt='' />
      </div>
      <span className='total-price'>¥{totalPrice}</span>
      <span className='order'>下单</span>
    </div>
  )
}, areEqual)
