import React, { useState } from "react";
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from "./../../hooks/useAuth";
import Header from './../Shared/Header/Header';
import Footer from './../Shared/Footer/Footer';

const Login = () => {
    const { signInWithGoogle, setUser, loginWithEmailAndPassword, setIsLoading } = useAuth();


    // For redirecting after login 

    const history = useHistory();
    const location = useLocation();

    const url = location.state?.from || "/home";



    // state declaration 
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState('');


    // handle email 

    const handleGetEmail = (e) => {
        setEmail(e.target.value);
    }

    // handle password 
    const handleGetPassword = (e) => {
        setPassword(e.target.value);
    }



    // handle login with email and password 
    const handleLoginWithEmailAndPassword = (e) => {
        e.preventDefault();

        loginWithEmailAndPassword(email, password)
            .then((res) => {
                setIsLoading(true)
                setUser(res.user);
                setError('');
                history.push(url);

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(error.message);

            })
            .finally(() => {
                setIsLoading(false)
            })
    }




    // handle google login 
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
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

            <div className="text-center login-form py-5">

                {/* login form starts  */}
                <div className="mx-5 my-cart">
                    <br />
                    <form onSubmit={handleLoginWithEmailAndPassword}>
                        <h3 className="text-primary">Please Login</h3>
                        <br />

                        {/* Email Input starts  */}
                        <input type="email" onBlur={handleGetEmail} placeholder="Email" />
                        <br />
                        {/* Email Input ends  */}

                        {/* Password Input starts  */}
                        <input type="password" onBlur={handleGetPassword} placeholder="Password" />
                        <br />
                        <br />
                        {/* Password Input ends  */}

                        {/* showing error starts   */}
                        <div className="row mb-3 text-danger">
                            <p>{error}</p>
                        </div>
                        {/* showing error ends  */}

                        {/* login button starts  */}
                        <input type="submit" className="btn btn-primary" value="login" />
                        {/* login button ends  */}

                    </form>

                    <div>
                        --------------------------------------------------
                    </div>

                    {/* Google login starts  */}
                    <h2 className="text-primary">Or</h2>

                    <button onClick={handleGoogleLogin} className="btn btn-primary"> <i class="fab fa-google"></i> Google Sign In</button>

                    {/* toggle to register page starts  */}
                    <p> New User ?<Link to="/register">Please register</Link ></p>
                    {/* toggle to register page ends  */}

                </div>
            </div>

            {/* footer section starts  */}
            <Footer></Footer>
            {/* footer section ends  */}
        </>
    );
};

export default Login;
