import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        // footer section starts 
        <div className="footer mt-3">
            <div className="container text-start py-3">
                <div className="row ">

                    {/* website name and address starts */}
                    <div className="col-md-5">
                        <div className="col-md-5">

                            <span style={{ color: '#0D6EFB', fontWeight: 'bold' }}> <i class="fas fa-plane-departure"></i> One Click Travel</span>

                            <br />
                            <small style={{ color: '#0D6EFB' }}>Explore & Enjoy!</small>
                            <br />
                            <small>Visit our agency or simply send us an email anytime you want. If you have any questions, please feel free to contact us.</small>
                            <br />


                        </div>
                        <div className="col-md-2">

                        </div>
                    </div>
                    {/* website name and address ends */}


                    {/* footer link starts */}
                    <div className="col-md-7">
                        <div className="row">

                            <div className="col-md-3">
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Services</a></li>
                                    <li><a href="#">Our Guides</a></li>
                                    <li><a href="#">Location</a></li>
                                    <li><a href="#">Gallery</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <ul>
                                    <li><a href="#">Get help</a></li>
                                    <li><a href="#">Read FAQs</a></li>
                                    <li><a href="#">View Blogs</a></li>
                                    <li><a href="#">Book Now</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <small>Address: 21/1 A Street, A Road, NewYork</small>
                                    <br />

                                    <small>Call us:
                                        443-997-6896,
                                        443-213-0237
                                    </small>

                                    <br />
                                    <small> Write us:
                                        office@one-click-travel.com
                                    </small>

                                    <br /> <br />
                                    <h4 className="text-center">

                                        <i class="fab fa-facebook"></i>
                                        &nbsp;&nbsp;
                                        <i class="fab fa-twitter"></i>
                                        &nbsp;&nbsp;
                                        <i class="fab fa-instagram"></i>
                                        &nbsp;&nbsp;
                                        <i class="fas fa-envelope-open"></i>

                                    </h4>

                                </ul>
                            </div>

                        </div>
                    </div>
                    {/* footer link ends */}

                </div>

                {/* copyright starts  */}
                <div className="container text-start py-3">
                    <div className="row">
                        <div className="col-md-4">
                            <small>&copy; IT DevTool, 2021 </small>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <a href="">Privacy policy</a>
                            <a href="">Terms condition</a>
                        </div>
                    </div>

                </div>
                {/* copyright ends  */}

            </div>
        </div>
        // footer section ends 

    );
};

export default Footer;