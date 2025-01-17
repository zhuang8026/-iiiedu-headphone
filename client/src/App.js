import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

// antd
import { message } from 'antd'

// ScrollToTop
import ScrollToTop from './components/ScrollToTop'

// navbar & footer
import MyNavBar from './components/Navbar'
import MyMenu from './components/NavbarMenu'
import MyFooter from './components/Footer'

// home
import WiHome from './pages/Home'

// Product
import YyProduct from './pages/Product'
import ProductDetail from './pages/Product/ProductDetail'

// Blog
import YongBlog from './pages/BLog/YongBlog'
import YongMyBlog from './pages/BLog/YongMyBlog'
import BlogDetail from './pages/BLog/Blog-1-main-components/BlogDetail'
import BlogAdd from './pages/BLog/Blog-1-main-components/BlogAdd'
import BlogEdit from './pages/BLog/Blog-1-main-components/BlogEdit'

// 會員使用
import KMembers from './pages/Members'
import MembersLogin from './pages/Members/MembersLogin'
import MembersRegister from './pages/Members/MembersRegister'
import MembersPwa from './pages/Members/MembersPwa'
import MembersBank from './pages/Members/MembersBank'
import MembersAdress from './pages/Members/MembersAdress'
import MembersCartList from './pages/Members/MembersCartList'
import MembersCartDetail from './pages/Members/MembersCartDetail'
import MembersBlog from './pages/Members/MembersBlog'
import MembersForget from './pages/Members/MembersForget'

// 超級賣家
import WiSeller from './pages/SuperSeller'
// import SuperSellerOrder from './pages/SuperSeller/SuperSellerOrder'
import SuperSellerItems from './pages/SuperSeller/SuperSellerItems'
import SuperSellerAddItems from './pages/SuperSeller/SuperSellerAddItems'
import SuperSellerWallet from './pages/SuperSeller/SuperSellerWallet'

// 比較功能
import Compare from './pages/Compare/index'

//我的最愛
import MyFav from './pages/MyFav'

// 購物車
import MyCart from './pages/Cart/MyCart' //購物車
import ConfirmOrder from './pages/Cart/ConfirmOrder' //確認訂單
import CheckoutInfo from './pages/Cart/CheckoutInfo' //訂單個人資料填寫
import CheckoutDelivery from './pages/Cart/CheckoutDelivery' //選擇配送方式
import CheckoutPayment from './pages/Cart/CheckoutPayment' //選擇付款方式
import OrderComplete from './pages/Cart/OrderComplete' //購買完成頁

// 靜態頁面
import WiAbout from './pages/About'
import WiStore from './pages/Store'
import WiConnect from './pages/Connect'
import WiGift from './pages/Gift'
import WiProblem from './pages/Problem'
import WiOurClients from './pages/OurClients'
import WiWarranty from './pages/Warranty'

// socket.io
import SocketChat from './pages/SocketChat'

// import NotFoundPage404 from './pages/404'
import MyLoading from './components/Loading'



function App() {
  // navbar
  const [lovechange, setlovechange] = useState([])
  const [compareschange, setcompareschange] = useState([])
  const [cartchange, setcartchange] = useState([])

  // 會員
  const [userdata, setUserdata] = useState([])
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginErrors, setLoginErrors] = useState([])
  const [membersCartOrderData, setMembersCartOrderData] = useState([])

  // 產品列表
  const [itemsdata, setItemsdata] = useState([])
  const [itemsid, setItemsid] = useState('')

  // 賣家中心
  const [sellerOrderData, setSellerOrderData] = useState([])

  //購物流程
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  const [orderTotal, setOrderTotal] = useState(false)
  const [orderName, setOrderName] = useState('')
  const [orderAddress, setOrderAddress] = useState('')
  const [orderTel, setOrderTel] = useState('')
  const [orderRemarks, setOrderRemarks] = useState('')
  const [orderDelivery, setOrderDelivery] = useState('1')
  const [orderPayment, setOrderPayment] = useState('1')
  const [orderCard, setOrderCard] = useState('')
  const [orderId, setOrderId] = useState([])

  // BLOG
  const [listUpdate, setListUpdate] = useState([])

  // 登入 & 狀態判斷
  const loginProcess = (loginSuccessCallback) => {
    const errors = []

    if (username === '') errors.push('帳號沒填！')
    if (password === '') errors.push('密碼沒填！')

    if (errors.length > 0) {
      setLoginErrors(errors)
      message.warning(errors)
      return
    }
    // 清空錯誤訊息陣列 + 登入
    setLoginErrors([])

    loginSuccessCallback()
  }

  // 登入 & 狀態判斷
  const RegisterProcess = (addFromServer) => {
    const errors = []

    if (name === '') errors.push('暱稱沒填！')
    if (username === '') errors.push('帳號沒填！')
    if (password === '') errors.push('密碼沒填！')

    if (errors.length > 0) {
      setLoginErrors(errors)
      message.warning(errors)
      return
    }
    // 清空錯誤訊息陣列 + 登入
    setLoginErrors([])

    addFromServer()
  }

  const localUser = JSON.parse(localStorage.getItem('memberData')) || '' // 取得localStorage資料
  const getUserData = (usernameData, pwdData) => {
    fetch(`http://localhost:3009/members/user/${usernameData}/${pwdData}`, {
      method: 'get',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setUserdata(res[0])
      })
  }

  useEffect(() => {
    getUserData(localUser['username'], localUser['pwd'])
  }, [])

  // 從localStorage獲取-購物車資料
  // const cartData = JSON.parse(localStorage.getItem('cart'));
  // useEffect(()=>{
  //   if (cartData === null) {
  //     return
  //   } else {
  //     setMycart(cartData)
  //   }
  // },[])

  return (
    <Router>
      <header>
        <MyNavBar
          lovechange={lovechange}
          compareschange={compareschange}
          cartchange={cartchange}
          setlovechange={setlovechange}
          setcompareschange={setcompareschange}
          setcartchange={setcartchange}
          setItemsdata={setItemsdata}
          userdata={userdata}
          setUserdata={setUserdata}
        />
        <MyMenu cartchange={cartchange} setcartchange={setcartchange} />
      </header>

      {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
      <ScrollToTop>
        <Switch>
          {/* 首頁 */}
          <Route exact path="/">
            {/* 過場動畫 */}
            <MyLoading/>
            <WiHome />
          </Route>

          {/* 產品列表 */}
          {/* <Route exact path="/YyProduct/:page?/:type?"> */}
          <Route exact path="/YyProduct/:type?">
            <YyProduct
              itemsdata={itemsdata}
              setItemsdata={setItemsdata}
              itemsid={itemsid}
              setItemsid={setItemsid}
              lovechange={lovechange}
              setlovechange={setlovechange}
              setcompareschange={setcompareschange}
              setcartchange={setcartchange}
            />
          </Route>

          {/* 產品細節 */}
          <Route path="/ProductDetail/:id">
            <ProductDetail
              setlovechange={setlovechange}
              setcompareschange={setcompareschange}
              setcartchange={setcartchange}
              lovechange={lovechange}
            />
          </Route>

          {/* 會員 */}
          <Route exact path="/KMembers">
            <KMembers
              allprops={{
                userdata,
                setUserdata,
              }}
            />
          </Route>
          <Route path="/KMembers/MembersLogin">
            <MembersLogin
              allprops={{
                username,
                setUsername,
                password,
                setPassword,
                loginProcess,
                setUserdata,
              }}
            />
          </Route>
          <Route path="/KMembers/MembersRegister">
            <MembersRegister
              allprops={{
                name,
                setName,
                username,
                setUsername,
                password,
                setPassword,
                RegisterProcess,
              }}
            />
          </Route>

          <Route path="/KMembers/MembersForget">
            <MembersForget userdata={userdata} setUserdata={setUserdata} />
          </Route>

          <Route path="/KMembers/MembersRegister">
            <MembersRegister userdata={userdata} setUserdata={setUserdata} />
          </Route>

          <Route path="/KMembers/MembersPwa">
            <MembersPwa userdata={userdata} setUserdata={setUserdata} />
          </Route>

          <Route path="/KMembers/MembersBank">
            <MembersBank userdata={userdata} setUserdata={setUserdata} />
          </Route>

          <Route path="/KMembers/MembersAdress">
            <MembersAdress
              allprops={{
                userdata,
                setUserdata,
              }}
            />
          </Route>

          <Route path="/KMembers/MembersCartList">
            <MembersCartList
              userdata={userdata}
              setUserdata={setUserdata}
              membersCartOrderData={membersCartOrderData}
              setMembersCartOrderData={setMembersCartOrderData}
            />
          </Route>

          <Route path="/KMembers/MembersCartDetail/:orderId">
            <MembersCartDetail
              allprops={{
                userdata,
                setUserdata,
                name,
                setName,
                membersCartOrderData,
                setMembersCartOrderData,
              }}
            />
          </Route>

          <Route path="/KMembers/MembersBlog">
            <MembersBlog userdata={userdata} setUserdata={setUserdata} />
          </Route>
          

          {/* 超級賣家 - William - 20200703 */}
          <Route exact path="/SuperSeller">
            {/* order組件 在 這裡面  */}
            <WiSeller
              allprops={{
                userdata,
                setUserdata,
                sellerOrderData,
                setSellerOrderData,
              }}
            />
          </Route>

          {/* <Route exact path="/SuperSeller/SuperSellerOrder">
            <SuperSellerOrder
              allprops={{
                userdata,
                setUserdata,
                sellerOrderData, 
                setSellerOrderData
              }}
            />
          </Route> */}

          <Route exact path="/SuperSeller/SuperSellerItems">
            <SuperSellerItems
              allprops={{
                userdata,
                setUserdata,
              }}
            />
          </Route>

          <Route exact path="/SuperSeller/SuperSellerAddItems">
            <SuperSellerAddItems
              allprops={{
                userdata,
                setUserdata,
              }}
            />
          </Route>

          <Route exact path="/SuperSeller/SuperSellerWallet">
            <SuperSellerWallet
              allprops={{
                userdata,
                setUserdata,
              }}
            />
          </Route>


          {/* Blog */}
          <Route path="/Blog/YongBlog">
            <YongBlog
              allprops={{
                userdata,
                setUserdata,
                name,
                setName,
                listUpdate,
                setListUpdate,
              }}
            />
          </Route>
          <Route path="/Blog/YongMyBlog">
            <YongMyBlog
              allprops={{
                userdata,
                setUserdata,
                name,
                setName,
                listUpdate,
                setListUpdate,
              }}
            />
          </Route>
          <Route path="/Blog/BlogDetail/:detailId">
            <BlogDetail
              allprops={{
                userdata,
                setUserdata,
                name,
                setName,
                listUpdate,
                setListUpdate,
              }}
            />
          </Route>
          <Route path="/Blog/BlogAdd/">
            <BlogAdd
              allprops={{
                userdata,
                setUserdata,
                name,
                setName,
                listUpdate,
                setListUpdate,
              }}
            />
          </Route>
          <Route path="/Blog/BlogEdit/:editId">
            <BlogEdit
              allprops={{
                userdata,
                setUserdata,
                name,
                setName,
                listUpdate,
                setListUpdate,
              }}
            />
          </Route>

          {/* 購物車 */}
          <Route path="/MyCart">
            <MyCart
              allprops={{
                lovechange,
                setlovechange,
                compareschange,
                setcompareschange,
                cartchange,
                setcartchange,
                mycart,
                setMycart,
                mycartDisplay,
                setMycartDisplay,
                orderTotal,
                setOrderTotal,
              }}
            />
          </Route>
          <Route path="/ConfirmOrder">
            <ConfirmOrder
              allprops={{
                userdata,
                setUserdata,
                mycart,
                setMycart,
                mycartDisplay,
                setMycartDisplay,
                orderTotal,
                setOrderTotal,
              }}
            />
          </Route>
          <Route path="/CheckoutInfo">
            <CheckoutInfo
              allprops={{
                userdata,
                setUserdata,
                mycart,
                setMycart,
                mycartDisplay,
                setMycartDisplay,
                orderName,
                setOrderName,
                orderAddress,
                setOrderAddress,
                orderTel,
                setOrderTel,
                orderRemarks,
                setOrderRemarks,
              }}
            />
          </Route>
          <Route path="/CheckoutDelivery">
            <CheckoutDelivery
              allprops={{
                userdata,
                setUserdata,
                orderDelivery,
                setOrderDelivery,
              }}
            />
          </Route>
          <Route path="/CheckoutPayment">
            <CheckoutPayment
              allprops={{
                userdata,
                setUserdata,
                cartchange,
                setcartchange,
                mycart,
                setMycart,
                mycartDisplay,
                setMycartDisplay,
                orderTotal,
                setOrderTotal,
                orderName,
                setOrderName,
                orderAddress,
                setOrderAddress,
                orderTel,
                setOrderTel,
                orderRemarks,
                setOrderRemarks,
                orderDelivery,
                setOrderDelivery,
                orderPayment,
                setOrderPayment,
                orderCard,
                setOrderCard,
                orderId,
                setOrderId,
                setcartchange,
              }}
            />
          </Route>
          <Route path="/OrderComplete">
            <OrderComplete
              allprops={{
                userdata,
                setUserdata,
                mycart,
                setMycart,
                mycartDisplay,
                setMycartDisplay,
                orderTotal,
                setOrderTotal,
                orderName,
                setOrderName,
                orderAddress,
                setOrderAddress,
                orderTel,
                setOrderTel,
                orderRemarks,
                setOrderRemarks,
                orderDelivery,
                setOrderDelivery,
                orderPayment,
                setOrderPayment,
                orderCard,
                setOrderCard,
                orderId,
                setOrderId,
              }}
            />
          </Route>

          {/* 靜態頁面 */}
          <Route path="/about/WiGift">
            <WiGift />
          </Route>
          <Route path="/about/WiWarranty">
            <WiWarranty />
          </Route>
          <Route path="/about/WiAbout">
            <WiAbout />
          </Route>
          <Route path="/about/WiConnect">
            <WiConnect />
          </Route>
          <Route path="/about/WiStore">
            <WiStore />
          </Route>
          <Route path="/about/WiProblem">
            <WiProblem />
          </Route>
          <Route path="/about/WiOurClients">
            <WiOurClients />
          </Route>
          
          {/* socket */}
          <Route path="/SocketChat">
            <SocketChat />
          </Route>

          {/* 比較頁面 */}
          <Route path="/Compare">
            <Compare 
              setcompareschange={setcompareschange} 
              setcartchange={setcartchange}
            />
          </Route>

          {/* 我的最愛 */}
          <Route path="/MyFav">
            <MyFav 
              setlovechange={setlovechange} 
              setcartchange={setcartchange}
            />
          </Route>
          
          {/* ProtectdRoute 這是 utils */}
          {/* <ProtectedRoute path="/todoapp">
              <TodoApp todos={todos} setTodos={setTodos} isAuth={auth}/>
          </ProtectedRoute> */}

          {/* 404 必须放在最后一个 */}
          {/* Redirect 重新導向 / 需要先引入 */}

          {/* <Route path="/404">
            <NotFoundPage404 />
          </Route>
          <Redirect to="/404" /> */}
        </Switch>
      </ScrollToTop>

      <MyFooter />
    </Router>
  )
}

export default App
