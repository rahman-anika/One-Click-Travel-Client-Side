import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './AddPackage.css';

const AddPackage = () => {

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();



    // Post/add new tour package after login 

    const onSubmit = (data) => {
        console.log(data);
        fetch("https://fathomless-retreat-70192.herokuapp.com/addPackage", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                alert('added successfully');
                reset();

            });

    };


    return (
        <>

            {/* Header section starts  */}
            <Header></Header>
            {/* Header section ends  */}


            {/* Add new tour package section starts  */}

            <div className="text-center add-service-form py-5">
                <div className="my-cart">
                    <h1 className="text-primary">Add New Tour Package</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input
                            className="p-2 m-2"
                            {...register("name")}
                            required
                            placeholder="Tour name"
                        />

                        <br />
                        <input
                            className="p-2 m-2"
                            {...register("duration")}
                            required
                            placeholder="Tour Duration"
                        />

                        <br />


                        {/* include validation with required or other standard HTML validation rules */}
                        <input
                            className="p-2 m-2"
                            type="number"
                            {...register("price", { required: true })}
                            required
                            placeholder="Price"
                        />
                        <br />

                        <input {...register("img")} placeholder="image url" />
                        <br />

                        <input
                            className="p-2 m-2"
                            type="text"
                            {...register("description", { required: true })}
                            required
                            placeholder="Description"
                        />

                        <br />

                        {/* errors will return when field validation fails  */}
                        {errors.exampleRequired && <span>This field is required</span>}
                        <br />
                        <input className="p-1 mt-3 btn btn-primary" type="submit" />
                    </form>
                </div>
            </div>

            {/* Add new tour package section ends  */}


            {/* Footer section starts  */}
            <Footer></Footer>
            {/* Footer section ends  */}

        </>
    );
};

export default AddPackage;