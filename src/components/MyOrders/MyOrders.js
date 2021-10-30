import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./MyOrders.css";

const MyOrders = () => {


    // state declaration 
    const [orders, setOrders] = useState([]);

    // for getting logged in user 
    const { user } = useAuth();
    const email = user.email;


    // load all orders by email query from database/server

    useEffect(() => {
        fetch(`https://fathomless-retreat-70192.herokuapp.com/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email]);

    console.log(orders);




    // DELETE an order 

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


            {/* My orders section starts  */}
            <h1 className="title animate__animated animate__rotateIn">My Orders: {orders.length}</h1>
            <br />

            <div className="all-products">
                <div className="row container text-center mx-auto">

                    {/* showing my aorders  */}
                    {orders?.map((order) => (
                        <div className="col-md-6 col-lg-4">
                            <div className="cart border border p-2 m-2">

                                <h4>{order?.username}</h4>
                                <h4>{order.email}</h4>
                                <h5>{order?.serviceName}</h5>
                                <h5>Price: ${order?.price}</h5>
                                <h5>Deprature Date: {order?.deprature_date}</h5>
                                <h6>Status: {order?.status}</h6>

                                {/* button for deleting order  */}
                                <button
                                    onClick={() => handleDeleteOrder(order._id)}
                                    className="btn btn-danger m-2">Delete </button>

                                <button className="btn btn-success">Chat Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* My orders section ends  */}


            {/* Footer section starts  */}
            <Footer></Footer>
            {/* Footer section ends  */}

        </div>

    );
};

export default MyOrders;