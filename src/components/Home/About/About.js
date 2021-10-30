import React from 'react';
import './About.css'

const About = () => {
    return (

        // about section starts 

        <div id="about" className="container w-100 m-auto p-5 animate__animated animate__bounce">

            {/* Why choose section starts  */}

            <div className="col-md-12 ">
                <h3 className="about-title">Why Choose Us</h3>
                <small className="about-title">
                    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                </small>
            </div>

            {/* why choose us section ends  */}

            {/* six facilities section starts  */}

            <div className="row">



                {/* value for money starts  */}
                <div className="col-md-6 col-lg-4 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <div className="text-start">
                            <h5 className="about-title">Value For Money</h5>
                            <small>We provide our best effort to make your tour smooth. Because we value for your money.</small><br />
                            <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/* value for money ends  */}




                {/* Fast Booking starts  */}
                <div className="col-md-6 col-lg-4 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-calendar-check"></i>

                        </div>
                        <div className="text-start">
                            <h5 className="about-title">Fast Booking</h5>
                            <small>You can simply book your long-cherished tour from our website by one click now. It's too easy.</small><br />
                            <a href="#">Show more</a> <button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/* Fast Booking ends  */}




                {/* Support Team starts  */}
                <div className="col-md-6 col-lg-4 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-headset"></i>
                        </div>
                        <div className="text-start">
                            <h5 className="about-title">Support Team</h5>
                            <small>We provide our best tour guides so that your journey might be more smooth. All our guides are well-trained.</small><br />
                            <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/*Support Team ends  */}



                {/*Attractive Places starts  */}
                <div className="col-md-6 col-lg-4 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="text-start">
                            <h5 className="about-title">Attractive Places</h5>
                            <small>We arrange our tour packages with world's most demanded and beautiful tour spots. So, check it now. </small><br />
                            <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/* Attractive Places ends  */}


                {/* 200+ Destinations starts  */}
                <div className="col-md-6 col-lg-4 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-globe-asia"></i>
                        </div>
                        <div className="text-start">
                            <h5 className="about-title">200+ Destinations</h5>
                            <small>We care for every tourists' wish so we keep arrangement for 200 destinations.</small><br />
                            <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/* 200+ Destinations ends  */}


                {/* Passionate Travel starts  */}
                <div className="col-md-6 col-lg-4 g-4">
                    <div className="d-flex mt-3 about-facilities">
                        <div className="about_us">
                            <i class="fas fa-plane"></i>
                        </div>
                        <div className="text-start">
                            <h5 className="about-title">Passionate Travel</h5>
                            <small>Your beautiful tour is our expectation. Take a break and enjoy your holiday. </small><br />
                            <a href="#">Show more </a><button className="showmore_btn"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                {/* Passionate Travel ends  */}

            </div>

            {/* six facilities section ends  */}

        </div>

        // about section ends 
    );
};

export default About;