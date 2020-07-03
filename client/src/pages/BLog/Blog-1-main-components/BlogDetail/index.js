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
    useParams,
} from 'react-router-dom'
// antd
import { message } from 'antd';
// -------------------- components --------------------
import MyNavBar from '../../../../components/Navbar'
import MyMenu from '../../../../components/NavbarMenu'
import MyFooter from '../../../../components/Footer'
// 麵包削
import BlogCrumb from '../BlogCrumb'
// 引入Main
import BlogMainDetailArticles from '../../Blog-2-main/Blog-Main-Detail-1-Articles'
import BlogMainDetailLike from '../../Blog-2-main/Blog-Main-Detail-2-Like'
import BlogMainDetailComments from '../../Blog-2-main/Blog-Main-Detail-3-Comments'
// 引入Aside
import BlogAsidePhoto from '../../Blog-2-Aside/Blog-Aside-1-Photo'
import BlogAsideCommunity_2 from '../../Blog-2-Aside/Blog-Aside-2-2-Community'
import BlogAsideSubscribe from '../../Blog-2-Aside/Blog-Aside-3-subscribe'
import BlogAsideRecent from '../../Blog-2-Aside/Blog-Aside-4-Recent'

// -------------------- scss --------------------
import '../../../../assets/scss/blog_detail.scss'

// -------------------- imgs --------------------

// -------------------- func --------------------

function BlogDetail(props) {
    const { userdata, setUserdata, name, setName } = props.allprops;
    // const { match } = props;
    // let {id} = match.params;
    // let { id } = useParams()

    let { detailId } = useParams()
    // message.success(detailId);
    return (
        <>
            <div className="blog-detail-spacing"></div>
            <div className="wrap-top">
                <div className="blog-crumb">
                    <Link to="/">首頁</Link>/<Link to="../YongBlog">部落格個人頁</Link>/<Link to="/BlogDetail">文章內容</Link>
                </div>
            </div>
            <div className="wrap-mid">
                <div className="blog-detail blog-d-flex">
                    <div className="blog-detail-main">
                        <BlogMainDetailArticles                            
                            allprops={{
                                userdata,
                                setUserdata,
                                name,
                                setName
                            }}
                        />
                        <div className="blog-detail-spacing"></div>
                        <BlogMainDetailLike />
                        <BlogMainDetailComments                         
                            allprops={{
                                userdata,
                                setUserdata,
                                name,
                                setName
                            }}                            
                        />
                    </div>
                    <div className="blog-detail-aside">
                        <BlogAsidePhoto />
                        <BlogAsideCommunity_2 
                            userdata={userdata}
                        />
                        <BlogAsideSubscribe />
                        <BlogAsideRecent />
                    </div>
                </div>
            </div>
            <div className="spacing"></div>
        </>
    )
}
export default withRouter(BlogDetail)
