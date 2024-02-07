import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect } from 'react';
import AOS from "aos";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  // const closeNav = () => {

  // }
  // const openNav = () => {

  // }
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <>
        {/* Banner section Start */}
        <section className="banner-home">
          {/* Gradient */}
          <div className="gradient" />
          {/* container Start*/}
          <div className="container">
            {/*Row Start*/}
            <div className="row">
              <div className="col-sm-12">
                <h1 data-aos="fade-left">Develop Body, Mind and Sprit!</h1>
                <h2 data-aos="fade-left" data-aos-delay={5000}>
                  With Yoga, the Ultimate Transformation....
                </h2>
                <p data-aos="fade-left" data-aos-delay={200}>
                  <i className="fa fa-clock-o" aria-hidden="true" />
                  <span>We Are open Morning(6 to 10) Evening(5 to 8) </span>
                </p>
                <p data-aos="fade-left" data-aos-delay={300}>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  <span>Call for Special Discounts: 9999760139</span>
                </p>
                <p data-aos="fade-left" data-aos-delay={400}>
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>nitinjangid731@gmail.com</span>
                </p>
                <Link
                  data-aos="fade-left"
                  data-aos-delay={500}
                  className="btn btn-success"
                  href="about"
                  role="button"
                >
                  our story
                </Link>
              </div>
            </div>
            {/*Row Ended*/}
          </div>
          {/* container Ended*/}
        </section>
        {/* Banner section Ended */}
        {/* About section start*/}
        <section className="about">
          {/* container Start*/}
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12 heading">
                <img src="images/leaf.png" alt="" />
                <h2>Yoga as a lifestyle, Body &amp; Soul</h2>
                <h3>interesting blog posts on creativity and design</h3>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 col-sm-12 col-12 box-1"
                data-aos="fade-right"
                data-aos-duration={400}
              >
                <div className="circle">
                  <div className="gradient" />
                  <div className="circle__inner">
                    <div className="circle__wrapper">
                      <div className="circle__content">
                        <h4>
                          <Link href="products">
                            Yoga <span>for</span> Life
                          </Link>
                        </h4>
                        <p>
                          <Link href="products">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-12 col-12 box-2"
                data-aos="fade-up"
                data-aos-duration={400}
              >
                <div className="circle">
                  <div className="gradient" />
                  <div className="circle__inner">
                    <div className="circle__wrapper">
                      <div className="circle__content">
                        <h4>
                          <Link href="products">
                            Yoga <span>for</span> Life
                          </Link>
                        </h4>
                        <p>
                          <Link href="products">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 col-sm-12 col-12 box-3"
                data-aos="fade-left"
                data-aos-duration={400}
              >
                <div className="circle">
                  <div className="gradient" />
                  <div className="circle__inner">
                    <div className="circle__wrapper">
                      <div className="circle__content">
                        <h4>
                          <Link href="products">
                            Yoga <span>for</span> Life
                          </Link>
                        </h4>
                        <p>
                          <Link href="products">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* container Ended*/}
        </section>
        {/* About section Ended*/}
        {/* Services section start*/}
        <section className="services">
          {/* container-fluid Start*/}
          <div className="container-fluid">
            <div className="row" data-aos="fade-up" data-aos-duration={400}>
              <div className="col-md-3">
                <figure>
                  <img src="images/services-bg.jpg" alt="The Pulpit Rock" />
                </figure>
                <div className="gradient" />
              </div>
              <div className="col-md-9 right-part">
                <div className="row">
                  <div className="col-md-12">
                    <h2>Yoga Is Good For Everyone!</h2>
                    <h3>Good for all men, women and childrens</h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. a galley of type and scrambled...
                    </p>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-xl-4 col-lg-6 col-md-6 col-12 contant-part-1">
                        <ul>
                          <li>
                            <i className="fa fa-envira" aria-hidden="true" />
                            <span>
                              <Link href="services">Yoga Cures Cancer</Link>
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-envira" aria-hidden="true" />
                            <span>
                              <Link href="services">Yogs Makes You Young</Link>
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-envira" aria-hidden="true" />
                            <span>
                              <Link href="services">Get Fit and Well</Link>
                            </span>{" "}
                          </li>
                          <li>
                            <i className="fa fa-envira" aria-hidden="true" />
                            <span>
                              <Link href="services">Yoga Is Great!</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-xl-4 col-lg-6 col-md-6 col-12 contant-part-2">
                        <ul>
                          <li>
                            <i className="fa fa-envira" aria-hidden="true" />
                            <span>
                              <Link href="services">Yoga Cures Cancer</Link>
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-envira" aria-hidden="true" />
                            <span>
                              <Link href="services">Yogs Makes You Young</Link>
                            </span>
                          </li>
                          <li>
                            <i className="fa fa-envira" aria-hidden="true" />
                            <span>
                              <Link href="services">Get Fit and Well</Link>
                            </span>{" "}
                          </li>
                          <li>
                            <i className="fa fa-envira" aria-hidden="true" />
                            <span>
                              <Link href="services">Yoga Is Great!</Link>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* container-fluid Ended*/}
        </section>
        {/* Services section Ended*/}
        {/* Section-4 section start*/}
        <section className="section-4">
          {/* container-fluid Start*/}
          <div className="container-fluid">
            <div className="row" data-aos="fade-up" data-aos-duration={400}>
              <div className="col-md-9 right-part">
                <div className="row">
                  <div className="col-md-12 heading">
                    <h2>Control, Body &amp; Mind!</h2>
                    <h3>Good for all men, women and childrens</h3>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-3 col-6">
                        <figure>
                          <img src="images/services-bg.jpg" alt="The Pulpit Rock" />
                        </figure>
                      </div>
                      <div className="col-md-3 col-6">
                        <figure>
                          <img src="images/blog-1.jpg" alt="The Pulpit Rock" />
                        </figure>
                      </div>
                      <div className="col-md-3 col-6">
                        <figure>
                          <img src="images/blog-2.jpg" alt="The Pulpit Rock" />
                        </figure>
                      </div>
                      <div className="col-md-3 col-6">
                        <figure>
                          <img src="images/blog-3.jpg" alt="The Pulpit Rock" />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. a galley of type and scrambled Lorem Ipsum is simply
                      dummy typesetting industry. a galley of type and scrambled...
                    </p>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                      industry. a galley of type and scrambled......
                    </p>
                    <Link
                      href="#"
                      className="btn btn-primary btn-lg active"
                      role="button"
                      aria-pressed="true"
                    >
                      Gallery
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-secondary btn-lg active"
                      role="button"
                      aria-pressed="true"
                    >
                      book now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <figure>
                  <img src="images/section-4-bg.jpg" alt="The Pulpit Rock" />
                </figure>
                <div className="gradient" />
              </div>
            </div>
          </div>
          {/* container-fluid Ended*/}
        </section>
        {/* Section-4 section Ended*/}
        {/* Blog section start*/}
        <section className="blog">
          {/* container Start*/}
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12 heading">
                <img src="images/leaf.png" alt="" />
                <h2>Some useful Yoga Articles for you!</h2>
                <h3>Good for all men, women and childrens</h3>
              </div>
            </div>
            <div className="row" data-aos="fade-up" data-aos-duration={400}>
              <div className="col-md-12 col-12">
                <div className="row">
                  <div className="col-lg-6 col-md-12 col-12">
                    <div className="row">
                      <div className="col-md-4">
                        <figure>
                          <Link href="blog_single">
                            <img
                              src="images/blog-1.jpg"
                              className="zoom"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-12">
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
              <div className="col-md-12 col-12 button">
                <Link className="btn btn-success" href="blog-page" role="button">
                  Gallery
                </Link>
              </div>
            </div>
          </div>
          {/* container Ended*/}
        </section>
        {/* Blog section Ended*/}
      </>

    </main>
  );
}
