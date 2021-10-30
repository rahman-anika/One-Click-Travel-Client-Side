import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "./../../hooks/useAuth";
import Header from './../Shared/Header/Header';
import Footer from './../Shared/Footer/Footer';
import './Register.css';

const Register = () => {


    const { signInWithGoogle, createAccountWithGoogle, setUser, setIsLoading, updateName } = useAuth();

    // for redirecting 
    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home";


    // state declaration 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    // handle username
    const handleGetName = (e) => {
        console.log(e.target.value);
        setName(e.target.value)
    }

    // handle email 
    const handleGetEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    // handle password 
    const handleGetPassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value)
    }


    // handle registration 
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log('Registration will be added', email, password);


        // if password is less than 6 characters then it shows error 
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;

        }

        // if password does not contain two uppercase it shows error using regex

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase');
            return;

        }


        // create account using email and password 

        createAccountWithGoogle(email, password)
            .then((res) => {
                setIsLoading(true);
                updateName(name);
                setUser(res.user);
                setError('successfully registered');
                history.push(url);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error.message);
                // ..
            })
            .finally(() => {
                setIsLoading(false)
            })
    }



    // handle google login 

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true);
                setUser(res.user);
                history.push(url);
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    };


    return (

        <>

            {/* header section starts  */}
            <Header></Header>
            {/* header section ends  */}


            {/* Registration section starts  */}

            <div className="text-center login-form py-5">

                <div className="mx-5 my-cart">
                    <br />

                    <form onSubmit={handleRegistration}>
                        <input type="text" onBlur={handleGetName} placeholder="name" required />
                        <br />
                        <input type="email" onBlur={handleGetEmail} placeholder="email" required />
                        <br />
                        <input type="password" onBlur={handleGetPassword} placeholder="password" required />
                        <br />

                        <p style={{ color: 'red' }}>{error}</p>
                        <br />


                        <input className="btn btn-primary" type="submit" placeholder="create" value="Sign Up" />
                        <br />
                    </form>
                    <br />
                    <br />

                    {/* <button onClick={handleGoogleLogin}>Google Sign In</button> */}

                    {/* Go to login page  */}
                    <p> Already Signed Up ?<Link to="/login">Please Login</Link ></p>



                </div>
            </div>

            {/* Registration section ends  */}


            {/* footer section starts  */}
            <Footer></Footer>
            {/* footer section ends  */}

        </>
    );
};

export default Register;