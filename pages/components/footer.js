import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
          <footer className="contact">
          {/* Gradient */}
          <div className="gradient" />
          {/* container Start*/}
          <div className="container">
            <div className="row" data-aos="fade-up" data-aos-duration={400}>
              <div className="col-lg-6 col-md-12 col-12 columns-1">
                <h2>Our Address</h2>
                <address>
                  <p>Yoga Piece, 2nd Floor, Basia Enclave Part(II) </p>
                  <p>Opposite that sec.10 (City Bus Stand)</p>
                  <p>Opening Hrs : Mo-Fr 6am to 10am & 5pm to 8pm, Sa-Su (Special Cases)</p>
                  <p>
                    Call for Bookings : <span>9999 760 139</span>
                  </p>
                </address>
              </div>
              <div className="col-lg-1 col-md-12 col-12" />
              <div className="col-lg-5 col-md-12 col-12 columns-2">
                <h2>Quick Contact</h2>
                <form className="row form-inline">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                      disabled
                    />
                  </div>
                  <div className="col-md-6 form-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required=""
                      disabled
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      rows={5}
                      cols={70}
                      defaultValue={""}
                      disabled
                    />
                  </div>
                  <div className="col-md-12">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* container Ended*/}
          <div className="copyright">
            <div className="container">
              <div className="row border-img">
                <div className="col-md-12">
                  <img src="images/border.png" alt="" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row" data-aos="fade-up" data-aos-duration={400}>
                <div className="col-lg-3 col-md-12">
                  <Link href="index">
                    <img src="images/footer-logo-bg.png" alt="logo" />
                  </Link>
                </div>
                <div className="col-lg-9 col-md-12 right-part">
                  <ul className="ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link active" href="/">
                        Home <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li>
                      <a className="hidden-xs">~</a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/services">
                        Our Services
                      </Link>
                    </li>
                    <li>
                      <a className="hidden-xs">~</a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/products">
                        Our Products
                      </Link>
                    </li>
                    <li>
                      <a className="hidden-xs">~</a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="rates">
                        Rates
                      </Link>
                    </li>
                    <li>
                      <a className="hidden-xs">~</a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blog-page">
                        Read Blog
                      </Link>
                    </li>
                  </ul>
                  <p>
                    (C) 2024 All Rights Reserved. Designed by{" "}
                    <Link
                      href="https://www.template.net/editable/websites/html5"
                      target="_blank"
                    >
                      Nitin.Jangra
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )
}
