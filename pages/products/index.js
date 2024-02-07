import Link from 'next/link';
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
            {/* Header section Ended*/}
            <section className="banner-another ">{/* Banner section Start*/}</section>
            {/* services section Start */}
            <section id="products">
                <div className="container">
                    <h2 data-aos="fade-up" data-aos-delay={200}>
                        Our products
                    </h2>
                    <div className="part-1" data-aos="fade-up" data-aos-delay={400}>
                        <div className="row">
                            <div className="col-md-12 col-12 heading">
                                <h3>
                                    <i className="fa fa-envira" aria-hidden="true" />
                                    Yoga for Old
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12">
                                <figure>
                                    <img src="images/Web-Design.jpg" alt="Web Design" width="100%" />
                                </figure>
                            </div>
                            <div className="col-lg-9 col-md-8 col-12 col1">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="part-2" data-aos="fade-up" data-aos-delay={400}>
                        <div className="row">
                            <div className="col-md-12 heading">
                                <h3>
                                    <i className="fa fa-envira" aria-hidden="true" />
                                    Spring Yoga Sessions
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12">
                                <figure>
                                    <img src="images/psd-to-html.jpg" alt="Web Design" width="100%" />
                                </figure>
                            </div>
                            <div className="col-lg-9 col-md-8 col-12 col1">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="part-2" data-aos="fade-up" data-aos-delay={400}>
                        <div className="row">
                            <div className="col-md-12 heading">
                                <h3>
                                    <i className="fa fa-envira" aria-hidden="true" />
                                    Yoga for Old
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12">
                                <figure>
                                    <img src="images/Web-Design.jpg" alt="Web Design" width="100%" />
                                </figure>
                            </div>
                            <div className="col-lg-9 col-md-8 col-12 col1">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="part-2" data-aos="fade-up" data-aos-delay={400}>
                        <div className="row">
                            <div className="col-md-12 heading">
                                <h3>
                                    <i className="fa fa-envira" aria-hidden="true" />
                                    Spring Yoga Sessions
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-12">
                                <figure>
                                    <img src="images/Web-Design.jpg" alt="Web Design" width="100%" />
                                </figure>
                            </div>
                            <div className="col-lg-9 col-md-8 col-12 col1">
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into
                                    electronic typesetting, remaining essentially unchanged. It was
                                    popularised in the 1960s with the release of Letraset sheets
                                    containing Lorem Ipsum passages, and more recently with desktop
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* services section Ended */}
        </>

    )
}
