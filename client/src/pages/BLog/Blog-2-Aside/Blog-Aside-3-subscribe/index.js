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



// -------------------- components --------------------

// -------------------- scss --------------------

// -------------------- imgs --------------------
import NextPageHover from '../../../../assets/img/blog-img/blog-standard/next-page-hover.svg'

// -------------------- func --------------------

function BlogAsideSubscribe(props) {
  return (
    <>
      <div className="link-subscribe">
        <div className="link-subscribe-border">
          <h5>訂閱</h5>
          <div className="link-subscribe-in blog-d-flex blog-justify-content-between">
            <input type="text" placeholder="Email address" />
            <button>
              <img src={NextPageHover} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default withRouter(BlogAsideSubscribe)