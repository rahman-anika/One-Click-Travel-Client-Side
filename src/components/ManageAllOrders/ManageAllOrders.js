import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import './ManageAllOrders.css';


const ManageAllOrders = () => {


    // state declaration 
    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(null);


    // all bookings load from database/server
    useEffect(() => {
        fetch("https://fathomless-retreat-70192.herokuapp.com/allBookings")
            .then((response) => response.json())
            .then((data) => setOrders(data));
    }, []);




    // DELETE an order/booking 

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://fathomless-retreat-70192.herokuapp.com/deleteOrder/${id}`;
            fetch(url, {
                method: 'DELETE'


            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = orders.filter(order => order._id !== id);
                        setOrders(remainingUsers);



                    }
                })
        }

    };




    return (
        <div>

            {/* Header section starts  */}
            <Header></Header>
            {/* Header section ends  */}


            <br />



            {/* Manage all orders section starts  */}
            <h1 className="title animate__animated animate__lightSpeedInRight">Total Bookings:  {orders.length}</h1>
            <br />

            <div className="all-products container m-auto">
                <div className="row container text-center">

                    {/* showing all orders  */}
                    {orders.map((order) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="product border border p-2 m-2">
                                <h5>{order?.username}</h5>
                                <h5>{order?.email}</h5>
                                <h6>{order?.serviceName}</h6>
                                <h6>Price: {order?.price}</h6>
                                <h6>Status: {order?.status}</h6>
                                <h6>Deprature Date: {order?.deprature_date}</h6>

                                {/* button for deleting order  */}
                                <button
                                    onClick={() => handleDeleteOrder(order._id)}
                                    className="btn btn-danger m-2"
                                >
                                    Delete
                                </button>


                                {/* button for updating order status  */}
                                <Link to={`/update/${order._id}`}>
                                    <button className="btn btn-success m-2">Update</button>
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>
            </div>


            {/* Footer section starts  */}
            <Footer></Footer>
            {/* Footer section ends  */}


        </div>

        // Manage all orders section ends 

    );
};

export default ManageAllOrders;