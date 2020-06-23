// 函式元件
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter} from 'react-router-dom'

 // components
import MyNavBar from '../../../components/Navbar'
import MyMenu from '../../../components/NavbarMenu'
import MyFooter from '../../../components/Footer'

import MembersLeft from '../ComponentMembersLeft'

// 測試圖片
import logo from '../../../assets/img/tw.jpg';

function MembersCartDetail() {
    return (
        <Fragment>
            <header>
                <MyNavBar />
                <MyMenu />
            </header>
            <main>
                <div className="members_all">
                    <MembersLeft/>
                    <div className="members_right">
                        <div className="members_right_inner">
                            {/* title */}
                            <div className="members_r_top_text">
                                <h1>清單詳情</h1>
                                <p>管理你的清單以保護你的荷包</p>
                            </div>
                            {/* 主要內容 */}
                            <div className="members_cart_r_bottom">
                                <ul className="cart_r_change">
                                    <li className="cart_r_changeBtn changeBtn_active">內容</li>
                                </ul>
                                
                                {/* 模板 start */}
                                <div className="members_cart_r_num">
                                    <ul className="cart_r_list">
                                        {/* 模板 外 */}
                                        <li className="cart_r_list_inner">
                                            <div className="cart_r_title">
                                                <span>訂單編號 :</span>
                                                <span>20200530U00001</span>
                                            </div>

                                            {/* 流程 */}
                                            {/* <div className="cart_r_detail">

                                            </div> */}

                                            {/* 收貨地址 */}
                                            <div className="cart_r_detail_address">
                                                <h3>收件地址</h3>
                                                <ul>
                                                    <li><span>姓名</span><span>莊杰翰</span></li>
                                                    <li><span>手機</span><span>(+886) 988220903</span></li>
                                                    <li><span>地址</span><span>新北市火星區地球路一段413號１樓 全家火星噴火店</span></li>
                                                </ul>
                                            </div>

                                            {/* 模板 內 */}
                                            <div className="cart_r_list_row">
                                                <div className="cart_r_list_row_p_all">
                                                    <img src={logo}/>
                                                    <div className="cart_r_list_row_p">
                                                        <p>超級貴耳機 Apple pro 無聲耳機</p>
                                                        <p>顏色：黑色</p>
                                                        <p>數量： 1</p>
                                                    </div>
                                                </div>
                                                <span className="cart_r_list_price">$ 15673</span>
                                            </div>

                                            <div className="cart_r_list_row">
                                                <div className="cart_r_list_row_p_all">
                                                    <img src={logo}/>
                                                    <div className="cart_r_list_row_p">
                                                        <p>超級貴耳機 Apple pro 無聲耳機</p>
                                                        <p>顏色：黑色</p>
                                                        <p>數量： 1</p>
                                                    </div>
                                                </div>
                                                <span className="cart_r_list_price">$ 15673</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className="cart_r_list_total">
                                        <li className="cart_r_list_total_li">
                                            <span className="cart_r_list_total_li_span">訂單金額：</span>
                                            <span className="cart_r_list_total_li_price">$ 31346</span>
                                        </li>
                                        <li className="cart_r_list_total_search">
                                            <Link to="/KMembers/MembersCartDetail/">查看詳情</Link>
                                        </li>
                                    </ul>
                                </div>
                                 {/* 模板 end */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <MyFooter />
        </Fragment>
    )

}
export default withRouter(MembersCartDetail);