import React from 'react';
import './Gallery.css';
import gallery1 from './../../../images/gallery/gallery1.png';
import gallery2 from './../../../images/gallery/gallery2.png';
import gallery3 from './../../../images/gallery/gallery3.png';
import gallery4 from './../../../images/gallery/gallery4.png';
import gallery5 from './../../../images/gallery/gallery5.png';
import gallery6 from './../../../images/gallery/gallery6.png';
import gallery7 from './../../../images/gallery/gallery7.png';
import gallery8 from './../../../images/gallery/gallery8.png';
import gallery9 from './../../../images/gallery/gallery9.png';



const Gallery = () => {
    return (
        // gallery section starts 
        <div id="gallery" className="container w-100 m-auto p-5 animate__animated animate__bounce">

            {/* title starts */}
            <h1 className="gallery-title">Take A Look At Our Gallery</h1>
            <p style={{ color: "rgb(19, 113, 150)" }}>
                We travel not to escape life, but for life not to escape us.
            </p>
            {/* title ends  */}


            {/* showing all images  */}
            <div className="row">


                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart gallery p-2 m-2 border border">

                        {/* image showing starts  */}
                        <div className="gallery img">
                            <img src={gallery1} alt="category" />

                        </div>
                        {/* image showing ends  */}
                    </div>

                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart gallery p-2 m-2 border border">

                        {/* image showing starts  */}
                        <div className="gallery img">
                            <img src={gallery2} alt="category" />

                        </div>
                        {/* image showing ends  */}
                    </div>

                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart gallery p-2 m-2 border border">

                        {/* image showing starts  */}
                        <div className="gallery img">
                            <img src={gallery3} alt="category" />

                        </div>
                        {/* image showing ends  */}
                    </div>

                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart gallery p-2 m-2 border border">

                        {/* image showing starts  */}
                        <div className="gallery img">
                            <img src={gallery4} alt="category" />

                        </div>
                        {/* image showing ends  */}
                    </div>

                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart gallery p-2 m-2 border border">

                        {/* image showing starts  */}
                        <div className="gallery img">
                            <img src={gallery5} alt="category" />

                        </div>
                        {/* image showing ends  */}
                    </div>

                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart gallery p-2 m-2 border border">

                        {/* image showing starts  */}
                        <div className="gallery img">
                            <img src={gallery6} alt="category" />

                        </div>
                        {/* image showing ends  */}
                    </div>

                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart gallery p-2 m-2 border border">

                        {/* image showing starts  */}
                        <div className="gallery img">
                            <img src={gallery7} alt="category" />

                        </div>
                        {/* image showing ends  */}
                    </div>

                </div>
                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart gallery p-2 m-2 border border">

                        {/* image showing starts  */}
                        <div className="gallery img">
                            <img src={gallery8} alt="category" />

                        </div>
                        {/* image showing ends  */}
                    </div>

                </div>

                <div className="col-md-6 col-lg-4 col-sm-12">
                    <div className="cart gallery p-2 m-2 border border">

                        {/* image showing starts  */}
                        <div className="gallery img">
                            <img src={gallery9} alt="category" />

                        </div>
                        {/* image showing ends  */}
                    </div>

                </div>

            </div>
            {/* showing all images */}

        </div>
        // gallery section ends 

    );
};

export default Gallery;