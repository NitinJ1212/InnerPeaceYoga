import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

export default function Header() {
    const router = useRouter();
    const currentUrl = router.asPath;
  
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
    return (
        <div>
            <header className="top">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
                        ×
                    </a>
                    <Link className={currentUrl==="/" && "active"} href="/">Home</Link>
                    <Link className={currentUrl==="/about" && "active"} href="about">
                        About
                    </Link>
                    <Link className={currentUrl==="/services" && "active"} href="/services">Services</Link>
                    <Link className={currentUrl==="/products" && "active"} href="/products">Products</Link>
                    <Link className={currentUrl==="/rates" && "active"} href="/rates">Rates</Link>
                    <Link className={currentUrl==="/blog-page" && "active"} href="/blog-page">Blog</Link>
                </div>
                <nav id="navbar">
                    {/* container Start*/}
                    <div className="container">
                        {/*Row Start*/}
                        <div className="row">
                            <div className="col-lg-5 col-md-5 align-self-center left-side">
                                <p>
                                    Do Yoga, Live Young <span>call 9999 760 139</span>
                                </p>
                            </div>
                            <div className="col-lg-2 col-md-2 col-5 align-self-center logo">
                                <a href="index">
                                    <img src="images/nav-logo.png" alt="logo" />
                                </a>
                            </div>
                            <div className="col-lg-5 col-md-5 col-7 align-self-center right-side">
                                <div className="social-icons square">
                                    {/* Page Content */}
                                    <div id="page-content-wrapper">
                                        <span className="slide-menu" onClick={openNav}>
                                            <i className="fa fa-bars" aria-hidden="true" />
                                        </span>
                                    </div>
                                </div>
                                <div className="social-icons another">
                                    <i className="fa fa-facebook-official" aria-hidden="true" />
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                    <i className="fa fa-pinterest" aria-hidden="true" />
                                    <i className="fa fa-youtube" aria-hidden="true" />
                                </div>
                            </div>
                        </div>
                        {/*Row Ended*/}
                    </div>
                    {/* container Ended*/}
                </nav>
                <img className="border-img" src="images/border.png" width="100%" alt="" />
            </header>
        </div>
    )
}
