import React, { Fragment,useState } from 'react'
import { withRouter, BrowserRouter as Router } from 'react-router-dom'

//import components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'
import LeftNav from '../../Sellers/Leftnav'

//import css
// import '../../../assets/css/AliceSeller/my-sale.css'
//import image
import searchImg from '../../../assets/img/seller/my-sale/search.svg'

function MySale(props) {

  // const SellerProductDataFetch =()=>{
  //   const [SellerProductData, setSellerProductData] = useState([]) 
  //   let SellerDataInner=[];
  //   fetch('http://localhost:3009/products/list',{
  //     method: 'get',
  //     headers: new Headers({
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json',
  //     }),
  // })
  //   .then((response)=>{
  //     return response.json()
  //   })
  //   .then((response)=>{
  //     console.log('response', response);
  //       [...SellerDataInner]=response;
  //       setSellerData(SellerDataInner)

  //     console.log('SellerDataInner',SellerDataInner)
      
  //   })
  // }

  // useEffect(()=>{
  //   SellerProductDataFetch()
  // },[])

  return (
    <Router>
      <Fragment>
        <div>
          <div className="h-100"></div>
          <span className="breadcrumb">
            首頁 &nbsp;/ 訂單管理/ &nbsp;我的訂單
          </span>
          <div className="seller-container">
            <LeftNav />
            <div className="seller-w100-main">
              <div className="seller-mysale">
                <div className="w-90">
                  <div className="seller-toggle">
                    <div className="seller-a" href="www.treefont">
                      全部
                    </div>
                    <div className="seller-a" href="www">
                      尚未付款
                    </div>
                    <div className="seller-a" href="www">
                      待出貨
                    </div>
                    <div className="seller-a" href="www">
                      運送中
                    </div>
                    <div className="seller-a" href="www">
                      已完成
                    </div>
                    <div className="seller-a" href="www">
                      已取消
                    </div>
                    <div className="seller-a" href="www">
                      退貨/退款
                    </div>
                  </div>
                  <htmlForm action="" method="post">
                    <div className="seller-wrapper">
                      <div className="seller-search">
                        <input
                          className="seller-search-bar"
                          type="text"
                          name="search"
                          placeholder="搜尋訂單"
                        />
                        <img
                          className="icon-size seller-search-img"
                          src={searchImg}
                          alt=""
                        />
                      </div>
                      <div className="mysale-createdate">
                        <label>訂單成立時間</label>
                        <input type="date" id="startdate" />
                        &nbsp;-&nbsp;
                        <input type="date" id="enddate" />
                        <button className="seller-exportbtn">匯出</button>
                      </div>
                    </div>
                  </htmlForm>
                  <div className="seller-toggle">
                    <div>全部</div>
                    <div>待處理</div>
                    <div>已處理</div>
                  </div>
                  <div className="seller-wrapper">
                    <h1>訂單</h1>
                    <div className="orderType">
                      <label for="orderType">訂單類型</label>
                      <select id="orderType">
                        <option value="">全部訂單</option>
                      </select>
                      <label for="">排序</label>
                      <select type="date" id="orderOrder">
                        <option value="">訂單確認時間</option>
                      </select>
                      <button id="sendOrderBtn">出貨</button>
                    </div>
                  </div>
                  <table className="seller-table">
                    <thead>
                      <tr>
                        <th>商品</th>
                        <th>買家應付金額</th>
                        <th>付款狀態</th>
                        <th>運送方式</th>
                        <th>出貨狀態</th>
                        <th>調整</th>
                      </tr>
                    </thead>
                    <tbody>
                        {/* {SellerProductData.map((data,index)=>{
                          return(
                            <>
                              <tr>
                              <td>{data.}</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                            </>
                          )
                        })} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MyFooter />
      </Fragment>
    </Router>
  )
}

export default withRouter(MySale)
