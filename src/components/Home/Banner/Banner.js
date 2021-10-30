import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.png';
import banner2 from '../../../images/banner/banner2.png';
import banner3 from '../../../images/banner/banner3.png';



const Banner = () => {
    return (
        <>

            {/* Banner slider starts  */}
            <Carousel>

                {/* 1st slider starts */}
                <Carousel.Item>

                    {/* 1st image starts */}
                    <img
                        className="d-block w-100"
                        src={banner1} height="410px"
                        alt="First slide"
                    />
                    {/* 1st image ends */}


                    {/* 1st caption starts */}
                    <Carousel.Caption>
                        <h4 className="mb-2" style={{ color: 'white', backgroundColor: "rgba(0, 0, 0, 0.5)" }}>Life is either a darling adventure or nothing</h4>
                    </Carousel.Caption>
                    {/* 1st caption starts */}

                </Carousel.Item>
                {/* 1st slider ends */}


                {/* 2nd slider starts */}
                <Carousel.Item>

                    {/* 2nd image starts */}
                    <img
                        className="d-block w-100"
                        src={banner2}
                        height="410px"
                        alt="Second slide"
                    />
                    {/* 2nd image ends */}

                    {/* 2nd caption starts */}
                    <Carousel.Caption>
                        <h3 style={{ color: 'white', backgroundColor: "rgba(0, 0, 0, 0.5)" }}>Let's Explore The World </h3>
                    </Carousel.Caption>
                    {/* 2nd caption ends */}

                </Carousel.Item>
                {/* 2nd slider ends */}


                {/* 3rd slider starts */}
                <Carousel.Item>

                    {/* 3rd image starts */}
                    <img
                        className="d-block w-100"
                        src={banner3}
                        height="410px"
                        alt="Third slide"
                    />
                    {/* 3rd image starts */}

                    {/* 3rd caption starts */}
                    <Carousel.Caption>
                        <h3 style={{ color: 'white', backgroundColor: "rgba(0, 0, 0, 0.5)" }}>To Travel Is To Live</h3>
                    </Carousel.Caption>
                    {/* 3rd caption ends */}

                </Carousel.Item>
                {/* 3rd slider ends */}


            </Carousel>
            {/* Banner slider ends  */}
        </>
    );
};

export default Banner;