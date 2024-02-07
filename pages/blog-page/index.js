import Link from 'next/link'
import React from 'react'

export default function index() {
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <>
      <section className="banner-another ">{/* Banner section Start*/}</section>
      <section className="blog-page">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12 col-12 heading"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <h2>Some useful Yoga Articles for you!</h2>
              <h3>Good for all men, women and childrens</h3>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-12"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-1.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-2.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 col-12"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-3.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-4.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-12"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-1.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-2.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 col-12"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-3.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-4.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-12"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-1.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-2.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-12 col-12"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-3.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <figure>
                        <Link href="blog_single">
                          <img
                            src="images/blog-4.jpg"
                            alt="The Pulpit Rock"
                            width={304}
                            height={228}
                          />
                        </Link>
                      </figure>
                    </div>
                    <div className="col-md-8 inner-content">
                      <h4>
                        <Link href="blog_single">
                          Lorem Ipsum is simply dummy text type and scrambled...
                        </Link>
                      </h4>
                      <p>
                        <span>December 23, 2016</span>Posted by{" "}
                        <b>
                          <Link href="blog_single">Bizzee</Link>
                        </b>
                      </p>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 col-12 button"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <Link className="btn btn-success" href="blog-page" role="button">
                load more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>

  )
}
