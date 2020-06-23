// 函式元件
import React, { useState,useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

function CartBuyerInfo(props) {
  const {userdata, setUserdata} = props
  return (
    <>
      <div className="cart-crumb">
        <div></div>
        <Link to="/">首頁</Link> / <Link to="/YfangCart">購物車</Link>
      </div>  
      <div className="cart-container">
        {/* 購物車步驟圖 */}
        <ul className="cart-step-ul">
          <li className="cart-step-active">
            <div className="icon-box">
              <i className="iconfont icon-address"></i>
            </div>
            <p>個人資料</p>
          </li>
          <li>
            <div className="line"></div>
          </li>
          <li>
            <div className="icon-box">
              <i className="iconfont icon-wuliu"></i>
            </div>
            <p>配送方式</p>
          </li>
          <li>
            <div className="line"></div>
          </li>
          <li>
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
        {/* 購買個人資訊填寫 */}
        <form action="" className="cart-buyerInfo-form">
          <div>
            <div>
              <div>
                <label htmlFor="name">姓名*</label>
                <input type="text" id="name" name="name" required value={userdata.name}/>
                <div className="error">姓名必填*</div>
              </div>
              <div>
                <label htmlFor="address">地址*</label>
                <input type="text" id="address" name="address" required value={userdata.address}/>
                <div className="error">地址必填*</div>
              </div>
              <div>
                <label htmlFor="tel">電話*</label>
                <input type="tel" id="tel" name="tel" required value={userdata.phoneNumber}/>
                <div className="error">電話必填*</div>
              </div>
            </div>
            <div className="buyer-detail">
              <div>
                <label htmlFor="remark">備註</label>
                <textarea
                  name="remark"
                  id="remark"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
            </div>
          </div>
          <div>
            <button type="button"><Link to="/CheckoutDelivery">下一步</Link></button>
          </div>
        </form>
      </div>
    </>
  )
}
export default withRouter(CartBuyerInfo)