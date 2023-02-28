/*
 * @Descripttion : EsSwap
 * @version      : 1.0.0
 * @Author       : 0xBalance
 * @Date         : 2023-02-27 00:07:49
 * @LastEditors  : 0xBalance
 * @LastEditTime : 2023-02-28 22:50:33
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

ReactDOM.render(
  <Router>
    <ScrollToTop />
    <App />
  </Router>,
  document.getElementById('root')
)
