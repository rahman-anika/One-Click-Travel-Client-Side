import React, { useEffect, useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const Services = () => {



    let { isLoading } = useAuth();

    // state declaration starts 
    const [services, setServices] = useState([]);
    // state declaration ends 



    // data load from database/server starts 
    useEffect(() => {
        fetch('https://fathomless-retreat-70192.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));

    }, []);
    // data load from database/server ends 



    if (services.length > 0) {
        isLoading = false;

    }

    if (services.length == 0) {
        isLoading = true;
    }




    // if loading then shows spinner 

    console.log(services);

    // if (isLoading === true) {
    //     return <Spinner animation="border" variant="danger" />
    // }

    return (

        // services section starts 
        <div id="services" className="container w-100 m-auto p-5 animate__animated animate__jello">

            {/* title starts */}
            <h1 className="service-title">Our Services</h1>
            <p style={{ color: "rgb(19, 113, 150)" }}>
                <blockquote> <strong> "People don’t take trips, trips take people" – John Steinbeck</strong></blockquote>
                <small>We provide world's best tour packages with a reasonable price.</small>


            </p>
            {/* title ends  */}


            {

                isLoading ?
                    <Spinner animation="border" variant="danger" />
                    :
                    ''

            }

            {/* showing all services after data loading starts  */}
            <div className="row">

                {services.map((service) => (
                    <div key={service._id} className="col-md-6 col-lg-4 col-sm-12">
                        <div className="cart service p-3 m-2 border border">

                            {/* image showing starts  */}
                            <div className="service img">
                                <img src={service.img} alt="category" />
                            </div>
                            {/* image showing ends  */}

                            {/* service info starts  */}
                            <h4 className="mt-4 service-info">{service.name}</h4>
                            <h6 className="mt-4 service-info">Price: ${service.price}</h6>
                            <p className="mt-2">{service.description}</p>

                            <Link to={`/serviceDetails/${service._id}`}>
                                <button className="btn btn-primary">Book Now </button>
                            </Link>
                            {/* service info ends  */}


                        </div>
                    </div>
                ))}
            </div>
            {/* showing all services after data loading ends  */}

        </div>
        // services section ends 

    );
};

export default Services;