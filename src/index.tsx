import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home/index'
import './common/style/reset.less'

ReactDOM.render(
  <Router>
    <Home />
  </Router>,
  document.getElementById('root')
)
