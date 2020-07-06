import React from 'react'
import FoodItem from '../components/foodItem'
import foodData from '../dataConfig.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        {foodData.map((food, index) => {
          return <FoodItem foodData={food} key={index}></FoodItem>
        })}
      </div>
    )
  }
}
