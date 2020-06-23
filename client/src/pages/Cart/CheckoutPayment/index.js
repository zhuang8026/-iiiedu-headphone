// 函式元件
import React, { useState,useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { paymentValue } from '../../../actions/cart'


function CartPayment(props) {
  const { userdata, setUserdata } = props
  const [payment, setPayment] = useState('')  
  const updateCheckoutPaymentToLocalStorage = (value) => {
    const currentCheckoutPayment = JSON.parse(localStorage.getItem('CheckoutPayment')) || []
    const newCheckoutPayment = [...currentCheckoutPayment, value]
    localStorage.setItem('CheckoutInfo', JSON.stringify(newCheckoutPayment))
  }
  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/MyCart">購物車</Link>
      </div>
      <div className="cart-container">
        {/* 購物車步驟圖 */}
        <ul className="cart-step-ul">
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>個人資料</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-wancheng"></i>
            </div>
            <p>配送方式</p>
          </li>
          <li>
            <div className="line done"></div>
          </li>
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-card"></i>
            </div>
            <p>付款方式</p>
          </li>
          <li>
            <div className="line"></div>
          </li>
          <li>
            <div className="icon-box">
              <i className="iconfont icon-gift"></i>
            </div>
            <p>訂單完成</p>
          </li>
        </ul>
        {/* 選擇配送方式表單 */}
        <form className="payment-form">
          <div>請選擇付款方式:</div>
          <input
            type="radio"
            name="payment"
            id="paymentId1"
            value="貨到付款"
            required
            checked
          />
          <label htmlFor="paymentId1"> 貨到付款</label>
          <div className="line">
            <div></div>
          </div>
          <input
            type="radio"
            name="payment"
            id="paymentId2"
            value="信用卡"
            required
          />
          <label htmlFor="paymentId2"> 信用卡</label>
          <div className="line">
            <div></div>
          </div>
          <p>以下暫用 待修改</p>
          <input type="text" name="creditCardNum" />
          <input type="text" name="creditCardName" />
          <input
            type="month"
            name="creditCardMonth"
            min="218-01"
            lue="2025-01"
          />
          <div>
            <button type="button"><Link to="/OrderComplete">下一步</Link></button>
          </div>
        </form>
      </div>
    </>
  )
}
export default withRouter(CartPayment)
