// 函式元件
import React, { Fragment, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink,
  withRouter,
} from 'react-router-dom'

// components
import MyNavBar from '../../components/Navbar'
import MyMenu from '../../components/NavbarMenu'
import MyFooter from '../../components/Footer'

//cart
import CartCrumb from './CartCrumb'
import CartTable from './CartTable'
import '../../assets/scss/cart_table.scss'
// scss
// import './_menu.scss'

function YfangCart(props) {
  return (
    <Router>
      <Fragment>
        <header>
          <MyNavBar />
          <MyMenu />
        </header>
        <CartCrumb />
        <main>
          <CartTable />
        </main>
        <MyFooter />
      </Fragment>
    </Router>
  )
}
export default withRouter(YfangCart)
