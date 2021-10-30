import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Services from '../Home/Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';


const ServiceDetails = () => {


    const { serviceId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // for getting logged in user 
    const { user } = useAuth();

    // state declaration starts 
    const [data, setData] = useState([]);
    // state declaration ends 

    // data loading starts using Services.json file starts 
    useEffect(() => {
        fetch('https://fathomless-retreat-70192.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    // data loading starts using Services.json file ends 



    // console.log(data[0].id);

    // try to match data 
    const service = data?.filter(sv => sv._id == serviceId);

    console.log(service);


    // handle submit form

    const onSubmit = (bookingInfo) => {
        // const data = products[index];

        bookingInfo.serviceName = service[0]?.name;
        bookingInfo.price = service[0]?.price;
        bookingInfo.duration = service[0]?.duration;

        // by default pending status 

        bookingInfo.status = "pending";

        console.log(bookingInfo);


        // Post/place new order

        fetch(`https://fathomless-retreat-70192.herokuapp.com/addOrders`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bookingInfo),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    alert("Booking Confirmed Successfully ");
                } else {
                    alert("Booking is not completed");
                }
                reset();
            });
    };



    return (
        <div>
            {/* header section starts */}
            <Header></Header>
            {/* header section ends */}

            <br />
            <br />

            {/* Service Details section starts  */}

            <Row>
                {/* <h1>This is service : {serviceId} </h1> */}

                {/* selected data's image showing starts */}
                <Col>
                    <img width="70%" src={service[0]?.img} alt="" />
                </Col>
                {/* selected data's image showing ends */}

                {/* selected data's details showing starts */}
                <Col className="p-3 mx-5">
                    <h3>Name : {service[0]?.name}</h3>
                    <h3>Price : ${service[0]?.price}</h3>
                    <h3>Duration: {service[0]?.duration}</h3>
                    <br />
                    <p>{service[0]?.description}</p>

                </Col>
                {/* selected data's details showing ends */}

            </Row>

            {/* Service details section ends  */}


            {/* Confirm booking section starts  */}

            <div className="row col-lg-12 text-center add-service-form py-5">
                <div className="my-cart">
                    <h2 className="text-primary">Please Fill Up The Form</h2>

                    <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                        <input defaultValue={user.displayName} {...register("username")} />

                        <br />

                        <input defaultValue={user.email} {...register("email", { required: true })} />

                        <br />

                        {/* <input type="text" value={service[0]?.price} {...register("price", { required: true })} />

                    <br /> */}
                        {errors.email && <span className="error">This field is required</span>}

                        <br />



                        <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                        <br />
                        <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                        <br />
                        <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />
                        <br />

                        <input type="date" placeholder="Deprature Date" defaultValue="" {...register("deprature_date", { required: true })} />

                        <br />

                        <input type="submit" className="btn btn-primary" value="Confirm Booking" />
                    </form>
                </div>

            </div>

            {/* Confirm booking section ends  */}



            {/* footer section starts */}
            <Footer></Footer>
            {/* footer section ends */}

        </div >
    );
};

export default ServiceDetails;